package rifei.dao;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import rifei.model.Pedido;

public class PedidoDAO extends CommonsDAO {

	public boolean apagar(int identificador) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Pedido resultado = manager.find(Pedido.class, identificador);
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
	public List<Pedido> selecionarTodos() {
		List<Pedido> resultado = new ArrayList<Pedido>();
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();		
	    Query query = manager.createQuery("from Pedido p order by idPedido");
	    resultado = query.getResultList();
	    manager.close();
		return resultado;
	}

	
	public Pedido selecionarPorId(int idPedido) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select p from Pedido p where p.idPedido = :idPedido");
		query.setParameter("idPedido", idPedido);
		if( query.getResultList() != null && !query.getResultList().isEmpty()  ) {
			Pedido resultado = (Pedido)query.getResultList().get(0);
			manager.close();
			return resultado;
		} 
		manager.close();
		return null;
	}

	@SuppressWarnings("unchecked")
	public List<Pedido> selecionarPorEstado(String estadoPedido) {
		EntityManagerFactory factory = HibernateUtil.getEntityManagerFactory();
		EntityManager manager = factory.createEntityManager();
		Query query = manager.createQuery("select p from Pedido p where p.estadoPedido = :estadoPedido");
		query.setParameter("estadoPedido", estadoPedido);
		if( query.getResultList() != null && !query.getResultList().isEmpty()) {
			List<Pedido> resultado = (List<Pedido>)query.getResultList();
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
