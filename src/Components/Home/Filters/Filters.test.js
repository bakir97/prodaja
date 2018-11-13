import Filters from "./Filters";
describe("Filters", () => {
  const wrapper = shallow(<Filters />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
