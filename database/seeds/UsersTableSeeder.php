<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Leandro Soares',
            'email' =>  'leandrogamedesigner@gmail.com',
            'password' => bcrypt('qwe123'),
        ]);
    }
}
