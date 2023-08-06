describe('#fetchAllArticles()', () => {
  it('should fetch all articles', (done) => {
    Articles.find({})
    .then((data) => {
      if (data.length < 1) {
        return done(new Error('No article created'));
      }
      return done();
    })
    .catch(done);
  });
});
