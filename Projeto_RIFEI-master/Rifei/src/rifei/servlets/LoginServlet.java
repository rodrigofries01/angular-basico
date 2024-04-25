package rifei.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import rifei.model.LoginManager;
import rifei.model.Usuario;

@SuppressWarnings("serial")
@WebServlet("/Login.do")
public class LoginServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String email = request.getParameter("email");
        String senha = request.getParameter("senha");
        
        if (LoginManager.validar(email, senha) != null) {
        	Usuario usuario = LoginManager.validar(email, senha);
	        HttpSession session = request.getSession();
	        session.setAttribute("email", email);
	        session.setAttribute("email", usuario.getEmail());
	        session.setAttribute("acesso", usuario.getAcesso());
	        RequestDispatcher view = request.getRequestDispatcher("/index.jsp");
	        view.forward(request, response);
        } else {
        	request.setAttribute("erro", "Usuário ou senha inválida.");
        	RequestDispatcher view = request.getRequestDispatcher("/login.jsp");
        	view.forward(request, response);
        }
        
    }

}
