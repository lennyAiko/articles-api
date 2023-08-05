module.exports = {


  friendlyName: 'Delete',


  description: 'Delete articles.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    await Articles.destroyOne({ id: this.req.params.id });
    // All done.
    return { message: `Item with id: ${this.req.params.id} successfully deleted` };

  }


};
