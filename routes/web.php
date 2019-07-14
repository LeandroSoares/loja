<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('dashboard')
	->namespace('dashboard')
	->group(function () {
		Route::get('/', 'DashboardController@index');
	});

Auth::routes();

Route::get('/', 'AngularController@index');
Route::get('/{any}', 'AngularController@index');
