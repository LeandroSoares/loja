@extends('layouts.app')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<form action="{{route('author.store')}}" method="POST">
				@csrf
				<h3>Autores: novo</h3>
				<div class="form-group">
					<label for="name">Nome</label>
					<input type="text" class="form-control" id="name" name="name">
				</div>
				<div class="form-group">
					<label for="cpf">CPF</label>
					<input type="text" class="form-control" id="cpf" name="cpf">
				</div>
				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" class="form-control" id="email" name="email">
				</div>
				<button class="btn btn-secondary">Salvar</button>
			</form>
		</div>
	</div>
</div>

@endsection