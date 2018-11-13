import ScrollToTop from "./index";
describe("ScrollToTop", () => {
  const scrollToTop = jest.fn();
  const wrapper = shallow(<ScrollToTop scrollToTop={scrollToTop} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call scrollToTop()", () => {
    wrapper.find("#button").simulate("click");
    expect(scrollToTop).toBeCalled();
  });
});
