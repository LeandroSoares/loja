<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api', ['except' => ['login', 'book']])->group(function () {
    Route::post('/logout', 'Api\AuthController@logout');

    Route::put('/book',  'Api\BookController@update');
    Route::post('/book',  'Api\BookController@store');
    Route::delete('/book',  'Api\BookController@destroy');

    Route::put('/author',  'Api\AuthorController@update');
    Route::post('/author',  'Api\AuthorController@store');
    Route::delete('/author',  'Api\AuthorController@destroy');
});
Route::middleware('api')->group(function () {
    Route::post('/login', 'Api\AuthController@login');
    
    Route::get('/book',  'Api\BookController@index');
    Route::get('/book/{book}',  'Api\BookController@show');

    Route::get('/author',  'Api\AuthorController@index');
    Route::get('/author/{author}',  'Api\AuthorController@show');
    
});

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact leandrogamedesigner@gmail.com'
    ], 404);
});
