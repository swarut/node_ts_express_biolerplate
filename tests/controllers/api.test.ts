import request from "supertest";
import app from "../../src/app";

describe("GET /api", () => {
    it("returns 200 OK", () => {
        return request(app).get("/api")
            .expect(200);
    });
});

describe("GET /api/sample", () => {
    it("returns 200 OK with title", () => {
        return request(app).get("/api/sample")
            .expect("Content-Type", /json/)
            .expect(200, {title: "sample"});
    });
});
