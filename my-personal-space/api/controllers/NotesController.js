/**
 * NotesController
 *
 * @description :: Server-side logic for managing notes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req,res){
             sails.log(req.body);
            
            Notes.create(req.body).exec(function(err , data){
                     if (err) { return res.serverError(err); }

                    sails.log('data inserted id is:', data.name);
                    return res.json(data);
            });
    },

    remove : function(req,res){
        return res.ok();
    },

    update : function(req,res){
        return res.ok();
    },
    list : function(req,res){

        sails.log(req.query);
        
        Notes.find(req.query).exec(function(err , entrydata){
            if(err){
                return res.serverError(err);
            }
            sails.log('Data exist..');
            sails.log(entrydata);
            return res.json(entrydata);
        })

    }
    
};

