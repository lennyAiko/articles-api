describe('#createArticle()', () => {
  it('should create an article', async () => {
    var article = await Articles.create({
      author: 'Test',
      title: 'Test title',
      body: 'Test body'
    });
    if (!article) {
      return new Error('Should create an article but it failed');
    }
  });

  it('should not create an article', async () => {
    try {
      await Articles.create({
        author: 'Test',
        title: 'Test title',
        body: 'Test body'
      });
      return new Error('Should not create article with same title');
    } catch (err) {
      global.sails.log(err);
      return;
    }
  });
});
