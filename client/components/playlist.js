var playlist = FlowComponents.define('PlayListControls',function(props){
    this.onRendered(function(){
        $('.hasPopup').popup();
    })
});
