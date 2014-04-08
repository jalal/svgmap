(function($) {
/*global jQuery:false, Snap:false, console:false */
    'use strict';

    $.fn.svgmap = function(opts) {
        opts = $.extend({}, $.fn.svgmap.defaults, opts);
        var svgid = opts.svgid,
            mapurl = opts.mapurl,
            mapid  = opts.mapid,
            coordsurl = opts.coordsurl,
            strokeColor = opts.strokeColor,
            hoverFill   = opts.hoverFill,
            resultid = opts.resultid;
        var i, w, h, areas;

        var s = new Snap(svgid);
        var group = s.group();
        Snap.load(mapurl, function(f) {
            i = f.select('image');
            h = i.attr('height');
            w = i.attr('width');
            group.append(f);
            s.attr({
                viewBox: [0,0,w,h]
            });
            $('#newmap').css('max-width',w+'px').height(h); // this sets a maximum size
        });

        var shadow = new Snap('#svgmap');
        Snap.load(coordsurl, function(f) {
            areas = f.selectAll("path");
            console.log("Found areas: " + areas.length);
            $.each(areas, function(idx, val) {
                var id = val.attr('id');
                this.attr('stroke', strokeColor);
                val.hover(function(){
                    this.attr('fill', 'rgb(255,255,255,0.3)');
                }, function(){
                    this.attr('fill', 'transparent');
                });
                val.click(function(){
                    console.log('click: ' + id);
                    hideAll();
                    show('Clicked: ' + id);
                });
                console.log('val: ' + id);
                shadow.append(val);
            });
        });

        function hideAll() {
            $(resultid).hide();
        }

        function show(txt) {
            $(resultid).show();
            $(resultid).text(txt);
        }
    };

    $.fn.svgmap.defaults = {
        svgid: '',
        mapurl: '',
        mapid: '',
        coordsurl: '',
        hoverFill: '#fff',
        strokeColor: '#000',
        resultid: '#results'
    };
})(jQuery);
