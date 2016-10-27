/**
 * Notes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      username:{
        type:'string',
        required:true
      },
      name:{
        type:'string',
        required : true
      },
      noteid:{
        type:'string',
        required:true
      },
      notepwd:{
        type:'string',
        required:true
      }
      
  },
  tableName : "notestable",
  autoCreatedAt : false,
  autoUpdatedAt : false
};

