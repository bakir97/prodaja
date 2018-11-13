import AdminButtons from "./index";
describe("AdminButtons", () => {
  const params = {
    history: {
      push: jest.fn()
    },
    match: { params: { id: 1 } },
    handleDelete: jest.fn()
  };
  const wrapper = shallow(<AdminButtons {...params} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should push to edit", () => {
    wrapper.find("#edit").simulate("click");
    expect(params.history.push).toBeCalledWith("/Edit/1");
  });
  it("should call delete", () => {
    wrapper.find("#delete").simulate("click");
    expect(params.handleDelete).toBeCalled();
  });
});
