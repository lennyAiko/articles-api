describe('DELETE /articles/:id', () => {
  it('should delete single article', (done) => {
    Articles.find({})
    .then(data => {
      global.supertest(sails.hooks.http.app)
        .delete(`/articles/${data[0].id}`)
        .expect(200, done);
    })
    .catch((err) => {
      throw new Error(err);
    });
  });
});
