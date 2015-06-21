var playComponent = FlowComponents.define('Player',function(props){
    this.id = props.id || Random.id(10);
    /*this.title = props.title || '';
    this.description = props.description || '';
    this.url = props.url || '';
    this.thumbnail = props.thumbnail || '';*/
    this.height = props.height || '476px';
    this.width = props.width || '588px';

    this.onRendered(function(){
        var playerId = this.get('playerId');
        jwplayer(playerId).setup({
            file: 'http://porn.im.2a73c600.9294792.x.xvideos.com/videos/flv/7/b/f/xvideos.com_7bf1b6c9f3dd8a04b465395aad6c6d0f.flv?e=1434915564&ri=1024&rs=85&h=005e96aaf821723cba3030cfa2d283d4',
            height: this.height,
            image: 'http://img100-792.xvideos.com/videos/thumbslll/7b/f1/b6/7bf1b6c9f3dd8a04b465395aad6c6d0f/7bf1b6c9f3dd8a04b465395aad6c6d0f.13.jpg',
            width: this.width
        });
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

