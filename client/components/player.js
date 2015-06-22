var playComponent = FlowComponents.define('Player',function(props){
    this.id = props.id || Random.id(10);
    /*this.title = props.title || '';
    this.description = props.description || '';
    this.url = props.url || '';
    this.thumbnail = props.thumbnail || '';*/
    this.height = props.height || '360';
    this.width = props.width || '480';

    var jwPlayerLib = 'https://jwpsrv.com/library/VoA6HNw9EeS0bxJtO5t17w.js';
    Meteor.Loader.loadJs(jwPlayerLib, function(){}, 1000);

    this.onRendered(function(){
        var playerId = this.get('playerId');

        var JWPlayer = jwplayer(playerId).setup({
            file: 'http://porn.im.2a721800.10505622.x.xvideos.com/videos/flv/a/5/8/xvideos.com_a58830d084666722ec636ed53967fe93.flv?e=1434996884&ri=1024&rs=85&h=6a83ad5bc46510071b70c0b9bd335464',
            height: this.height,
            width : this.width
        });

        JWPlayer.onReady(function(){
            //JWPlayer.setControls(false);
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

