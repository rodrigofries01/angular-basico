package rifei.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public abstract class CommonsDAO implements GenericDAO {
	
	
	public void inserts(Object object) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		manager.persist(object);
		manager.getTransaction().commit();
		manager.close();
	}

	
	public abstract boolean delete(int id);
	

	
	public void update(Object object) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		manager.merge(object);
		manager.getTransaction().commit();
		manager.close();
	}

	
	public abstract List<?> getAll();

	
	public abstract Object getById(int id);

}
