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
var SvgMap = function (opts) {
/*global Snap:false, console:false */
    'use strict';
    console.log("SvgMap initializing");

    var defaults = {
        svgid: '',
        mapurl: '',
        mapid: '',
        coordsurl: '',
        hoverFill: '#fff',
        strokeColor: '#000',
        resultid: 'results'
    };

    var svgid = opts.svgid || defaults.svgid,
        mapurl = opts.mapurl || defaults.mapurl,
        mapid  = opts.mapid || defaults.mapid,
        coordsurl = opts.coordsurl || defaults.coordsurl,
        strokeColor = opts.strokeColor || defaults.strokeColor,
        hoverFill   = opts.hoverFill || defaults.hoverFill,
        resultid = opts.resultid || defaults.resultid;
    var i, w, h, areas, pre;

    var s = new Snap(svgid);
    var group = s.group();
    Snap.load(mapurl, function (f) {
        i = f.select('image');
        h = i.attr('height');
        w = i.attr('width');
        group.append(f);
        s.attr({
            viewBox: [0, 0, w, h]
        });
        var newmap = document.getElementById('newmap');
        if (newmap) {
            newmap.style.height = h + 'px';
            newmap.style.maxWidth = w + 'px';
        }
    });

    var shadow = new Snap(svgid);
    Snap.load(coordsurl, function (f) {
        areas = f.selectAll("path");
        console.log("Found areas: " + areas.length);
        for (var j = areas.length - 1; j >= 0; j--) {
            var el = areas[j];
            var title = el.attr('id');
            el.attr({ id: title, fill: 'none', stroke: strokeColor, link: title, title: title});
            el.hover(function () {
                this.attr('fill', hoverFill);
            }, function () {
                this.attr('fill', 'transparent');
            });
            el.click(function () {
                // console.log('click: ' + this.attr('id'));
                hideAll();
                show('Clicked: ' + this.attr('id'));
            });
            el.touchstart(function () {
                console.log('touch: ' + this.attr('id'));
                this.attr('fill', hoverFill);
                hideAll();
                show('Touched: ' + this.attr('id'));
            });
            el.touchend(function () {
                this.attr('fill', 'transparent');
            });
            shadow.append(el);
        }
    });

    function hideAll() {
        var el = document.getElementById(resultid);
        if (el) {el.style.display = "none"; }
        // $(resultid).hide();
    }

    function show(txt) {
        var el = document.getElementById(resultid);
        if (el) {
            el.style.display = "";
            if (el.firstChild) {
                el.removeChild(el.firstChild);
            }
            var t = document.createTextNode(txt);
            el.appendChild(t);
        }
    }
};
