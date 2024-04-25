package rifei.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
//import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;

//import rifei.state.PedidoAberto;
//import rifei.state.PedidoCancelado;
//import rifei.state.PedidoEncerrado;
//import rifei.state.State;

@Entity
@Table(name="Pedido")
public class Pedido {
	
	@Id
	@Column(name = "idPedido", nullable = false)
	@GenericGenerator(name="generator", strategy="increment")
    @GeneratedValue(generator="generator")
	private int idPedido;
	
	@JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario", nullable = false)
	@ManyToOne(fetch = FetchType.EAGER)
	private Usuario usuario;
	
	@Column(name = "valorTotal")
	private double valorTotal;
	
	@Column(name = "dtPedido")
	private Date dtPedido;

	@Column(name = "estadoPedido")
	private String estadoPedido;
	
//	@Transient
//	private State pedidoAberto = new PedidoAberto(this);
//	
//	@Transient
//	private State pedidoEncerrado = new PedidoEncerrado(this);
//	
//	@Transient
//	private State pedidoCancelado = new PedidoCancelado(this);
//	
//	@Transient
//	private State estadoAtual = pedidoAberto;
	
	
	// GETTERS AND SETTERS
	
	public int getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(int idPedido) {
		this.idPedido = idPedido;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Date getDtPedido() {
		return dtPedido;
	}

	public void setDtPedido(Date dtPedido) {
		this.dtPedido = dtPedido;
	}

	public String getEstadoPedido() {
		return estadoPedido;
	}

	public void setEstadoPedido(String estadoPedido) {
		this.estadoPedido = estadoPedido;
	}

//	// MÉTODOS DO STATE
//	
//	public String abrirPedido() {
//		return estadoAtual.abrir();
//	}
//	
//	public String encerrarPedido() {
//		return estadoAtual.encerrar();
//	}
//	
//	public String cancelarPedido() {
//		return estadoAtual.cancelar();
//	}	
}
