package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entitis.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {

    private Long id;

    private String nome;

    public SellerDTO() {
    }

    public SellerDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public SellerDTO(Seller entity) {
        id = entity.getId();
        nome = entity.getNome();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
