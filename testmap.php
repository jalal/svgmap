<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="de"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="de"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="de"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="de"> <!--<![endif]-->

<head>
    <base href="">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SVG Map Demo - Internal Coordinate Set</title>
    <meta name="description" content="SVGMap">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <link rel="stylesheet" href="css/screen.css">

<!--     <script src="js/jquery.min.js"></script>
    <script src="js/modernizr-2.6.2.min.js"></script>
 -->    <script src="js/snap.svg.js"></script>
</head>
<body>

<h1>SVG Map with Internal Coordinates</h1>

<div id="newmap">
    <svg id="svgmap">
</div>

<div id="results"></div>

<map name="freiburg" id="freiburgmap">
  <area shape="poly" coords="509,188,537,185,555,179,560,205,565,252,556,265,558,285,540,292,509,276,485,253,517,248" href="#ebnet" alt="Ebnet" title="Ebnet">
  <area shape="poly" coords="474,341,531,299,549,316,531,334,538,369,546,413,511,421,484,417,455,378" href="#kappel" alt="Kappel" title="Kappel">
  <area shape="poly" coords="446,310,463,282,488,281,491,268,505,280,525,294,471,335" href="#littenweiler" alt="Littenweiler" title="Littenweiler">
  <area shape="poly" coords="358,323,383,306,437,318,460,342,451,381,475,413,452,413,440,382,404,383" href="#gunterstal" alt="Günterstal" title="Günterstal">
  <area shape="poly" coords="400,256,405,246,443,235,474,222,503,199,508,242,473,246,484,262,482,273,464,274,435,309,383,301,387,257" href="#waobow" alt="Waldsee, Oberau, Oberwiehre" title="Waldsee, Oberau, Oberwiehre">
  <area shape="poly" coords="341,297,353,272,376,277,373,299,357,307" href="#wiehre" alt="Mittel-/Unterwiehre" title="Mittel-/Unterwiehre">
  <area shape="poly" coords="365,249,354,261,376,268,379,255" href="#altstadt" alt="Altstadt" title="Altstadt">
  <area shape="poly" coords="369,232,397,199,432,198,450,177,498,191,475,212,450,217,424,233,394,246,374,247" href="#herdern" alt="Herdern" title="Herdern">
  <area shape="poly" coords="314,273,345,265,337,296" href="#vauban" alt="Vauban" title="Vauban">
  <area shape="poly" coords="404,189,411,161,392,149,421,107,445,128,462,144,491,165,450,161,431,189" href="#zahringen" alt="Zähringen" title="Zähringen">
  <area shape="poly" coords="298,111,376,205,400,186,403,164,382,149,412,113,388,51,353,33,360,101" href="#bruhl" alt="Brühl-Beurbarung" title="Brühl-Beurbarung">
  <area shape="poly" coords="309,8,347,14,353,91,294,104,257,91,269,22" href="#hochdorf" alt="Hochdorf" title="Hochdorf">
  <area shape="poly" coords="217,291,241,318,260,317,279,332,302,327,334,300,313,279,268,267,262,238,223,236,198,217,201,247,183,289" href="#stgeorgen" alt="St.Georgen/Haid" title="St.Georgen/Haid">
  <area shape="poly" coords="205,179,240,149,240,165,253,185,259,193,284,184,266,218,269,231,232,232,203,214,215,199" href="#rieselfeld" alt="Rieselfeld" title="Rieselfeld">
  <area shape="poly" coords="271,237,267,253,284,269,306,272,336,262,297,239" href="#haslach" alt="Haslach" title="Haslach">
  <area shape="poly" coords="311,240,330,214,357,195,371,214,361,246,346,260" href="#stuhlinger" alt="Stühlinger" title="Stühlinger">
  <area shape="poly" coords="236,137,255,128,252,100,285,107,284,151,300,164,286,180,262,185,251,171" href="#lehen" alt="Lehen" title="Lehen">
  <area shape="poly" coords="289,114,315,140,304,162,288,147" href="#landwasser" alt="Landwasser" title="Landwasser">
  <area shape="poly" coords="318,146,308,167,320,179,337,182,337,203,356,191" href="#mooswald" alt="Mooswald" title="Mooswald">
  <area shape="poly" coords="289,189,271,220,277,232,298,234,308,240,322,215" href="#weingarten" alt="Weingarten" title="Weingarten">
  <area shape="poly" coords="292,185,303,168,321,184,335,188,334,202,322,212" href="#betzenhausen" alt="Betzenhausen" title="Betzenhausen">
  <area shape="poly" coords="110,145,76,170,65,103,125,102,155,126,176,152,203,156,200,180,164,156,144,164" href="#waltershofen" alt="Waltershofen" title="Waltershofen">
  <area shape="poly" coords="16,238,19,217,64,184,111,152,139,172,170,167,209,196,189,215,190,240,136,248,111,236" href="#opfingen" alt="Opfingen" title="Opfingen">
  <area shape="poly" coords="15,246,17,261,74,283,93,308,117,282,179,280,195,245,142,255,98,241" href="#tiengen" alt="Tiengen" title="Tiengen">
  <area shape="poly" coords="16,268,2,323,16,339,56,343,92,313,65,283" href="#munzingen" alt="Munzingen" title="Munzingen" class="highlighted">
</map>

<script src="js/svgmap.js"></script>
<script>
    SvgMap({
        svgid:'#svgmap',
        mapurl:'img/map.svg',
        mapid:'#freiburgmap',
        strokeColor: 'transparent',
        hoverFill: 'rgba(255,255,255,0.4)'
    });
</script>
</body>
</html>

