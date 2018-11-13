import Switch from "./index";
describe("Switch", () => {
  const wrapper = shallow(<Switch />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
