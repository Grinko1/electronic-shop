<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(['namespace' => 'Product', 'prefix'=>'products'], function (){
//     Route::get('/', 'ProductController@index');
//     Route::post('/', 'ProductController@store');
// });
Route::group(['namespace' => 'Product', 'prefix' => 'products'], function () {
    Route::get('/', 'ProductController@index');
    Route::post('/', 'ProductController@store');
    Route::delete('/{product}', 'ProductController@delete');
    Route::patch('/{product}', 'ProductController@update');
    Route::get('/{product}', 'ProductController@show');
});

Route::group(['namespace' => 'Category', 'prefix' => 'categories'], function () {
    Route::get('/', 'CategoryController@index');
    Route::post('/', 'CategoryController@store');
    Route::delete('/{category}', 'CategoryController@delete');
    Route::patch('/{category}', 'CategoryController@update');
    Route::get('/{category}', 'CategoryController@show');
});

Route::group(['namespace' => 'Brand', 'prefix' => 'brands'], function () {
    Route::get('/', 'BrandController@index');
    Route::post('/', 'BrandController@store');
    Route::delete('/{brand}', 'BrandController@delete');
    Route::patch('/{brand}', 'BrandController@update');
    Route::get('/{brand}', 'BrandController@show');
});

Route::group(['namespace' => 'User', 'prefix' => 'users'], function () {
    Route::post('/', 'UserController@store');
    Route::get('/', 'UserController@index');
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});