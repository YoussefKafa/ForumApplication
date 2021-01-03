<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Question;
use App\Model\Reply;
use App\User;
use Faker\Generator as Faker;

$factory->define(Reply::class, function (Faker $faker) {
    $body=$faker->text;
    return [
        'body'=> $body,
        'question_id'=> function(){
            return Question::all()->random();
        },
        'user_id'=> function(){
            return User::all()->random();
        }
    ];
});