import Filter from "./index";
describe("Filter index", () => {
  const filters = jest.fn();
  afterEach(() => {
    filters.mockClear();
  });
  const wrapper = shallow(<Filter filters={filters} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call minCijena", () => {
    wrapper.instance().changeCijenaMin({ target: { value: "testmin" } });
    expect(filters).toBeCalledWith({ minCijena: "testmin" });
  });
  it("should call maxCijena", () => {
    wrapper.instance().changeCijenaMax({ target: { value: "testmax" } });
    expect(filters).toBeCalledWith({ maxCijena: "testmax" });
  });
  it("should call minTezina", () => {
    wrapper.instance().changeTezinaMin({ target: { value: "testmin" } });
    expect(filters).toBeCalledWith({ minTezina: "testmin" });
  });
  it("should call maxTezina", () => {
    wrapper.instance().changeTezinaMax({ target: { value: "testmax" } });
    expect(filters).toBeCalledWith({ maxTezina: "testmax" });
  });
});
