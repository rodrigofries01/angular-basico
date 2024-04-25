package rifei.dao;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import rifei.model.Bilhete;

public class BilheteDAO extends CommonsDAO {

	public boolean apagar(int identificador) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Bilhete resultado = manager.find(Bilhete.class, identificador);
		try {
			manager.getTransaction().begin();
			manager.remove( resultado );
			manager.getTransaction().commit();
		} catch( Exception e ){
			e.printStackTrace();
			return false;
		}
		manager.close();	
		return true;
	}
	
	public List<Bilhete> selecionarDisponiveis(int idRifa) {
		List<Bilhete> resultado = new ArrayList<Bilhete>();
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();		
	    Query query = manager.createQuery("from Bilhete where idRifa = :idRifa and idPedido is null");
	    query.setParameter("idRifa", idRifa);
	    resultado = query.getResultList();
	    manager.close();
		return resultado;
	}

	
	public Bilhete selecionarPorId(int idBilhete) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select v from Bilhete v where v.idBilhete = :idBilhete");
		query.setParameter("idBilhete", idBilhete);
		if( query.getResultList() != null && !query.getResultList().isEmpty()  ) {
			Bilhete resultado = (Bilhete)query.getResultList().get(0);
			manager.close();
			return resultado;
		} 
		manager.close();
		return null;
	}


	@Override
	public void insert(Object o) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}


	@Override
	public List<?> getAll() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Object getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
