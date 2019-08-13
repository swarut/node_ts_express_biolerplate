"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema = {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    facebook: String,
    twitter: String,
    google: String,
    tokens: Array,
    profile: {
        name: String,
        gender: String,
        location: String,
        website: String,
        picture: String
    }
};
exports.User = userSchema;
//# sourceMappingURL=User.js.map