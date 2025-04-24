"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectTeamSchema = new mongoose_1.Schema({
    teamId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Team",
    },
    projectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Project",
    },
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
const ProjectTeam = (0, mongoose_1.model)("ProjectTeam", projectTeamSchema);
exports.default = ProjectTeam;
