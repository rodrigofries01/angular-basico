package rifei.dao;

import java.util.List;

public interface GenericDAO {

	public void insert( Object o );
	
	public boolean delete( int identificador );
	
	public void update( Object o );
	
	public List<?> getAll();
	
	public Object getById( int id );
}
