import { Schema, model, Types } from "mongoose";

interface IProject {
  name: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  tasks: Types.ObjectId[];
  projectTeams: Types.ObjectId[];
}

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
      validate: {
        validator: function (this: IProject, value: Date) {
          return !this.startDate || !value || value >= this.startDate;
        },
        message: "End date must be after start date",
      },
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    projectTeams: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProjectTeam",
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
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

// Indexes
projectSchema.index({ name: 1 }, { unique: true });
projectSchema.index({ startDate: 1 });
projectSchema.index({ endDate: 1 });

const Project = model<IProject>("Project", projectSchema);
export default Project;
