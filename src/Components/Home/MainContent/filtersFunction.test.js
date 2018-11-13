import filtersFunction from "./filtersFunction";
describe("filtersFunction", () => {
  it("should return maxCijena", () => {
    expect(filtersFunction({ maxCijena: "20" })).toEqual({ maxCijena: "20" });
  });
});
