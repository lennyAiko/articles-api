module.exports = {


  friendlyName: 'Index',


  description: 'Index articles.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    /*
    FUTURE: handle errors and setup to return 404
    */

    let articleRecord = await Articles.find({})
    return articleRecord;

  }


};
