describe('GET /articles/:id', () => {
  it('should fetch single article', (done) => {
    Articles.find({})
    .then(data => {
      global.supertest(sails.hooks.http.app)
        .get(`/articles/${data[0].id}`)
        .expect(200, done);
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

  it('should not fetch single article', (done) => {
    global.supertest(sails.hooks.http.app)
      .get('/articles/999')
      .expect(404, done);
  });
});
