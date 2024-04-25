<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/cadastro_usuario.css">

<div class="container">
	<h1 class="section-title">Nova Rifa</h1>
	<hr/>
	<form class="cadastro">
		<label for="info">Informações</label>
		<div id="info">
			<label for="imagem">
				<img class="img-icon" src="img/img-icon.png">
			</label>
			<div>
				<input id="imagem" type="file">
				<input id="titulo" type="text" placeholder="Título da Rifa/Produto">
				<textarea id="descricao" rows="8" cols="50" placeholder="Descrição"></textarea>
			</div>
		</div>
		<label for="endereco">Endereço</label>
		<div id="endereco">
			<input id="cep" type="number" placeholder="CEP">
			<input id="logradouro" type="text" placeholder="Logradouro">
			<input id="numero" type="text" placeholder="Número">
			<input id="complemento" type="text" placeholder="Complemento">
			<input id="bairro" type="text" placeholder="Bairro">
			<input id="cidade" type="text" placeholder="Cidade">
			<input id="estado" type="text" placeholder="Estado">
		</div>
		<label for="login">Login</label>
		<div id="login">
			<input id="email" type="email" placeholder="E-mail">
			<input id="senha" type="password" placeholder="Senha">
		</div>
		<div class="align-button"><button type="submit">Cadastrar</button></div>
	</form>
</div>

<%@include file="_footer.jsp"%>