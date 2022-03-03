<?php

namespace App\Http\Controllers\Product;


use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $one = Product::find(1);
        $categoties = Category::find(1);
        
        // foreach ($products as $product) {
        //    $postWC = $product->category;
        //     return $postWC;
           
        // }
        // dd($postWC);
        return ProductResource::collection( $products );

        // return view('product.index', compact('products'));
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        Product::create($data);

        return response([]);

    }

    public function delete(Product $product)
    {
        $product->delete();

        return response([]);
    }

    public function update (UpdateRequest $request, Product $product)
    {
            $data = $request->validated();
            $product->firstOrUpdate($data);

            return response([]);
    }

    public function show(Product $product)
    {
        // dd($product);
        return new ProductResource($product);
    }
}
