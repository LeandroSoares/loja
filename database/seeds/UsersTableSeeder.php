<?php

use Illuminate\Database\Seeder;
use \App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::firstOrNew([
            'name' => 'Leandro Soares',
            'email' =>  'leandrogamedesigner@gmail.com',
            'password' => bcrypt('qwe123'),
        ]);
        $user->save();
    }
}
