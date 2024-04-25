package rifei.model;

import java.util.List;

import rifei.dao.BilheteDAO;
import rifei.dao.RifaDAO;
import rifei.model.Bilhete;

public class BilheteManager {

	public static List<Bilhete> consultarBilhetesDisponiveis(int idRifa) {
		BilheteDAO dao = new BilheteDAO();
		List<Bilhete> lista = dao.selecionarDisponiveis(idRifa);
		return lista;
	}
	
	public static Bilhete consultarBilhetePorId( int idBilhete ) {
		BilheteDAO dao = new BilheteDAO();
		Bilhete bilhete = dao.selecionarPorId(idBilhete);
		return bilhete;
	}
	
}
