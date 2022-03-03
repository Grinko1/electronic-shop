<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();



        return CategoryResource::collection($categories);
    }
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        // dd($data);

        Category::firstOrCreate($data);

        return response([]);
    }
    public function delete(Category $category)
    {
        $category->delete();

        return response([]);
    }

    public function update(UpdateRequest $request, Category $category)
    {
        $data = $request->validated();
         $category->firstOrUpdate($data);

        return response([]);
    }

    public function show( Category $category)
    {
        return response ([]);
    }
}
