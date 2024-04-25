package bd.utils;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 * Esta classe apenas È utilizada quando se quer usar JDBC
 * @author epaf
 *
 */
public class ConnectionFactory {
	public Connection getConnection() {
		try {
			// tenta inicializar a classe org.sqlite.JDBC, que ir· registrar essa classe como um driver JDBC
			Class.forName("org.sqlite.JDBC");
						
			// Colocar aqui o caminho do BD. Se for um BD externo, ser√° algo como "C:/.../rifei.db"
			String caminhoBD = "rifei.db3";
			
			// abre uma conex√£o com o banco de dados, passando uma String de conex√£o
			return DriverManager.getConnection("jdbc:sqlite:" + caminhoBD);
			
		} catch (Exception e) {
			e.printStackTrace();			
		}
		return null;
	}
}