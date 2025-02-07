package com.pedro.immersion.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class ErrosDetalhados {

    private String motivoErro;

    private String conteudo;
    private String questao;

    private String observacao;



}
