package rifei.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import rifei.model.Bilhete;
import rifei.model.BilheteManager;
import rifei.model.PedidoManager;

@SuppressWarnings("serial")
@WebServlet("/ConfirmarCompra.do")
public class ConfirmarCompraServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int idBilhete = Integer.parseInt(request.getParameter("bilhete"));
		
		Bilhete bilhete = BilheteManager.consultarBilhetePorId(idBilhete);
		double valorTotal = bilhete.getValorBilhete();
		
		int idUsuario = 2;

		// Encaminhar para a classe especialista
		
		String result = PedidoManager.criarPedido(idUsuario, valorTotal, idBilhete);
		
		request.setAttribute("mensagem", result);
		RequestDispatcher view = request.getRequestDispatcher("confirmacao.jsp");
	}
}