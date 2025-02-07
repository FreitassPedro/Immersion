package com.pedro.immersion.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistroEstudoForm {

    private LocalTime duracao;
    private String materia;
    private String tipoEstudo;

    private LocalDate data;
    private LocalTime pausa;

    private Integer quantidadeQuestoes;
    private Integer quantidadeAcertos;

    private int produtividade;
    private int desempenho;
    private int concentracao;

    private List<Object> observacoes;
}
