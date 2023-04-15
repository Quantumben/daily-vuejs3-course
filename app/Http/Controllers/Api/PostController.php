<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')
        ->when(request('category'), function ($query) {
            $query->where('category_id', request('category'));
        })
        ->paginate(10);
        return PostResource::collection($posts);
    }
}