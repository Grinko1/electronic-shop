<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\BrandResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'title' =>$this->title,
            'image' =>$this->image,
            'desc' =>$this->desc,
            'price' =>$this->price,
           
            'category' => new CategoryResource($this->category),
            'brand' =>new BrandResource($this->brand),
        ];
    }
}
