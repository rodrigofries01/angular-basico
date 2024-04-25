<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/avaliacao.css">

<div class="container">
	<h1 class="section-title">Avalie o Rodrigo</h1>
	<hr/>
	<form class="cadastro">

		<div id="login">
		 <select id="texto" >
		  <option name="">Que nota você dá pra ele(a)?</option>
		  <option name="5">Muito Bom (&#10025;&#10025;&#10025;&#10025;&#10025;) </option>
          <option name="4">Bom (&#10025;&#10025;&#10025;&#10025;) </option>
          <option name="3">Regular (&#10025;&#10025;&#10025;) </option>
          <option name="2">Ruim (&#10025;&#10025;) </option>
          <option name="1">Muito Ruim (&#10025;)</option>
         </select>
			<textarea rows="8" cols="50" placeholder="Escreva aqui seus motivos da nota (opcional)"></textarea>
		</div>
		
		<div class="align-button"><button type="submit">Enviar Avaliação</button></div>
	</form>
</div>

<%@include file="_footer.jsp"%>