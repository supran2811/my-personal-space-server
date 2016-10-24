/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstname: {
      type: 'string',
      required:true
    },
    lastname: {
      type: 'string'
    },
    email: {
      type: 'string',
      required:true
    },
    password: {
      type: 'string',
      required:true
    },
    username: {
      type: 'string',
      primaryKey:true,
      required:true
    }
  },
  tableName : "usertable",
  autoCreatedAt : false,
  autoUpdatedAt : false,
  autoPK : false

};

