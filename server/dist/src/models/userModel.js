"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    cognitoId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profilePictureUrl: { type: String },
    teamId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Team" },
    authoredTasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Task" }],
    assignedTasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Task" }],
    taskAssignments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "TaskAssignment" }],
    attachments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Attachment" }],
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Comment" }],
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
