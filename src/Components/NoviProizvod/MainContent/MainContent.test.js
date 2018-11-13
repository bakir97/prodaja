import MainContent from "./index";
describe("MainContent", () => {
  const wrapper = shallow(
    <MainContent newProizvodState={{}} proizvod={{}} match={{ params: {} }} />
  );
  it("should call drop", () => {
    wrapper.instance().drop([{ preview: 1 }, { preview: 2 }]);
    expect(wrapper.state().slike).toEqual([{ preview: 1 }, { preview: 2 }]);
  });
  it("should call obirisi", () => {
    wrapper.instance().obrisi(1);
    expect(wrapper.state().slike).toEqual([{ preview: 2 }]);
  });
  it("should call obirisi", () => {
    wrapper.setState({ oldPictures: [1, 2] });
    wrapper.instance().obrisiOldPictures(1);
    expect(wrapper.state().oldPictures).toEqual([2]);
  });
});
