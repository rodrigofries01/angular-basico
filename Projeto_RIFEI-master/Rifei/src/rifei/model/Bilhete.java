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

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="Bilhete")
public class Bilhete {
	
	@Id
	@Column(name = "idBilhete", nullable = false)
	@GenericGenerator(name="generator", strategy="increment")
    @GeneratedValue(generator="generator")
	private int idBilhete;
	
	@JoinColumn(name = "idRifa", referencedColumnName = "idRifa", nullable = false)
	@ManyToOne(fetch = FetchType.EAGER)
	private Rifa rifa;
	
	@JoinColumn(name = "idPedido", referencedColumnName = "idPedido", nullable = false)
	@ManyToOne(fetch = FetchType.EAGER)
	private Pedido pedido;
	
	
	@Column(name = "numBilhete")
	private int numBilhete;
	
	@Column(name = "valorBilhete")
	private double valorBilhete;
	
	@Column(name = "dtCompra")
	private Date dtCompra;

	
	// GETTERS AND SETTERS
	
	public int getIdBilhete() {
		return idBilhete;
	}

	public void setIdBilhete(int idBilhete) {
		this.idBilhete = idBilhete;
	}

	public Rifa getRifa() {
		return rifa;
	}

	public void setRifa(Rifa rifa) {
		this.rifa = rifa;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public int getNumBilhete() {
		return numBilhete;
	}

	public void setNumBilhete(int numBilhete) {
		this.numBilhete = numBilhete;
	}

	public double getValorBilhete() {
		return valorBilhete;
	}

	public void setValorBilhete(double valorBilhete) {
		this.valorBilhete = valorBilhete;
	}

	public Date getDtCompra() {
		return dtCompra;
	}

	public void setDtCompra(Date dtCompra) {
		this.dtCompra = dtCompra;
	}

}
