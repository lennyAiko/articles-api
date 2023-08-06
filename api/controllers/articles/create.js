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

    // NEW FEATURE BEGINS HERE
    let article  = await Articles.findOne({ title: title });

    if (article) {
      return this.res.status(400).json('Title already exists');
    }
    // NEW FEATURE ENDS HERE

    let articleRecord = await Articles.create({ author, title, body }).fetch();
    return articleRecord;

  }


};
