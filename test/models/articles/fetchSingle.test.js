describe('#fetchSingleArticle()', () => {
  it('should fetch single article', (done) => {
    Articles.findOne({title: 'Test title'})
    .then((data) => {
      if (!data) {
        return done(new Error('No article created'));
      }
      return done();
    })
    .catch(done);
  });
});
