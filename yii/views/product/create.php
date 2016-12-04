<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Product */

$this->title = 'Create Product';
$this->params['breadcrumbs'][] = ['label' => 'Products', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="product-create">

    <h1 style="color:red" ><?= Html::encode($this->title) ?></h1>
    <h2>Class IS207</h2>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
