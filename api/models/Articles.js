/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    author: {
      type: 'string',
      required: true,
      maxLength: 30
    },
    title: {
      type: 'string',
      required: true,
      maxLength: 60
    },
    body: {
      type: 'string',
      required: true
    }

  },

};

