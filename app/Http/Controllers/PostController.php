<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return inertia('Posts/Index', compact('posts'));
    }
}