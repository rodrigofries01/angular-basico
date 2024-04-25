package rifei.dao;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import rifei.model.Rifa;

public class RifaDAO extends CommonsDAO {

	public boolean apagar(int identificador) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Rifa resultado = manager.find(Rifa.class, identificador);
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

	
	@SuppressWarnings("unchecked")
	public List<Rifa> selecionarTodos() {
		List<Rifa> resultado = new ArrayList<Rifa>();
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();		
	    Query query = manager.createQuery("from Rifa v order by idRifa");
	    resultado = query.getResultList();
	    manager.close();
		return resultado;
	}

	
	public Rifa selecionarPorId(int idRifa) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select v from Rifa v where v.idRifa = :idRifa");
		query.setParameter("idRifa", idRifa);
		if( query.getResultList() != null && !query.getResultList().isEmpty()  ) {
			Rifa resultado = (Rifa)query.getResultList().get(0);
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
