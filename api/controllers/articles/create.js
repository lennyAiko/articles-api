module.exports = {


  friendlyName: 'Create',


  description: 'Create articles.',


  inputs: {

    author: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string',
      required: true,
    }

  },


  exits: {

  },


  fn: async function ({author, title, body}) {

    let articleRecord = await Articles.create({ author, title, body }).fetch()
    return articleRecord;

  }


};
