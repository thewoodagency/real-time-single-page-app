<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login', 'signup']]);
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply)
    {
        $reply->like()->create([
            //'user_id' => auth()->id
            'user_id' => '4',
        ]);

        return response('Like Added', Response::HTTP_CREATED);
    }

    public function unLikeIt(Reply $reply)
    {
        $like = $reply->like()->where('user_id', '4')->first();
        $like->delete();
        //return response($like);

        return response('Deleted', Response::HTTP_NO_CONTENT);

    }
}
