module.exports = {


  friendlyName: 'Index',


  description: 'Index articles.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    let articleRecord = await Articles.find({});
    return articleRecord;

  }


};
