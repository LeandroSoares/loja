<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class AuthenticationTest extends TestCase
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

		$response->assertJsonStructure([
			'access_token',
			'token_type',
			'expires_in'
		]);
	}

	 /**
     * @test
	 * @runInSeparateProcess
     */
	public function it_will_not_log_an_invalid_user_in()
	{
		$response = $this->post('api/login', [
			'email'    => 'test@email.com',
			'password' => 'notlegitpassword'
		]);

		$response->assertJsonStructure([
			'error',
		]);
	}
}
