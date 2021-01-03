<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Category;
use App\Model\Question;
use App\User;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    $subject = $faker->sentence;
    return [
     'subject' => $subject,
     'body' => $faker->text,
     'category_id' => function(){
         return Category::all()->random();
     },
     'user_id' => function(){
         return User::all()->random();
     }
    ];
});