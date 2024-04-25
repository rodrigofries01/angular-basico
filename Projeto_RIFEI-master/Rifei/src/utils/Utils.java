package utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils {
	
	
	// Métodos de double	

	public static String formataDouble(double x) { 
		return String.format("%1$,.2f", x);
	}

	public static double strMoedaParaDouble(String strMoeda) {
		String str = strMoeda.substring(3).replace(".", "").replace(",", ".");
		double valorDouble = Double.parseDouble(str);
		return valorDouble;
	}
	
	public static String strDoubleParaMoeda(double valorDouble) {
		return "R$ " + formataDouble(valorDouble);
	}	

	
	// Métodos de data	
	
	public static String formatarData(Date data) {
		String pattern = "dd/MM/yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String dtFormatada = simpleDateFormat.format(data);
		return dtFormatada;
	}	
	
	public static Date strParaDate(String dataStr) {
		if( dataStr == null ) {
			return null;
		}
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Date data;

			try {
				data = format.parse(dataStr);
				return data;
			} catch (ParseException e) {
				e.printStackTrace();
			}			
			return null;
	}
	
	public static String dateParaStr( Date data ) {
		if( data == null ) {
			return "N/A";
		}
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        return format.format(data);
	}	
}
