import { postProizvod, getProizvodi } from "./proizvodiActions";
import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import mockAxios from "axios";
const configure = configureStore([reduxThunk]);
const store = configure();
describe("proizvodiActions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe("post proizvod", () => {
    it("should post proizvod", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: { naslov: "test", opis: "test" } })
      );
      await store.dispatch(postProizvod());
      expect(store.getActions()).toEqual([
        { payload: true, type: "LOADING_PROIZVOD" },
        { payload: { naslov: "test", opis: "test" }, type: "NEW_PROIZVOD" },
        { payload: { naslov: "test", opis: "test" }, type: "ONE_PROIZVOD" },
        { payload: false, type: "LOADING_PROIZVOD" },
        { meta: { form: "noviProizvodForm" }, type: "@@redux-form/RESET" }
      ]);
    });
    it("should dispatch error invalid form", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.reject({ response: { data: "problem" } })
      );
      await store.dispatch(postProizvod());
      expect(store.getActions()).toEqual([
        { type: "LOADING_PROIZVOD", payload: true },
        {
          type: "ERROR_PROIZVOD",
          payload:
            "Nesto niste pravilno unijeli. Pokusajte ponovo ili se obratite programeru"
        },
        { type: "LOADING_PROIZVOD", payload: false }
      ]);
    });
    it("should dispatch error server", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.reject({ response: "" })
      );
      await store.dispatch(postProizvod());
      expect(store.getActions()).toEqual([
        { type: "LOADING_PROIZVOD", payload: true },
        { type: "LOADING_PROIZVOD", payload: false },
        {
          type: "ERROR_PROIZVOD",
          payload:
            "Server trenutno ne radi pokusajte kasnije ili se obratite programeru"
        }
      ]);
    });
  });
  describe("get proizvodi", () => {
    it("should get proizvodi", async () => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            { naslov: "test", opis: "test" },
            { naslov: "test2", opis: "test2" }
          ]
        })
      );
      await store.dispatch(getProizvodi());

      expect(store.getActions()).toEqual([
        { type: "LOADING_PROIZVOD", payload: true },
        {
          type: "GET_PROIZVODI",
          payload: [
            { naslov: "test", opis: "test" },
            { naslov: "test2", opis: "test2" }
          ]
        },
        { type: "LOADING_PROIZVOD", payload: false }
      ]);
    });
  });
});
