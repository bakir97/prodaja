import LayoutButtons from "./LayoutButtons";
import React from "react";
describe("LayoutButtons", () => {
  const changeLayout = jest.fn();
  const wrapper = shallow(<LayoutButtons changeLayout={changeLayout} />);
  it("should render normal", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call 12 layout", () => {
    wrapper.find("#layout12").simulate("click");
    expect(changeLayout).toBeCalledWith(12);
  });
  it("should call 6 layout", () => {
    wrapper.find("#layout6").simulate("click");
    expect(changeLayout).toBeCalledWith(6);
  });
  it("should call 4 layout", () => {
    wrapper.find("#layout4").simulate("click");
    expect(changeLayout).toBeCalledWith(4);
  });
});
