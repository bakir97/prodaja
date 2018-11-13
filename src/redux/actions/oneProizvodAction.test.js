import { getOneProizvod, deleteOneProizvod } from "./oneProizvodAction";
import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import mockAxios from "axios";
const configure = configureStore([reduxThunk]);
const store = configure();
describe("oneProizvodAction", () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe("getOneProizvod", () => {
    it("should get one proizvod", async () => {
      await store.dispatch(getOneProizvod(1));
      expect(store.getActions()).toEqual([
        { payload: true, type: "LOADING_PROIZVOD" },
        { payload: { cijena: 5, name: "test" }, type: "ONE_PROIZVOD" },
        { payload: false, type: "LOADING_PROIZVOD" }
      ]);
    });
    it("should trow error one proizvod", async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.reject());
      await store.dispatch(getOneProizvod(1));
      expect(store.getActions()).toEqual([
        { payload: true, type: "LOADING_PROIZVOD" },
        { payload: false, type: "LOADING_PROIZVOD" },
        {
          payload:
            "Server trenutno ne radi pokusajte kasnije ili se obratite programeru",
          type: "ERROR_PROIZVOD"
        },
        { payload: false, type: "LOADING_PROIZVOD" }
      ]);
    });
  });
  describe("deleteOneProizvod", () => {
    beforeEach(() => {
      store.clearActions();
    });
    it("should delete oneProizvod", async () => {
      await store.dispatch(deleteOneProizvod(1));
      expect(store.getActions()).toEqual([
        { payload: true, type: "LOADING_PROIZVOD" },
        { payload: true, type: "SUCCESS" },
        { payload: false, type: "LOADING_PROIZVOD" }
      ]);
    });
    it("should trow error", async () => {
      mockAxios.delete.mockImplementationOnce(() =>
        Promise.reject({ data: "something" })
      );
      await store.dispatch(deleteOneProizvod(1));
      expect(store.getActions()).toEqual([
        { payload: true, type: "LOADING_PROIZVOD" },
        {
          payload:
            "Server trenutno ne radi pokusajte kasnije ili se obratite programeru",
          type: "ERROR_PROIZVOD"
        },
        { payload: false, type: "LOADING_PROIZVOD" }
      ]);
    });
  });
});
