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
import rifei.model.Rifa;
import rifei.model.RifaManager;

@SuppressWarnings("serial")
@WebServlet("/CarrinhoCompras.do")
public class CarrinhoComprasServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int idBilhete = Integer.parseInt(request.getParameter("bilhete"));

		// Encaminhar para a classe especialista
		Bilhete bilhete = BilheteManager.consultarBilhetePorId( idBilhete );
		
		request.setAttribute("bilhete", bilhete);
		
		Rifa rifa = RifaManager.consultarRifaPorId( bilhete.getRifa().getIdRifa() );
				
		request.setAttribute("rifa", rifa);
		
		
		RequestDispatcher view = request.getRequestDispatcher("carrinho_compras.jsp");
		view.forward(request, response);
	}
}