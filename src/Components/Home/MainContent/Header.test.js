import Header from "./Header";
describe("Header", () => {
  const getProizvodi = jest.fn();
  const wrapper = shallow(<Header getProizvodi={getProizvodi} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call search", () => {
    wrapper.instance().search({});
    expect(getProizvodi).toBeCalled();
  });
});
