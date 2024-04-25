package rifei.dao;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class HibernateUtil {

    public static EntityManagerFactory singleton;

    public HibernateUtil() {
    }

    public static EntityManagerFactory getEntityManagerFactory() {        
        if (singleton == null) {
            try {
            	singleton = Persistence.createEntityManagerFactory("rifas");
            } catch (Throwable ex) {
                System.out.println("Erro ao inicar o Hibernate " + ex);
                throw new ExceptionInInitializerError(ex);
            }
            return singleton;
            
        } else {
            return singleton;
        }
    }
}