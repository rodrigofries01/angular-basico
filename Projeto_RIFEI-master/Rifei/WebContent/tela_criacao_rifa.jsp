<%@include file="_head.jsp"%>

<%@include file="_header.jsp"%>

<link rel="stylesheet" href="css/tela_criacao_rifa.css">
	
<div class="container">
<form>
	
	<div class="camposinformativos">
	<h1>Imagem<h1><br>
	<div/>

	<label class="img">
	<img class="fonteimagem" src="img/img-icon.png"></img><br>
	</label>
		
	<div>
	<h1>Nome</h1>
	<br>
	</div>
	<div>
	<input class="inputs" id="nome_produto" type="text" placeholder="Nome"><br>
	<br>
	<div/>
	<h1>Tipo</h1>
	<br>
	<div>
		<select  class="inputs" name="selecaoproduto">
      	<option value="automoveis">Automoveis</option>
      	<option value="eletronicos">Eletronicos</option>
      	<option value="eletrodomesticos">Eletrodomesticos</option>
      	<option value="moveis">Moveis</option>
      	<option value="servicos">Serviços</option>
      	</select>
	</div>
		
	<br>
	<div>
	<h1>Descrição</h1><br>
	<input  class="inputdescriao" id="descricao" type="text" placeholder="Descrição">
	</div><br>
	<h1>Quantidade de bilhetes</h1><br>
	<input class="quantidadebilhetes" id="quantidade_bilhetes" type="text" placeholder="Quantidades de Bilhetes"><br>
	<br>
	<h1>Preço</h1><br>
	<input  class="quantidadebilhetes" id="preco" type="text" placeholder="Preço"><br>
	<br>
	<h1>Valor Minimo</h1><br>
	<input  class="quantidadebilhetes" id="valor_minimo" type="text" placeholder="Valor Minimo"><br>
	<br>
    </div>
    <h1>Data do sorteio</h1><br>
    <div class="quantidadebilhetes">
    <input id="data_sorteio" type="text" class="quantidadebilhetes" placeholder="dd/mm/aaaa" 
     data-mask="00/00/0000" maxlength="10" autocomplete="off""">
     </div>
    <br>
    <br>
	</form>	
	</div>
	<br>
<%@include file="_footer.jsp"%>