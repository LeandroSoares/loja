<?php

namespace App\Http\Controllers\Api;

use App\Author;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Author::all();
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

    private function getAuthorWithRequestData(Request $request)
    {
        $entity = Author::where('email', $request->input('email'))->first();

        if (empty($entity)) {
            $entity = Author::where('cpf', $request->input('cpf'))->first();
        }
        return $entity;
    }

    private function verifyUniqueFields(Request $request, Author $entity)
    {
        $fields = [];
        if ($request->input('email') == $entity->email) {
            $fields[] = 'email';
        }
        if ($request->input('cpf') == $entity->cpf) {
            $fields[] = 'cpf';
        }
        return  $fields;
    }

    public function store(Request $request)
    {
        $message = 'Created.';
        $error = false;
        $fields = [];

        $entity = $this->getAuthorWithRequestData($request);

        if (empty($entity)) {
            Author::create($request->all());
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
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function show(Author $author)
    {
        return $author;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function edit(Author $author)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Author $author)
    {
        $message = 'Updated.';
        $error = false;
        $fields = [];
        $code = 200;

        $entity = $this->getAuthorWithRequestData($request);

        if (empty($entity) || $entity->id == $author->id) {
            $author->name = $request->input('name');
            $author->cpf = $request->input('cpf');
            $author->email = $request->input('email');
            $author->save();
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
     * @param  \App\Author  $author
     * @return \Illuminate\Http\Response
     */
    public function destroy(Author $author)
    {
        $author->delete();
        return response(['message' => 'Deleted'], 200);
    }
}
