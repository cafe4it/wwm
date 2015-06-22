var Schemas = {}

Player = new Meteor.Collection('players');

Schemas.Player = new SimpleSchema({
    title : {
        type : String,
        optional : true
    },
    thumbnail : {
        type : String,
        optional : true
    },
    description : {
        type : String,
        optional : true
    },
    url : {
        type : String
    },
    source : {
        type : String,
        optional : true
    },
    updatedAt :{
        type : Date,
        autoValue : function(){
            return new Date;
        }
    },
    state : {
        type : String,
        autoValue : function(){
            return 'IDLE';
        }
    },
    createdBy : {
        type : String,
        autoValue : function(){
            return Meteor.userId()
        }
    }
})

Player.attachSchema(Schemas.Player);

Player.helpers({
    isOwner : function(){
        return Meteor.userId() == this.createdBy;
    }
})