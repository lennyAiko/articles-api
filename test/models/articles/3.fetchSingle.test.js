describe('#fetchSingleArticle()', () => {
  it('should fetch single article', (done) => {
    Articles.findOne({title: 'Test title'})
    .then((data) => {
      if (!data) {
        return done(new Error('Article not found'));
      }
      return done();
    })
    .catch(done);
  });
});
