package rifei.model;

import java.util.List;

import rifei.dao.RifaDAO;
import rifei.model.Rifa;

public class RifaManager {

	public static List<Rifa> consultarTodasRifas() {
		RifaDAO dao = new RifaDAO();
		List<Rifa> lista = dao.selecionarTodos();
		return lista;
	}

	public static Rifa consultarRifaPorId( int idRifa ) {
		RifaDAO dao = new RifaDAO();
		Rifa rifa = dao.selecionarPorId(idRifa);
		return rifa;
	}
	
}
