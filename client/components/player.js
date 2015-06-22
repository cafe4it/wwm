var playComponent = FlowComponents.define('Player',function(props){
    this.id = props.id || Random.id(10);
    /*this.title = props.title || '';
    this.description = props.description || '';
    this.url = props.url || '';
    this.thumbnail = props.thumbnail || '';*/
    this.height = props.height || '476px';
    this.width = props.width || '588px';

    var jwPlayerLib = 'https://jwpsrv.com/library/VoA6HNw9EeS0bxJtO5t17w.js';
    Meteor.Loader.loadJs(jwPlayerLib, function(){}, 1000);

    this.onRendered(function(){
        var playerId = this.get('playerId');

        var JWPlayer = jwplayer(playerId).setup({
            file: 'http://content.jwplatform.com/videos/HkauGhRi-640.mp4',
            height: this.height,
            width: this.width
        });

        JWPlayer.onReady(function(){
            JWPlayer.setControls(false);
        })
    })

});

playComponent.state.playerId = function(){
    var idTemplate = _.template('player_<%=id%>');
    return idTemplate({id : this.id});
}

playComponent.state.props = function(){
    return {
        width : this.witdh,
        height : this.height
    }
}

