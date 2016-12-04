<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Search extends Model
{
    public $keyword;

	  public function search()
	{

	    $criteria=new CDbCriteria;

	    $criteria->compare('keyword',$this->ProductName,true);

	    return new CActiveDataProvider($this, array(
	        'criteria'=>$criteria,
	    ));
	}
}