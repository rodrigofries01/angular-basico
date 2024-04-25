<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/index.css">

<%
	// Lista de rifas
	List<Rifa> rifas = RifaManager.consultarTodasRifas();
	
%>

<div class="container">

<section class="destaque">
	<h2>Rifei, a felicidade alcancei!</h2>
	<p><b>Quem somos:</b> Fundada em 2017, oferecemos uma solução de comércio eletrônico simples e transparente para que as pessoas possam comprar, vender, anunciar e enviar produtos por meio da internet atingindo valores satisfatórios aos vendedores.</p>
</section>

<section class="swiper-container">
    <div class="swiper-wrapper">

		<% for( Rifa rifa : rifas ) { %>
			<div class="swiper-slide">
	        	<a href="rifa.jsp?idRifa=<%=rifa.getIdRifa()%>" class="swiper-slide">
		        	<img class="imagem-produto" src="<%=rifa.getImagem()%>" />
		        	<h3><%=rifa.getProduto()%> - <%=rifa.getDescricao()%></h3>
	        	</a>
			</div>
	    <% } %>

    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</section>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.esm.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.esm.bundle.js"></script>

<script>
	document.addEventListener("DOMContentLoaded", function(event) {
		new Swiper ('.swiper-container', {
			slidePerView: 1,
		    loop: true,
		    autoplay: true,
		    spaceBetween: 100,
		
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		 });
  	});
 </script>

<%@include file="_footer.jsp"%>