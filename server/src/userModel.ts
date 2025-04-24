import { Schema, model, Types } from "mongoose";

interface IUser {
  cognitoId: string;
  username: string;
  profilePictureUrl?: string;
  teamId?: Types.ObjectId;
  authoredTasks: Types.ObjectId[];
  assignedTasks: Types.ObjectId[];
  taskAssignments: Types.ObjectId[];
  attachments: Types.ObjectId[];
  comments: Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    cognitoId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profilePictureUrl: { type: String },
    teamId: { type: Schema.Types.ObjectId, ref: "Team" },
    authoredTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    assignedTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    taskAssignments: [{ type: Schema.Types.ObjectId, ref: "TaskAssignment" }],
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const User = model<IUser>("User", userSchema);
export default User;