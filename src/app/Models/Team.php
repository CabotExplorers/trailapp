<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Team extends Authenticatable {

  public $fillable = ['name', 'group_id'];

  public function group() {
    return $this->belongsTo(Group::class)->first();
  }

  public function submissions() {
    return $this->hasMany(Submission::class);
  }

}
