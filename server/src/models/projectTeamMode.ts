import { Schema, model, Types } from "mongoose";

interface IProjectTeam {
  teamId: Types.ObjectId;
  projectId: Types.ObjectId;
}

const projectTeamSchema = new Schema<IProjectTeam>(
  {
    teamId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Team",
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        return ret;
      },
    },
  }
);

// Compound index to ensure unique team-project combinations
projectTeamSchema.index({ teamId: 1, projectId: 1 }, { unique: true });

// Virtual populate to avoid storing actual arrays
projectTeamSchema.virtual("team", {
  ref: "Team",
  localField: "teamId",
  foreignField: "_id",
  justOne: true,
});

projectTeamSchema.virtual("project", {
  ref: "Project",
  localField: "projectId",
  foreignField: "_id",
  justOne: true,
});

const ProjectTeam = model<IProjectTeam>("ProjectTeam", projectTeamSchema);
export default ProjectTeam;
