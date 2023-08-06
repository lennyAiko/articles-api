describe('#updateArticle()', () => {
  it('should update an article', async () => {
    try {
      await Articles.updateOne({ title: 'Test title' })
            .set({ title:'Updated title', body: 'This is updated body' });
    } catch (err) {
      return new Error(`Could not update article, here's why: \n ${err}`);
    }
  });
});
