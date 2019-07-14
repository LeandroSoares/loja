<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class AngularController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		\View::addExtension('html', 'php');
		return \View::make('index');
	}
}
