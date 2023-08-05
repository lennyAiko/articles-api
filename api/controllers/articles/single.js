module.exports = {


  friendlyName: 'Single',


  description: 'Single articles.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let articleRecord = await Articles.findOne({ id: this.req.params.id });
    if (!articleRecord) {
      sails.log('Could not find article');
      return this.res.status(404).json({ message: `Article with id: ${this.req.params.id} not found`});
    }
    // All done.
    return articleRecord;

  }


};
