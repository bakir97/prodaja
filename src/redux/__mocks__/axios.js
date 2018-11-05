export default {
  post: jest.fn(() =>
    Promise.resolve({
      data: { token: 123, podaci: { ime: "bakir", prezime: "cicvara" } },
      error: { response: { data: "nista" } }
    })
  ),
  defaults: {
    headers: {
      common: {
        Authorization: ""
      }
    }
  }
};
