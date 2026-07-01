import { describe, it, expect } from "vitest";
import { getLetterGrade } from "../../../src/conditionals/getLetterGrade";

describe("getLetterGrade", () => {
  it.each([
    { score: 91, expected: "A" },
    { score: 90, expected: "A" },
    { score: 89, expected: "B" },
    { score: 80, expected: "B" },
    { score: 79, expected: "C" },
    { score: 70, expected: "C" },
    { score: 69, expected: "D" },
    { score: 60, expected: "D" },
    { score: 59, expected: "F" },
    { score: 40, expected: "F" },
  ])("should return  grade: $expected for score: $score", ({ score, expected }) =>
    expect(getLetterGrade(score)).toBe(expected)
  );
});
