<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/cadastro_usuario.css">

<div class="container">
	<h1 class="section-title">Cadastro de Usuário</h1>
	<hr/>
	<form class="cadastro">
		<label for="info">Informações</label>
		<div id="info">
			<label for="imagem">
				<img class="img-icon" src="img/img-icon.png">
			</label>
			<div>
				<input id="imagem" type="file">
				<input id="nome" type="text" placeholder="Nome completo">
				<input id="cpf" type="text" placeholder="CPF">
				<input id="nascimento" type="text" placeholder="Nascimento">
				<input id="telefone" type="tel" placeholder="Telefone">
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
		<div class="align-button"><button class="btn-principal" type="submit">Cadastrar</button></div>
	</form>
</div>

<%@include file="_footer.jsp"%>