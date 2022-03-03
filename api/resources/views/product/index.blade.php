@extends('layouts.main')

@section('content')

<div>
    Product blade
    <div>
    @foreach($products as $product)
<div>
<h3>
title:
{{$product->id}}. {{$product->title}}</h3>

<p>Desc:  {{$product->desc}}</p>
<p>Price {{$product->price}}</p>
<p>category_id:  {{$product->category->title}}</p>
<p>brand_id {{$product->brand->title}}</p>
<br/>
</div>

@endforeach
     

    </div>
</div>

@endsection