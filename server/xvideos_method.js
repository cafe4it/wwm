Meteor.methods({
    xVideos_getCategories : function(){
        var rs = Async.runSync(function(done){
            var x = Xray(),
                home = 'http://www.xvideos.com';
            x(home,{
                items : x('div#categories ul li',[{
                    id : 'a@href',
                    text : 'a@text'
                }])
            })(function(err,obj){
                done(err, obj)
            })
        });
        return rs.result;
    },
    xVideos_getVideosByUrl : function(url){
        var url = url || 'http://www.xvideos.com';
        if(url){
            var rs = Async.runSync(function(done){
                var x = Xray();
                x(url,'#content',{
                    items : x('div.thumbInside',[{
                        id : 'div.thumb a@href',
                        thumb : 'div.thumb a img@src',
                        title : 'p a@title',
                        metadata : {
                            duration : 'p.metadata span.bg span.duration@text',
                            quality : 'p.metadata span.bg@text'
                        }
                    }]),
                    next : 'div.pagination ul li a.nP'
                })(function(err,obj){
                    done(err, obj);
                })
            });
            return rs.result;
        }
    },
    xVideos_getRelatedVideosWithMore : function(url){
        if(url){
            var rs = Async.runSync(function(done){
                var x = Xray();
                x(url,'#relatedVideosWithMore',{
                    items : x('div.thumbInside',[{
                        src : '.thumb a img@src',
                        id : 'p a@href',
                        title : 'p a@text'
                    }])
                })(function(err,obj){
                    console.log(err,obj)
                    done(err,obj);
                })
            })
            return rs.result;
        }
    },
    xVideos_getVideoByUrl : function(url){
        if(url){
            var rs = Async.runSync(function(done){
                var x = Xray();
                x(url,'#player',{
                    item : '#flash-player-embed@flashvars'
                })(function(err,obj){
                    if(err) throw new Meteor.Error(err);
                    var item = {
                        flv : getParameterByName('flv_url',obj.item),
                        thumb : getParameterByName('url_bigthumb',obj.item)
                    }
                    done(null,item)
                })
            });
            return rs.result;
        }
    },
    xVideos_getTags : function(){
        var rs = Async.runSync(function(done){
            var x = Xray(),
                tag = 'http://www.xvideos.com/tags/';
            x(tag,'div#main',{
                items : x('ul#tags li',[{
                    id : 'a@href',
                    text : 'a@text',
                    quantity : '@text'
                }])
            })(function(err,obj){
                done(err,obj);
            })
        });
        return rs.result;
    }
})
function getParameterByName(name,flashVars) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(flashVars);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
