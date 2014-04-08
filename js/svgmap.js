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
        var i, w, h, areas, pre;

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

        var shadow = new Snap(svgid);
        areas = $('area', mapid);
        $.each(areas, function(idx, area) {
            console.log("Coord: " + area.coords);
            var coords = area.coords.split(',');
            var path = 'M ';
            if (coords.length) {
                for (var i = 0; i < coords.length; i+=2) {
                    if (!i) {pre='';} else{pre=' L ';}
                    path += pre + coords[i] + ',' + coords[i+1];
                }
            }
            var p = new Snap();
            var el = p.path(path);
            el.attr({ id: area.title, fill: 'none', stroke: strokeColor, link: area.href, d: path});
            el.hover(function(){
                this.attr('fill', hoverFill);
            }, function(){
                this.attr('fill', 'transparent');
            });
            el.click(function(){
                console.log('click: ' + this.attr('id'));
                hideAll();
                show('Clicked: ' + this.attr('id'));
            });
            shadow.append(el);
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
