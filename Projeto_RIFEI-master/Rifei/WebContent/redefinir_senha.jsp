<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/redefinir_senha.css">

<div class="container">
	<h1 class="section-title">Redefinir Senha</h1>
	<hr/>
	<form class="cadastro">
	
	 <label for="info">Digite seu CPF e lhe enviaremos um link para você redefinir sua senha.</label>

		<div>
			<input id="cpf" type="text" name="cpf" placeholder="Digite aqui seu CPF">
		</div>
		
		<div class="align-button">
		     <button type="submit">Enviar</button>
		</div>
		
	
	</form>
</div>

<%@include file="_footer.jsp"%>