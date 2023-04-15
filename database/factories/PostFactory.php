<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $CategoryIDs = Category::pluck('id');

        return [
            'title' => fake()->text(20),
            'content' => fake()->paragraph(5, true),
            'category_id' => $CategoryIDs->random()
        ];
    }
}