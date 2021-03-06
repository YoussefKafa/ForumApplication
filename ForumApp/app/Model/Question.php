<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    //Establishing Relationships
    public function user(){
      return  $this->belongsTo(User::class);
    }
     public function replies(){
      return  $this->hasMany(Reply::class);
    }
    public function category(){
      return  $this->belongsTo(Category::class);
    }
    public function getRouteKeyName()
    {
        return 'id';
    }
    protected $fillable=['subject','body','category_id','user_id'];
}