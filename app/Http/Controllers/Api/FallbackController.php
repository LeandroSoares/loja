<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FallbackController extends Controller
{
    private $message = 'Page Not Found. If error persists, contact leandrogamedesigner@gmail.com';
    public function fall()
    {
        return response()->json([
            'message' => $this->message
        ], 404);
    }
}
