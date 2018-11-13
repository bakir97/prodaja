import Cards from "./Cards";
describe("Cards", () => {
  const proizvodi = [
    {
      naslov: "test",
      slike: [1, 2],
      _id: 1,
      cijena: 1,
      tezina: 1
    },
    {
      naslov: "test2",
      slike: [1, 2],
      _id: 2,
      cijena: 2,
      tezina: 2
    }
  ];
  const wrapper = shallow(<Cards proizvodi={proizvodi} />);
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
