import NotFound from "./index";
describe("NotFound", () => {
  const history = {
    push: jest.fn()
  };
  const wrapper = shallow(<NotFound history={history} />);
  it("should render normal", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call history", () => {
    wrapper.find("#button").simulate("click");
    expect(history.push).toBeCalledWith("/");
  });
});
