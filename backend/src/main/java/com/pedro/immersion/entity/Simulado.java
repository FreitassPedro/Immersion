package com.pedro.immersion.entity;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Data
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = SimuladoEnem.class, name = "SimuladoEnem"),
})
public abstract class Simulado {

    private int id;
    private String name;

    private LocalDateTime dataInicio;
    private LocalDateTime dataFinal;

    private List<Questao> questoes;

    private SimuladoEstatistica estatisticas;

    public abstract void calcularEstastisticas();

    public Simulado(int id, String name, LocalDateTime dataInicio, LocalDateTime dataFinal, List<Questao> questoes, SimuladoEstatistica estatisticas) {
        this.id = id;
        this.name = name;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.questoes = questoes;
        this.estatisticas = estatisticas;
    }

    public Simulado() {
    }

    public void setQuestoes(List<Questao> questoes) {
        this.questoes = questoes;
        this.estatisticas = new SimuladoEstatistica();
        this.estatisticas.setAreaStats(new ArrayList<>());
        calcularEstastisticas();
    }


}
