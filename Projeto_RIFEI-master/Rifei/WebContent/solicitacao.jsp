<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/solicitacao.css">

<div class="container">
	<h1 class="section-title">Solicita��o</h1>
	<hr/>
	<form class="cadastro">

		<div id="login">
		 <select id="texto" >
		  <option name="">Escolha tipo de solicita��o</option>
		  <option name="sugestao">Sugest�o</option>
          <option name="reclamacao">Reclama��o</option>
          <option name="duvida">D�vida</option>
          <option name="critica">Cr�tica</option>
         </select>
			<input id="texto" width="100" type="text" placeholder="Escreva um t�tulo">
			<textarea rows="8" cols="50" placeholder="Escreva um t�tulo"></textarea>
		</div>
		
		<div class="align-button"><button type="submit">Abrir Solicita��o</button></div>
	</form>
</div>

<%@include file="_footer.jsp"%>