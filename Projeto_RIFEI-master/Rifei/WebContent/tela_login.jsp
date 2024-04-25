<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/tela_login.css">

<div class="container">
		<div class="login" for="login">
		<u>Login</u>
		</div>
		<div id="login" class="centralizado"><br>
			<input class="inputslogin" id="email" type="email" placeholder="E-mail"><br>
			<br>
			<input class="inputslogin"  id="senha"  type="password" placeholder="Senha">
		</div>
		<br>
		<div class="esqueci_senha">
		<u><center>Esqueci minha senha.</center></u>
		</div><br>
		<div class="centralizado" ><a href="dashboard_usuario.jsp" class="botao_logar">Logar</a><br></div>

</div>
<br>
<%@include file="_footer.jsp"%>