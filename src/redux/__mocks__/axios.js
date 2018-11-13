export default {
  post: jest.fn(() =>
    Promise.resolve({
      data: { token: 123, podaci: { ime: "bakir", prezime: "cicvara" } },
      error: { response: { data: "nista" } }
    })
  ),
  get: jest.fn(() => Promise.resolve({ data: { name: "test", cijena: 5 } })),
  delete: jest.fn(() => Promise.resolve()),
  defaults: {
    headers: {
      common: {
        Authorization: ""
      }
    }
  }
};
