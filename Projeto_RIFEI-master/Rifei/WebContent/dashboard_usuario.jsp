<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/dashboard_usuario.css">

<div class="container">
	<section class="usuario">
		<h1 class="section-title">Meu perfil</h1>
		
		<div class="section-content">
			<img src="img/usuario.jpeg" alt="{nome do usuario}">
			<p>Rodrigo Melo</p>
			<p>31/02/1985</p>
			<p>123.456.789-00</p>
			<p>rrmelo@gmail.com</p>
			<p>(21) 98765-4321</p>
			<p>Rua ABC, 123 / apto 101 - Barra da Tijuca, Rio de Janeiro - RJ, 20100-20</p>
		</div>
		
		<div class="align-button"><a href="cadastro_usuario.jsp" class="btn-principal">Alterar dados</a></div>
	</section>
	
	<hr/>
	
	<section class="compras">
		<h1 class="section-title">Meus bilhetes</h1>
		
		<div class="section-content">
			<a class="rifa" href="#">
				<img src="img/product.png" alt="{nome do produto}">
				<p>Star Wars VII Kylo Ren</p>
				<p>Expira: 15/06/2018</p>
			</a>
			<a class="rifa expired" href="#">
				<img src="img/product.png" alt="{nome do produto}">
				<p>Star Wars VII Kylo Ren</p>
				<p>Expira: 15/06/2018</p>
			</a>
		</div>
		
		<div class="align-button"><a href="index.jsp" class="btn-principal">Comprar bilhetes</a></div>
	</section>
	
	<hr/>
	
	<section class="vendas">
		<h1 class="section-title">Minhas rifas</h1>
		
		<div class="section-content">
			<a class="rifa" href="#">
				<img src="img/product.png" alt="{nome do produto}">
				<p>Star Wars VII Kylo Ren</p>
				<p>Expira: 15/06/2018</p>
			</a>
		</div>
		
		<div class="align-button"><a href="cadastro_rifa.jsp" class="btn-principal">Criar rifa</a></div>
	</section>
</div>

<%@include file="_footer.jsp"%>