<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/rifa.css">

<% int idRifa = Integer.parseInt(request.getParameter("idRifa")); 

	Rifa rifa = RifaManager.consultarRifaPorId(idRifa);
	
	Usuario usuario = UsuarioManager.consultarUsuarioPorId(rifa.getUsuario().getIdUsuario());
	
	List<Bilhete> bilhetes = BilheteManager.consultarBilhetesDisponiveis(idRifa);
%>

<div class="container">
	<h1 class="section-title"><%=rifa.getProduto()%></h1>
	<hr/>
	<div class="produto">
		<img class="imagem-produto" alt="produto rifado" src="<%=rifa.getImagem()%>">
		<div class="info-produto">
			<div class="detalhes">
				<p>Anunciante: <a href="#"><%=usuario.getNomeCompleto()%></a></p>
			</div>
			<hr/>
			<p class="descricao"><%=rifa.getDescricao()%></p>
			<hr/>
			<p>Preço do bilhete: R$<%=rifa.getValorMinimo() / rifa.getQtdBilhete()%></p>
			<hr/>
			<p>Bilhetes vendidos</p>
			<div id="progressbar">
	  			<div>60%</div>
			</div>
			<hr/>
			<p>Esta rifa se encerra em: <%=Utils.dateParaStr(rifa.getDtSorteio())%></p>
			<hr/>
			<p class="bilhetes-disponiveis">Bilhetes disponíveis:</p>
			
			<form action="CarrinhoCompras.do" method="get">
				<select id='bilhete' name='bilhete'>
					<% for( Bilhete bilhete : bilhetes ) { %>
						<option value="<%=bilhete.getIdBilhete()%>"><%=bilhete.getNumBilhete()%></option>
			    	<% } %>
				</select>
				<hr/>
				<button type="submit" class="btn-principal">Comprar bilhete</button>
			</form>
			
		</div>
	</div>
</div>

<%@include file="_footer.jsp"%>