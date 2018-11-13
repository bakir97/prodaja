export default filter => {
  if (typeof filter.minCijena === "string") {
    return { minCijena: filter.minCijena };
  }
  if (typeof filter.maxCijena === "string") {
    return { maxCijena: filter.maxCijena };
  }
  if (typeof filter.minTezina === "string") {
    return { minTezina: filter.minTezina };
  }
  if (typeof filter.maxTezina === "string") {
    return { maxTezina: filter.maxTezina };
  }
};
