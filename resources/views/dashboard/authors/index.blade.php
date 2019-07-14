@extends('layouts.app')

@section('content')
<div class="container">
	<h3>
		Autores
		<a href="{{url('dashboard/author/create')}}" class="float-right btn btn-secondary">Novo autor</a>
	</h3>
	<hr>
	<ul>
		@foreach($authors as $author)
		<li>{{$author->name}} - {{$author->cpf}} - {{$author->email}}</li>
		@endforeach
	</ul>

</div>

@endsection