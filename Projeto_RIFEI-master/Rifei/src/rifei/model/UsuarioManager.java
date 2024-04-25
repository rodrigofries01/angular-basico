package rifei.model;


import rifei.dao.UsuarioDAO;
import rifei.model.Usuario;

public class UsuarioManager {


	public static Usuario consultarUsuarioPorId( int idUsuario ) {
		UsuarioDAO dao = new UsuarioDAO();
		Usuario usuario = dao.selecionarPorId(idUsuario);
		return usuario;
	}
	
}