import { Schema, model, Types } from "mongoose";

interface ITask {
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  tags?: string;
  startDate?: Date;
  dueDate?: Date;
  points?: number;
  projectId: Types.ObjectId;
  authorUserId: Types.ObjectId;
  assignedUserId?: Types.ObjectId;
  taskAssignments: Types.ObjectId[];
  attachments: Types.ObjectId[];
  comments: Types.ObjectId[];
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ["Todo", "InProgress", "Done", "Blocked"],
      default: "Todo",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },
    tags: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
      validate: {
        validator: function (this: ITask, value: Date) {
          return !this.startDate || !value || value >= this.startDate;
        },
        message: "Due date must be after start date",
      },
    },
    points: {
      type: Number,
      min: 0,
      max: 100,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    authorUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    taskAssignments: [
      {
        type: Schema.Types.ObjectId,
        ref: "TaskAssignment",
      },
    ],
    attachments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Attachment",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
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

// Indexes for better query performance
taskSchema.index({ title: "text", description: "text" });
taskSchema.index({ status: 1 });
taskSchema.index({ priority: 1 });
taskSchema.index({ projectId: 1 });
taskSchema.index({ authorUserId: 1 });
taskSchema.index({ assignedUserId: 1 });
taskSchema.index({ dueDate: 1 });

// Virtual population for relationships
taskSchema.virtual("project", {
  ref: "Project",
  localField: "projectId",
  foreignField: "_id",
  justOne: true,
});

taskSchema.virtual("author", {
  ref: "User",
  localField: "authorUserId",
  foreignField: "_id",
  justOne: true,
});

taskSchema.virtual("assignee", {
  ref: "User",
  localField: "assignedUserId",
  foreignField: "_id",
  justOne: true,
});

const Task = model<ITask>("Task", taskSchema);
export default Task;
