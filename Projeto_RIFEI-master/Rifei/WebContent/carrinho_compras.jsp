<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/carrinho_compras.css">

<%	
	Bilhete bilhete = (Bilhete)request.getAttribute("bilhete");
	Rifa rifa = (Rifa)request.getAttribute("rifa");
%>

<div class="container">
	<h1 class="section-title">Meu Carrinho</h1>
	<hr/>
	
	<div class="carrinho">
	
		<a class="rifa" href="/">
			<img src="<%=rifa.getImagem()%>">
			<p><%=rifa.getProduto()%></p>
			<p><%=rifa.getDescricao()%></p>
			<p>Bilhete: <%=bilhete.getNumBilhete()%></p>
		</a>
		
		<form class="dados-compra" action="ConfirmarCompra.do" method="post">
		
			<input class="hidden" name="bilhete" value=<%=bilhete.getIdBilhete()%> hidden/>
			
			<div  class="input-radio">
				<p>Método de pagamento:</p>
				<input type="radio" id="boleto" name="pagamento" value="boleto" checked />
	        	<label for="boleto">Boleto</label>
	        	<input type="radio" id="cartao" name="pagamento" value="cartao" />
	        	<label for="cartao">Cartão de crédito</label>
	        </div>
	        
	        <input class="input-text" id="numero" type="number" placeholder="Número do cartão">
			<input class="input-text" id="validade" type="text" placeholder="Validade">
			<input class="input-text" id="cvv" type="number" placeholder="Código de verificação">
			<input class="input-text" id="nome" type="text" placeholder="Nome do titular">
		
			<button class="btn-principal align-button" type="submit">Confirmar compra</button>
		
		</form>
	
	</div>
	
</div>


<%@include file="_footer.jsp"%>