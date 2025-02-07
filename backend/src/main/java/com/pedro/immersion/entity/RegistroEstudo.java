package com.pedro.immersion.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistroEstudo {


    private String materia;
    private LocalTime duracao;

    private LocalTime pausa;
    private LocalDate data;
    private String tipoEstudo;
    private Integer quantidadeQuestoes;
    private Integer quantidadeAcertos;
    private Integer quantidadeErros;

    private int produtividade;
    private int desempenho;
    private int concentracao;

    private List<Object> observacoes;


    //private List<ErrosDetalhados> errosDetalhados;

}
