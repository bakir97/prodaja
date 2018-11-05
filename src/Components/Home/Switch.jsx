import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
const SwitchComponent = ({ changeFiltersState, filters }) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            checked={filters}
            onChange={() => changeFiltersState()}
            value="checkedA"
          />
        }
        label="Show filters"
      />
    </FormGroup>
  );
};

export default SwitchComponent;
