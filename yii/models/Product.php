<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property integer $ID
 * @property string $ProductName
 * @property double $Price
 * @property string $Category
 * @property string $ImageLink
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ProductName', 'Price', 'Category', 'ImageLink'], 'required'],
            [['Price'], 'number'],
            [['ProductName', 'ImageLink'], 'string', 'max' => 200],
            [['Category'], 'string', 'max' => 50],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'ProductName' => 'Product Name',
            'Price' => 'Price',
            'Category' => 'Category',
            'ImageLink' => 'Image Link',
        ];
    }
}
