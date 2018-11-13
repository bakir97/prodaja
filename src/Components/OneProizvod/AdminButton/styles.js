const same = {
  button: {
    fontFamily: "Kalam",
    paddingBottom: 0,
    marginRight: "1rem",
    WebkitBackgroundClip: "text",
    color: "transparent"
  }
};
export default {
  edit: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    ...same.button
  },
  editButton: {
    color: "#f37335",
    marginBottom: 5
  },
  delete: {
    background: "linear-gradient(to right, #333333, #dd1818)",
    ...same.button
  },
  deleteButton: {
    color: "#dd1818",
    marginBottom: 5
  }
};
