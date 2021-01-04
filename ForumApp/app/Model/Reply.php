<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
       //Establishing Relationships
    public function user(){
      return  $this->belongsTo(User::class);
    }
     public function likes(){
      return  $this->hasMany(Like::class);
    }
    public function question(){
      return  $this->belongsTo(Question::class);
    }
    protected $guarded=[];
}