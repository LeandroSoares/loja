<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ManageAuthorTest extends TestCase
{
	use DatabaseMigrations;

	public function setUp(): void
	{
		parent::setUp();

		$user = new User([
			'name'     => 'MOCK USER',
			'email'    => 'test@email.com',
			'password' => '123456'
		]);

		$user->save();
	}
	/**
	 * @test
	 * @runInSeparateProcess
	 */
	public function it_will_log_a_user_in()
	{
		$response = $this->post('api/login', [
			'email'    => 'test@email.com',
			'password' => '123456'
		]);

		$response2 = $this->post('api/author', [
			'name'    => 'Teste',
			'cpf' => 'teste',
			'email' => 'teste@teste'
		]);
		$response2->assertStatus(201);
	}

	/**
	 * @test
	 * @runInSeparateProcess
	 */
	
}
