import { Form } from "./Form";
describe("Form", () => {
  const handleSubmit = jest.fn();
  const wrapper = shallow(<Form handleSubmit={handleSubmit} />);
  it("should render", () => {
    wrapper.find("form").simulate("submit");
    expect(handleSubmit).toBeCalled();
  });
});
