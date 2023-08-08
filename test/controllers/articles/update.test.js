describe('PATCH /articles/:id', () => {
  it('should update single article', (done) => {
    Articles.find({})
    .then(data => {
      global.supertest(sails.hooks.http.app)
        .patch(`/articles/${data[0].id}`)
        .send({
          title: data[0].title,
          body: 'This is updated body'
        })
        .expect(200, done);
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

  it('should not update single article', (done) => {
    Articles.find({})
    .then(data => {
      global.supertest(sails.hooks.http.app)
        .patch(`/articles/${data[0].id}`)
        .send({
          author: data[0].author,
          title: data[0].title,
          body: 'This is updated body'
        })
        .expect(400, done);
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

});
