import { MyCard } from "./Card";
describe("Card", () => {
  const mock = { history: { push: jest.fn() }, id: 1, classes: {} };
  const wrapper = shallow(<MyCard {...mock} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call push", () => {
    wrapper.find("#area").simulate("click");
    expect(mock.history.push).toBeCalledWith("/Proizvod/1");
  });
});
