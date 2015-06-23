var chat = FlowComponents.define('ChatBox', function(props){
    this.id = 'chatBox_' + Random.id(5);
    this.set('chatBoxId',this.id);
});

