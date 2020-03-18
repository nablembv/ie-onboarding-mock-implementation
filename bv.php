<?php
require('bvseosdk.php');
$bv = new BV(array(
    'bv_root_folder' => 'Main_Site-en_GB',
    'subject_id' => '12402876',
    //'subject_id' => '5345a1a9-0d19-4fca-aaae-bf7f6c72efdd',
    //'cloud_key' => 'nescafe-a852a80f5c075e1e188e5922c33bb8a8',
    'cloud_key' => 'starbucksathome-uk-8e1ceeb07d7022b7b1789dfe9236959a',
    //'page_url' => 'https://www.nescafe.com/gb/our-coffees/original/nescafe-original',
    //'base_url' => 'https://www.nescafe.com/gb/our-coffees/original/nescafe-original',
    'page_url' => 'https://www.stage3-starbucksathome.factory.nescafe.com/gb/our-coffees/starbucks-veranda-blend',
    'base_url' => 'https://stage3-starbucksathome.factory.nescafe.com/gb/our-coffees/starbucks-veranda-blend',
        ));
?><!DOCTYPE html>
<html>
    <head>
        <title>BV SDK PHP Example - Questions: GetContent</title>
    </head>
    <body>
        <div itemscope itemtype="http://schema.org/Product">
        <meta itemprop="name" content="ProductName" />
        <div data-bv-show="rating_summary">
            <?php echo $bv->reviews->getAggregateRating(); ?>
        </div>
        <div data-bv-show="reviews">
            <?php echo $bv->reviews->getReviews(); ?>
        </div>
    </body>
</html>
