<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $response = User::all();
        if ($request->has('q')) {
            if ($request->input('q') != "") {
                $querybuilder = User::where('name', 'like', '%' . $request->input('q') . '%')
                    ->orWhere('email', 'like', '%' . $request->input('q') . '%');
                $response = $querybuilder->get();
            }
        }
        return  $response;
    }
    public function me()
    {
        return auth()->user();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    private function getEntityWithRequestData(Request $request)
    {
        $entity = User::where('email', $request->input('email'))->first();
        return $entity;
    }

    private function verifyUniqueFields(Request $request, User $entity)
    {
        $fields = [];
        if ($request->input('email') == $entity->email) {
            $fields[] = 'email';
        }
        return  $fields;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message = 'Created.';
        $error = false;
        $fields = [];

        $entity = $this->getEntityWithRequestData($request);

        if (empty($entity)) {
            $user = new User();
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->setPasswordAttribute($request->input('password'));
            $user->save();
            return response(compact('message', 'error', 'fields'), 201);
        } else {
            $message = 'User already exists.';
            $fields = $this->verifyUniqueFields($request, $entity);
            $error = true;
            return response(compact('message', 'error', 'fields'), 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $message = 'Updated.';
        $error = false;
        $fields = [];
        $code = 200;

        $entity = $this->getEntityWithRequestData($request);

        if (empty($entity) || $entity->id == $user->id) {
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            if ($request->has('new_password')) {
                if (bcrypt($request->input('password')) == $user->password) {
                    $user->setPasswordAttribute($request->input('new_password'));
                } else {
                    $message = 'Password incorrect.';
                    $error = true;
                    $fields[] = 'password';
                    $code = 401;
                }
            }
            if (!$error) {
                $user->save();
            }
        } else {
            $message = 'User new values conflict.';
            $fields = $this->verifyUniqueFields($request, $entity);
            $error = true;
        }
        return response(compact('message', 'error', 'fields'), $code);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response(['message' => 'Deleted'], 200);
    }
}
