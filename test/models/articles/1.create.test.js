describe('#createArticle()', () => {
  it('should create an article', async () => {
    var article = await Articles.createEach([{
      author: 'Test',
      title: 'Test title',
      body: 'Test body'
    }, {
      author: 'Alex Hormozi',
      title: '100M offers',
      body: 'This is another body'
    }, {
      author: 'Alex Hormozi',
      title: '100M offers book',
      body: 'This is another body again'
    }]).fetch();
    if (!article) {
      return new Error('Should create an article but it failed');
    }
  });
});
