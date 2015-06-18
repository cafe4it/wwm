var menuItem = FlowComponents.define('MenuItem', function (props) {
    this.name = props.name;
    this.href = props.href || '#';
    this.icon = props.icon || undefined;
    this.text = props.text || '';
    this.class = props.class || '';
});

menuItem.state.props = function () {
    var str = this.class;
    if (this.name === FlowRouter.getRouteName()) {
        str = 'active ' + this.class;
        document.title = (_.isEmpty(this.text)) ? 'Watch With Me' : this.text + ' | Watch With Me';
    }
    return {
        name: this.name,
        href: this.href,
        icon: this.icon,
        text: this.text,
        className: str
    }
}

menuItem.action.activeMenu = function (currentName) {
    var props = this.get('props');

}