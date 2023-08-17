describe('GET /articles', () => {
  it('should fetch all articles', (done) => {
    global.supertest(sails.hooks.http.app)
        .get('/articles')
        .expect(checkBodyLength)
        .expect(200, done);
  });
});

function checkBodyLength(res) {
  if (res.body.length < 1) {
    throw new Error('missing body!');
  }
}
