import MainContent from "./index";
import Text from "./Text";
describe("MainContent", () => {
  const wrapper = shallow(<MainContent />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe("Text", () => {
  const wrapper = shallow(<Text />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
