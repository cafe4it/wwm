Template.header.created = function(){

}

Tracker.autorun(function(c){
    if(Meteor.user()){
        dropdown();
    }else{
        dropdown();
    }
})

function dropdown(){
    Meteor.setTimeout(function(){
        $(document).ready(function () {
           var an = $('.ui.dropdown').dropdown();
            console.log(an)
        });
    },2000);
}

Template.header.events({
    'click #btnLogout' : function(e,t){
        e.preventDefault();
        if(Meteor.user()){
            Meteor.logout(function(err){
                FlowRouter.go('/');
            })
        }
    }
})