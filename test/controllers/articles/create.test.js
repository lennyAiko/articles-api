describe('#createArticleEndpoint()', () => {
  it('should create an article', (done) => {
    global.superset(sails.hooks.http.app)
        .post('/articles')
        .send({
          'author': 'Alex Hormozi',
          'title': '100M offers books',
          'body': 'This is another body againnnnn'
        })
        .expect(200, done);
  });
});
