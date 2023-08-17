module.exports = {


  friendlyName: 'Update',


  description: 'Update articles.',


  inputs: {

    author: {
      type: 'string',
      required: false
    },
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function ({author, title, body}) {

    if (author) {
      return this.res.status(400).json('Cannot update author');
    }

    let articleRecord = await Articles.updateOne({ id: this.req.params.id })
      .set({ title, body });
    // All done.
    return articleRecord;

  }


};
