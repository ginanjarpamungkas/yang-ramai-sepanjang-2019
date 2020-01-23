<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Yang Ramai Sepanjang 2019</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="language" content="id" />
<meta http-equiv="pragma" content="no cache">
<meta name="author" content="Tempo.co">
<meta name="keywords" content="Tempo, 2019, Kaleidokop">
<meta name="copyright" content="">
<meta name="coverage" content="WorldWide">
<meta name="creation date" content="2020-01-01">
<meta name="rating" content="General">
<meta name="robots" content="follow">
<meta property="og:site_name" content="Yang Ramai Sepanjang 2019">
<meta prperty="og:title" content="Yang Ramai Sepanjang 2019"/>
<meta property="og:description" content="Berikut rangkaian peristiwa selama tahun 2019, menurut artikel dengan pembaca terbanyak di Tempo.co" />
<meta property="og:image" itemprop="image" content="images/thumbnail.png">
<meta property="og:type" content="website" />
<meta property="og:updated_time" content="1440432930" />
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Yang Ramai Sepanjang 2019" />
<meta name="twitter:description" content="Berikut rangkaian peristiwa selama tahun 2019, menurut artikel dengan pembaca terbanyak di Tempo.co" />
<meta name="twitter:image:src" content="images/thumbnail.png">
<meta name="twitter:image:width" content="650" />
<meta name="twitter:image:height" content="433" />
<link rel="stylesheet" href="css/base.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/mobile.css" type="text/css" media="screen" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" >
<!-- <link rel="stylesheet" href="https://interaktif.tempo.co/proyek/pasal-karet-uu-ite-sejoli-pembungkam-kritik/css/font-awesome.css" type="text/css" media="screen" /> -->
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i" rel="stylesheet">
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-23817453-1', 'auto', {'allowAnchor': true});
		ga('set', {
			page: '/'
		});

		ga('send', 'pageview', {
			hitType: 'pageview',
			page: location.pathname + location.search + location.hash
		});
</script>
</head>
<body>
<!-- <link itemprop="thumbnailUrl" href="images/thumbnail.png"> 
<span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject"> 
  <link itemprop="https://interaktif.tempo.co/public/proyek/yang-ramai-sepanjang-tahun-2019/" href="images/thumbnail.png"> 
</span> -->
<main class="cd-main-content">
	<div class="bg-object">
		<div class="object">
			<div class="object-img hide_mobile"><img src="images/monitor.png"></div>
			<!-- <div class="object-img2 hide_desktop"><img src="images/hp.png"></div> -->
			<div class="out-frame">
				<div class="videoframe">
					<div class="loader">
						<div class="image">
							<i class="fa fa-newspaper-o"></i>
						</div>
						<span></span>
					</div>
					<iframe id="start" src="2019/index.php" frameborder="0"></iframe>
				</div>
			</div>
        <a href="tempo.co" class="tempo"><img src="https://interaktif.tempo.co/photos/2/tempo_logo.png" alt="tempo.co" style="width:75px"></a>
		</div>
	</div>		
</main>
<script type="text/javascript" src="https://interaktif.tempo.co/proyek/diperdagangkan-sampai-punah/assets/js/lib/jquery.min.js"></script>
<script>
$(document).ready(function() {
  var counter = 0;
  setInterval(function() {
    if(counter == 9) { 
      counter = 0; 
    }
    changeImage(counter);
    counter++;
  }, 1000);
  loading();
});

function changeImage(counter) {
  var images = [
    '<i class="fa fa-briefcase"></i>',
    '<i class="fa fa-laptop"></i>',
    '<i class="fa fa-globe"></i>',
    '<i class="fa fa-university"></i>',
    '<i class="fa fa-camera-retro"></i>',
    '<i class="fa fa-signal"></i>',
    '<i class="fa fa-child"></i>',
    '<i class="fa fa-pie-chart"></i>',
    '<i class="fa fa-newspaper-o"></i>'
  ];
  $(".loader .image").html(""+ images[counter] +"");
}

function loading(){
  var num = 0;
  for(i=0; i<=100; i++) {
    setTimeout(function() { 
      $('.loader span').html(num+'%');
      if(num >= 100) {
        num = 100
        $('.loader').fadeOut('slow')
      }
      num++;
    },i*30);
  };
}
</script>
</body>
</html>