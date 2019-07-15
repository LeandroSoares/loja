<?php

namespace App\Http\Controllers\Api;

use App\Book;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Book::all();
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
        $entity = Book::where('title', $request->input('title'))->first();
        return $entity;
    }

    private function verifyUniqueFields(Request $request, Book $entity)
    {
        $fields = [];
        if ($request->input('title') == $entity->title) {
            $fields[] = 'title';
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
            $book = Book::create($request->all());
            foreach ($request->input('authors') as $author) {
                $book->authors()->attach([$author['id']]);
            }
            $book->save();
            return response(compact('message', 'error', 'fields'), 201);
        } else {
            $message = 'Book already exists.';
            $fields = $this->verifyUniqueFields($request, $entity);
            $error = true;
            return response(compact('message', 'error', 'fields'), 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return $book;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $message = 'Updated.';
        $error = false;
        $fields = [];
        $code = 200;

        $entity = $this->getEntityWithRequestData($request);

        if (empty($entity) || $entity->id == $book->id) {
            $book->fill($request->all());
            $authors_ids = [];
            foreach ($request->input('authors') as $author) {
                $authors_ids[] = $author['id'];
            }
            $book->authors()->sync($authors_ids);
            $book->save();
        } else {
            $message = 'Book new values conflict.';
            $fields = $this->verifyUniqueFields($request, $entity);
            $error = true;
        }
        return response(compact('message', 'error', 'fields'), $code);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }
}
