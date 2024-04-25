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
@Table(name="Rifa")
public class Rifa {
	
	@Id
	@Column(name = "idRifa", nullable = false)
	@GenericGenerator(name="generator", strategy="increment")
    @GeneratedValue(generator="generator")
	private int idRifa;
	
	@JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario", nullable = false)
	@ManyToOne(fetch = FetchType.EAGER)
	private Usuario usuario;
	
	@Column(name = "produto")
	private String produto;
	
	@Column(name = "imagem")
	private String imagem;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "valorMinimo")
	private double valorMinimo;
	
	@Column(name = "qtdBilhete")
	private int qtdBilhete;
	
	@Column(name = "dtAnuncio")
	private Date dtAnuncio;
	
	@Column(name = "dtSorteio")
	private Date dtSorteio;

	public int getIdRifa() {
		return idRifa;
	}

	public void setIdRifa(int idRifa) {
		this.idRifa = idRifa;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getValorMinimo() {
		return valorMinimo;
	}

	public void setValorMinimo(double valorMinimo) {
		this.valorMinimo = valorMinimo;
	}

	public int getQtdBilhete() {
		return qtdBilhete;
	}

	public void setQtdBilhete(int qtdBilhete) {
		this.qtdBilhete = qtdBilhete;
	}

	public Date getDtAnuncio() {
		return dtAnuncio;
	}

	public void setDtAnuncio(Date dtAnuncio) {
		this.dtAnuncio = dtAnuncio;
	}

	public Date getDtSorteio() {
		return dtSorteio;
	}

	public void setDtSorteio(Date dtSorteio) {
		this.dtSorteio = dtSorteio;
	}
	
}
