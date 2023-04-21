<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        // sleep(3);

        $posts = PostResource::collection(Post::all());

        return inertia('Posts/Index', compact('posts'));
    }

    public function create()
    {
        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        Post::create([
            'title' => $request->title,
            'content' => $request->content
        ]);

        return redirect()->route('posts.index');
    }
}