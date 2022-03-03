<?php

namespace App\Http\Controllers\Brand;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use App\Http\Requests\Brand\StoreRequest;
use App\Http\Requests\Brand\UpdateRequest;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::all();
        return BrandResource::collection($brands);
    }
    public function store(StoreRequest $request)
    {
            $data = $request->validated();

            Brand::firstOrCreate($data);

            return response([]);

    }
    public function delete(Brand $brand)
    {
        $brand->delete();

        return response([]);

    }

    public function update( UpdateRequest $request,Brand $brand)
    {
            $data = $request->validated();
            $brand->firstOrUpdate($data);

            return response([]);
    }
    public function show( Brand $brand)
    {
           

            return response([]);
    }
}
