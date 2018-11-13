import FormItems from "./FormItems";
describe("FormItems", () => {
  const wrapper = shallow(<FormItems oldPictures={[]} pictures={[]} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
