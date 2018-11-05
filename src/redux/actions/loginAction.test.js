import { login } from "./loginAction";
import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import mockAxios from "axios";
const configure = configureStore([reduxThunk]);
const store = configure();
describe("loginAction", () => {
  beforeEach(() => store.clearActions());
  it("should dispatch", async () => {
    await store.dispatch(login());
    expect(store.getActions()).toEqual([
      { payload: true, type: "LOADING_ACCOUNT" },
      { payload: { ime: "bakir", prezime: "cicvara" }, type: "SAVE_ACCOUNT" },
      { payload: false, type: "LOADING_ACCOUNT" },
      { meta: { form: "login" }, type: "@@redux-form/RESET" }
    ]);
  });
  it("should dispatch error", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject({ response: { data: "problem" } })
    );
    await store.dispatch(login());
    expect(store.getActions()).toEqual([
      { type: "LOADING_ACCOUNT", payload: true },
      { type: "LOADING_ACCOUNT", payload: false },
      { type: "@@redux-form/RESET", meta: { form: "login" } },
      { type: "ERROR_LOGIN", payload: "problem" }
    ]);
  });
});
