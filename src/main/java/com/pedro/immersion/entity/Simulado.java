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

    private SimuladoEstatistica estatisticas;

    public abstract void calcularEstastisticas();

    public void setQuestoes(List<Questao> questoes) {
        this.questoes = questoes;
        this.estatisticas = new SimuladoEstatistica();
        this.estatisticas.setAreaStats(new ArrayList<>());
        calcularEstastisticas();
    }


}
