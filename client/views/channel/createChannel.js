Template.createChannel.onCreated(function(){
    var self = this;
    self.isOver18yo = new ReactiveVar(17);
    self.autorun(function(){
        if(self.isOver18yo.get() >= 18){
            Meteor.call('createGuestUser',function(err, rs){
                if(_.has(rs,'username') && _.has(rs,'token')){
                    Meteor.setTimeout(function(){
                        Meteor.loginWithPassword(rs.username, rs.token,function(err){
                            if(!err){
                                FlowRouter.go('/my-channel')
                            }
                        })
                    },2000)
                }
            })
        }
    })
})

Template.createChannel.rendered = function(){
    var self = this;
    $(document).ready(function () {
        $('#dlg_isOver18yo')
            .modal({
                closable  : false,
                onDeny    : function(){
                    FlowRouter.go('/');
                },
                onApprove : function() {
                    self.isOver18yo.set(_.random(18,70));
                }
            })
            .modal('show');
    })
    if(!Meteor.user()){

        /*Meteor.setTimeout(function(){
            Meteor.call('createGuestUser',function(err, rs){
                FlowRouter.go('/');
            })
        },2000)*/
    }
}