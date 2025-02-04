package com.pedro.immersion.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Data
public abstract class Simulado {

    private int id;
    private String name;

    private LocalDateTime dataInicio;
    private LocalDateTime dataFinal;

    private List<Questao> questoes;

    private SimuladoEstatistica simuladoEstatistica;

    public abstract void calcularEstastisticas();

    public void setQuestoes(List<Questao> questoes) {
        this.questoes = questoes;
        this.simuladoEstatistica = new SimuladoEstatistica();
        this.simuladoEstatistica.setAreaStats(new ArrayList<>());
        calcularEstastisticas();
    }


}
