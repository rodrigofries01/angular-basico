package rifei.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import rifei.dao.HibernateUtil;
import rifei.model.Usuario;

public class UsuarioDAO {
	
	public Usuario selecionar(String nomeUsuario, String senha) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select u from Usuario u where u.nomeUsuario = :nomeUsuario and u.senha = :senha");
		query.setParameter("nomeUsuario", nomeUsuario);
		query.setParameter("senha", senha);
		if( query.getResultList() != null && !query.getResultList().isEmpty()  ) {
			Usuario resultado = (Usuario)query.getResultList().get(0);
			manager.close();
			return resultado;
		} 
		manager.close();
		return null;
	}
	
	public Usuario selecionarPorId(int idUsuario) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select v from Usuario v where v.idUsuario = :idUsuario");
		query.setParameter("idUsuario", idUsuario);
		if( query.getResultList() != null && !query.getResultList().isEmpty()  ) {
			Usuario resultado = (Usuario)query.getResultList().get(0);
			manager.close();
			return resultado;
		} 
		manager.close();
		return null;
	}
	
}
