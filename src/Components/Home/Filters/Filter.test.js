import Filter from "./Filters";
describe("Filter", () => {
  const wrapper = shallow(<Filter />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
