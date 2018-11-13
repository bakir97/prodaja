import React from "react";
import Filter from "./Filter";
const Filters = ({
  minCijena,
  maxCijena,
  minTezina,
  maxTezina,
  changeCijenaMin,
  changeCijenaMax,
  changeTezinaMin,
  changeTezinaMax
}) => {
  return (
    <>
      <Filter
        position="end"
        id="minCijena"
        label="minCijena"
        value={minCijena}
        onChange={e => changeCijenaMin(e)}
      />
      <Filter
        position="start"
        id="maxCijena"
        label="maxCijena"
        value={maxCijena}
        onChange={e => changeCijenaMax(e)}
      />
      <Filter
        position="end"
        id="minTezina"
        label="minTezina"
        value={minTezina}
        onChange={e => changeTezinaMin(e)}
      />
      <Filter
        position="start"
        id="maxTezina"
        label="maxTezina"
        value={maxTezina}
        onChange={e => changeTezinaMax(e)}
      />
    </>
  );
};

export default Filters;
