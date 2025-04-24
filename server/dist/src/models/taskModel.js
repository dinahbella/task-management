"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
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
            validator: function (value) {
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    authorUserId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedUserId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    taskAssignments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "TaskAssignment",
        },
    ],
    attachments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Attachment",
        },
    ],
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
}, {
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
});
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
const Task = (0, mongoose_1.model)("Task", taskSchema);
exports.default = Task;
