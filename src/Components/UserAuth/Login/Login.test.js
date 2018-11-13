import { Login } from "./Login";
import LoginContent from "./LoginContent";
describe("Login", () => {
  const params = {
    login: jest.fn(),
    handleSubmit: jest.fn()
  };

  const wrapper = shallow(<Login {...params} />);
  it("should call submit", () => {
    wrapper.instance().submit({ name: "Test" });
    expect(params.login).toBeCalledWith({ name: "Test" });
  });
});

describe("LoginContent", () => {
  const wrapper = shallow(<LoginContent errorLogin={{}} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
