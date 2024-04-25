package rifei.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import rifei.dao.BilheteDAO;
import rifei.dao.UsuarioDAO;
import rifei.dao.PedidoDAO;

public class PedidoManager {

	public static String criarPedido(int idUsuario, double valorTotal, int idBilhete) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		PedidoDAO pedidoDAO = new PedidoDAO();
		BilheteDAO bilheteDAO = new BilheteDAO();
		
		Usuario usuario = usuarioDAO.selecionarPorId(idUsuario);
		
		Pedido pedido = new Pedido();
		pedido.setUsuario(usuario);
		pedido.setValorTotal(valorTotal);
		pedido.setDtPedido(new Date());
		pedido.setEstadoPedido("Aberto");
		
		Bilhete bilhete = BilheteManager.consultarBilhetePorId(idBilhete);
		bilhete.setPedido(pedido);
		bilhete.setDtCompra(new Date());
		
		try {
			pedidoDAO.insert(pedido);
			bilheteDAO.update(bilhete);
			
			String mensagem = "Pedido cadastrado com sucesso.";
			return mensagem;
		} catch( Exception e ) {
			e.printStackTrace();
			String mensagem = "Não foi possível cadastrar o pedido.";
			return mensagem;
		}
		
	}
	
//	public static String encerrarPedido(int idPedido) {
//		PedidoDAO pedidoDAO = new PedidoDAO();
//		BilheteDAO itemPedidoDAO = new BilheteDAO();
//		RifaDAO rifaDAO = new RifaDAO();
//		
//		Pedido pedido = pedidoDAO.selecionarPorId(idPedido);
//		
//		// Tenta fazer a transição de estados com o State
//		String result = pedido.encerrarPedido();
//		if( result.contains("ERRO:")) {
//			return result;
//		}
//		
//		// Atualiza o pedido no BD
//		pedidoDAO.atualizar(pedido);
//		
//		return "Pedido entregue com sucesso!";
//		
//	}
//
//	public static String cancelarPedido(int idPedido) {
//		PedidoDAO pedidoDAO = new PedidoDAO();
//		
//		Pedido pedido = pedidoDAO.selecionarPorId(idPedido);
//		
//		// Tenta fazer a transição de estados com o State
//		String result = pedido.cancelarPedido();
//		if( result.contains("ERRO:")) {
//			return result;
//		}
//		
//		// Atualiza o pedido no BD
//		pedidoDAO.atualizar(pedido);
//				
//		return "Pedido cancelado com sucesso.";
//	}
	
	public static List<Pedido> consultarPedidoPorEstado(String estadoPedido) {
		PedidoDAO pedidoDAO = new PedidoDAO();
		List<Pedido> listaPedidos = new ArrayList<Pedido>();
		if( estadoPedido.equals("Todos")) {
			listaPedidos = pedidoDAO.selecionarTodos();
		} else {
			listaPedidos = pedidoDAO.selecionarPorEstado(estadoPedido);
		}
		return listaPedidos;
	}
}
