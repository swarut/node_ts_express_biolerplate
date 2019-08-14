
import crypto from "crypto";

type comparePasswordFunction = (password: string, cb: (err: any, isMatch: any) => {}) => void;

export interface AuthToken {
    accessToken: string;
    provider: string;
}

const userSchema = {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    tokens: Array,

    profile: {
        name: String,
        picture: String
    }
};

export const User = userSchema;
