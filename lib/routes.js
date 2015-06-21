if(Meteor.isClient){
    FlowLayout.setRoot('body')
}


FlowRouter.route('/',{
    name: 'home', action: renderView
});

FlowRouter.route('/my-channel',{
    middlewares : [requiredLogin],name: 'myChannel', action: renderView
});

FlowRouter.route('/create-channel',{
    name: 'createChannel', action: renderView
});

FlowRouter.route('/authenticate',{
    name: 'Authenticate', action: renderView
});

function renderView() {
    renderMainLayoutWith(this.name);
}

function renderMainLayoutWith(view) {
    FlowLayout.render('mainLayout', {
        top : "header",
        main: view,
        bottom: "footer"
    });
}

function requiredLogin(path, next) {
    var redirectPath = (!Meteor.userId())? "/authenticate" : null;
    next(redirectPath);
}