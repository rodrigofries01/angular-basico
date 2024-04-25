<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/solicitacao.css">

<div class="container">
	<h1 class="section-title">Solicitação</h1>
	<hr/>
	<form class="cadastro">

		<div id="login">
		 <select id="texto" >
		  <option name="">Escolha tipo de solicitação</option>
		  <option name="sugestao">Sugestão</option>
          <option name="reclamacao">Reclamação</option>
          <option name="duvida">Dúvida</option>
          <option name="critica">Crítica</option>
         </select>
			<input id="texto" width="100" type="text" placeholder="Escreva um título">
			<textarea rows="8" cols="50" placeholder="Escreva um título"></textarea>
		</div>
		
		<div class="align-button"><button type="submit">Abrir Solicitação</button></div>
	</form>
</div>

<%@include file="_footer.jsp"%>