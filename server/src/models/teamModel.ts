import { Schema, model, Types } from "mongoose";

interface ITeam {
  teamName: string;
  productOwnerUserId?: Types.ObjectId;
  projectManagerUserId?: Types.ObjectId;
  projectTeams: Types.ObjectId[];
  users: Types.ObjectId[];
}

const teamSchema = new Schema<ITeam>(
  {
    teamName: { type: String, required: true },
    productOwnerUserId: { type: Schema.Types.ObjectId, ref: "User" },
    projectManagerUserId: { type: Schema.Types.ObjectId, ref: "User" },
    projectTeams: [{ type: Schema.Types.ObjectId, ref: "ProjectTeam" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        ret._id = ret._id.toString();
        return ret;
      },
    },
  }
);

const Team = model<ITeam>("Team", teamSchema);
export default Team;
