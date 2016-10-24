/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

        register : function(req,res){
            console.log(req.body);
            
            User.create(req.body).exec(function(err , data){
                     if (err) { return res.serverError(err); }

                    sails.log('data inserted id is:', data.username);
                    return res.ok();
            });

            
        },

        login : function(req,res){
              console.log(req.body);

              User.find(req.body).exec(function(err , data){
                     if (err) { return res.serverError(err); }

                    sails.log('data exist', data.username);
                    return data.length > 0?res.json(data[0]):res.serverError(403);//res.json(data);
            });  
        }
};

