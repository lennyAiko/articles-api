describe('#deleteArticle()', () => {
  it('should delete an article', async () => {
    try {
      await Articles.destroyOne({ title: 'Test title' });
    } catch (err) {
      return new Error(`Could not delete article, here's why: \n ${err}`);
    }
  });
});
