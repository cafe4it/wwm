var playlist = FlowComponents.define('PlayListControls', function (props) {
    this.onRendered(function () {
        $('.hasPopup').popup();
    })
});

playlist.action.ParseUrl = function(url){
    this.set('xClipUrl',url);
    alert(this.get('xClipUrl'));
}

Template.PlayListControls.events({
    'click #btnSearch': function (e, t) {
        e.preventDefault();
        $('#dlg_SearchClip')
            .modal({
                closable: false,
                onApprove: function () {
                    return true;
                }
            })
            .modal('show');
    }

});


Template.dlg_SearchClip.rendered = function(){
    $(document).ready(function(){
        $('#btnParseUrl').on('click',function(){
            var url = $('#txtSearchUrl').val() || 'http://www.xvideos.com/video12554793/choi_em_gai_trang_xinh_vu_to';
            Meteor.call('xVideos_getVideoByUrl',url,function(err,rs){
                console.log(rs);
            })
        })
    })
}

