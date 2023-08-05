module.exports = {


  friendlyName: 'Update',


  description: 'Update articles.',


  inputs: {

    author: {
      type: 'string',
      required: true
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
    
    let articleRecord = await Articles.updateOne({ id: this.req.params.id })
      .set({ author, title, body });
    // All done.
    return articleRecord;

  }


};
