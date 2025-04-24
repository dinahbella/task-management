"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    teamName: { type: String, required: true },
    productOwnerUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    projectManagerUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    projectTeams: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "ProjectTeam" }],
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            ret._id = ret._id.toString();
            return ret;
        },
    },
});
const Team = (0, mongoose_1.model)("Team", teamSchema);
exports.default = Team;
