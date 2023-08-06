module.exports = {


  friendlyName: 'Update',


  description: 'Update articles.',


  inputs: {
    
    author: {
      type: 'string',
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

    // FUTURE BEGINS
    if (author) {
      return this.res.status(400).json('Cannot update author')
    }
    // FUTURE ENDS

    let articleRecord = await Articles.updateOne({ id: this.req.params.id })
      .set({ title, body });
    // All done.
    return articleRecord;

  }


};
