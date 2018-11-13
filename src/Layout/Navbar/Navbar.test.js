import { Navbar } from "./Navbar";
describe("Navbar", () => {
  let admin = true;
  const wrapper = shallow(<Navbar auth={admin} classes={{}} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
