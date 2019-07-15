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

Route::middleware('api')->group(function () {
    Route::resource('/author',  'Api\AuthorController');
    Route::get('/book/{query}',  'Api\BookController@search');
    Route::resource('/book',  'Api\BookController');
});
Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact leandrogamedesigner@gmail.com'
    ], 404);
});
