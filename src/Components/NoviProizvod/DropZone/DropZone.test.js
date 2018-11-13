import DropZone from "./index";
describe("DropZone", () => {
  const wrapper = shallow(<DropZone />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
