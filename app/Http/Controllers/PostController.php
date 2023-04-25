<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\PostResource;
use App\Http\Requests\StorePostRequest;

class PostController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Post::class);

        $posts = PostResource::collection(Post::all());

        return inertia('Posts/Index', compact('posts'));
    }

    public function create()
    {
        $this->authorize('create', Post::class);

        return inertia('Posts/Create');
    }

    public function store(StorePostRequest $request)
    {
        $this->authorize('create', Post::class);

        try{

            Post::create($request->validated());

        return redirect()->route('posts.index')
            ->with('message', 'Post created successfully');

        }catch(\Exception $exception){

            Log::error($exception->getMessage());
            return redirect()->route('posts.index')
            ->with('message', 'Post not created, try again');
        }

    }

    public function edit(Post $post)
    {
        $this->authorize('create', Post::class);

        return inertia('Posts/Edit', compact('post'));
    }

    public function update(Post $post, StorePostRequest $request)
    {
        $this->authorize('create', Post::class);

        $post->update($request->validated());

        return redirect()->route('posts.index')
            ->with('message', 'Post updated successfully');
    }


    public function destroy(Post $post)
    {
        $this->authorize('create', Post::class);

        $post->delete();

        return redirect()->route('posts.index')
            ->with('message', 'Post deleted successfully');
    }
}
