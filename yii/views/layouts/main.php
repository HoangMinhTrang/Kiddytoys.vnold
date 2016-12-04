<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;


AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
	<meta charset="<?= Yii::$app->charset ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?= Html::csrfMetaTags() ?>
	<title><?= Html::encode($this->title) ?></title>
	<?php $this->head() ?>
	<link rel="icon" href="assets/front/img/icon.png" type="image/x-icon" />
    <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Thiên Đường Đồ Chơi Trẻ Em</title>
	<meta name="description" content="Kiddytoys là trang thương mại điện tử chuyên bán các mặt hàng đồ chơi trẻ em, đa mẫu mã, chủng loại." />
	<meta name="keywords" content="" />
	<meta name="Title" content="Thiên Đường Đồ Chơi Trẻ Em" />
	<meta property="og:url" content="http://Kiddytoys.vn/" />
	<meta property="og:title" content="Thiên Đường Đồ Chơi Trẻ Em" />
	<meta property="og:description" content="Kiddytoys là trang thương mại điện tử chuyên bán các mặt hàng đồ chơi trẻ em, đa mẫu mã, chủng loại." />
	<meta itemprop="priceCurrency" content="VNĐ" />
	<meta content="index, follow" name="robots">
<!-- 	<script language="javascript">
	var site_url = 'http://Kiddytoys.vn/';
	</script>
	<script type="text/javascript" src="assets/front/js/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="assets/front/js/fakeLoader.min.js"></script>
	<script type="text/javascript" src="assets/front/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/front/js/jquery.sticky.js"></script>
	<script type="text/javascript" src="assets/front/js/function.js"></script>
	<script type="text/javascript" src="assets/front/js/slick/slick.min.js"></script>
	<script type="text/javascript" src="assets/front/js/app.js"></script> -->
</head>
<body>
<?php $this->beginBody() ?>
<div class="raw">
	<?php
	NavBar::begin([
		'brandLabel' => '<img src="favicon.ico" class="pull-left"/>Kiddytoys.vn',
		'brandUrl' => Yii::$app->homeUrl,
		'options' => [
			'class' => 'navbar-default navbar-fixed-top',
		],

	]);
	echo Nav::widget([
		'options' => ['class' => 'navbar-nav navbar-right'],
		'items' => array(
 			'class' => 'booster.widgets.TbMenu',
                'type' => 'navbar',
                'items' => array(
                    array('label' => 'Home', 'url' => '#', 'active' => true),
                    array('label' => 'Link', 'url' => '#'),
                    array(
                        'label' => 'Dropdown',
                        'url' => '#',
                        'items' => array(
                            array('label' => 'Action', 'url' => '#'),
                            array('label' => 'Another action', 'url' => '#'),
                            array(
                                'label' => 'Something else here',
                                'url' => '#'
                            ),
                            '---',
                            array('label' => 'NAV HEADER'),
                            array('label' => 'Separated link', 'url' => '#'),
                            array(
                                'label' => 'One more separated link',
                                'url' => '#'
                            ),
                        )
                    ),
                ),
            ),
            '<form class="navbar-form navbar-left" action=""><div class="form-group"><input type="text" class="form-control" placeholder="Search"></div></form>',
            array(
                'class' => 'booster.widgets.TbMenu',
                'type' => 'navbar',
                'htmlOptions' => array('class' => 'pull-right'),
                'items' => array(
                    array('label' => 'Link', 'url' => '#'),
                    '---',
                    array(
                        'label' => 'Dropdown',
                        'url' => '#',
                        'items' => array(
                            array('label' => 'Action', 'url' => '#'),
                            array('label' => 'Another action', 'url' => '#'),
                            array(
                                'label' => 'Something else here',
                                'url' => '#'
                            ),
                            '---',
                            array('label' => 'Separated link', 'url' => '#'),
                        )
                    ),
                ),
            ),
        'encodeLabels' => false,
	]);
	echo  '<form class="navbar-form pull-left" action="" method="get">
				<div class="input-group"><input type="text" name="keyword" value="" placeholder="Bạn cần tìm" class="form-control">
				</div>
				<button class="btn btn-default" type="submit">
				        	<i class="glyphicon glyphicon-search"></i>
				</button>	
			</form>';

	NavBar::end();
	?>
	<div class="container">
	        <?= Breadcrumbs::widget([
	            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
	        ]) ?>
	        <?= $content ?>
	</div>
</nav>
	
</div>	
	<!-- END THANH MENU-->
<footer class="footer">
	<div class="container">
		<p>All rights reserved by Kiddytoys.vn</p>

	</div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
