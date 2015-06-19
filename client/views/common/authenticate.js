Template.Authenticate.rendered = function(){
    $(document).ready(function(){
        Meteor.setTimeout(function(){
            $('#loginForm').form({
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        }
                    ]
                }
            })
        },1500);
    })
}

Template.Authenticate.events({
    'click #btnLogin' : function(e,t){
        e.preventDefault();
        var username = $('#txtLogin_Username').val(),
            password = $('#txtLogin_Password').val();
        if(!_.isEmpty(username) && !_.isEmpty(password)){
            Meteor.loginWithPassword(username,password,function(err){
                FlowRouter.go('/');
            })
        }
    }
})