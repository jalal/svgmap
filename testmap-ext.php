<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="de"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="de"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="de"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="de"> <!--<![endif]-->

<head>
    <base href="">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SVG Map Demo - External Coordinate File</title>
    <meta name="description" content="SVGMap">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="css/screen.css">

    <script src="js/jquery.min.js"></script>
    <script src="js/modernizr-2.6.2.min.js"></script>
    <script src="js/snap.svg.js"></script>
</head>
<body>

<h1>SVG Map with External Coordinate File</h1>

<div id="newmap">
    <svg id="svgmap">
</div>

<div id="results"></div>

<script src="js/svgmap-ext.js"></script>
<script>
    $(document).svgmap({
      svgid:'#svgmap',
      mapurl:'img/map.svg',
      coordsurl:'img/map-coords.svg',
      strokeColor: 'transparent',
      hoverFill: 'rgba(255,255,255,0.4)'
    });
</script>
</body>
</html>

