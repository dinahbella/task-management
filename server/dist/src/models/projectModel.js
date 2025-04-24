"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
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
            validator: function (value) {
                return !this.startDate || !value || value >= this.startDate;
            },
            message: "End date must be after start date",
        },
    },
    tasks: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
    projectTeams: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "ProjectTeam",
        },
    ],
}, {
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
});
// Indexes
projectSchema.index({ name: 1 }, { unique: true });
projectSchema.index({ startDate: 1 });
projectSchema.index({ endDate: 1 });
const Project = (0, mongoose_1.model)("Project", projectSchema);
exports.default = Project;
