package rifei.model;

import rifei.dao.UsuarioDAO;

public class LoginManager {
	
	public static Usuario validar(String nomeUsuario, String senha) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		
		if (usuarioDAO.selecionar(nomeUsuario, senha) != null) {
			Usuario usuario = usuarioDAO.selecionar(nomeUsuario, senha);
			return usuario;
		} else {
			return null;
		}
	}

}
