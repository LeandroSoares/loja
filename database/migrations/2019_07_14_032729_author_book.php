<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AuthorBook extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author_book', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigIncrements('author_id');
            $table->bigIncrements('book_id');

            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
            $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('author_book', function (Blueprint $table) {
            $table->dropForeign(['author_id']);
            $table->dropForeign(['book_id']);
        });
        Schema::dropIfExists('author_book');
    }
}
