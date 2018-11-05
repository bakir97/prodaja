import React from "react";
import SearchBar from "./SearchBar";
describe("<SearchBar/>", () => {
  const wrapper = shallow(<SearchBar />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should change state", () => {
    wrapper.simulate("change", "e");
    expect(wrapper.state()).toEqual({ search: "e" });
  });
});
