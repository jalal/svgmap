// svgmap-ext.js 0.1.0
//
// Copyright (c) 2014 jalal @ gnomedia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
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
