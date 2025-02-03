package com.pedro.immersion.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class Simulado {

    private int id;
    private String name;
    private int totalQuestoes;
    private int totalAcertos;
    private int totalErros;

    private LocalDateTime dataInicio;
    private LocalDateTime dataFinal;

    private List<Questao> questoes = new ArrayList<>();

    private List<SimuladoStats> simuladoStats = new ArrayList<>();

    public void addSimuladoStats(SimuladoStats simuladoStats) {
        this.simuladoStats.add(simuladoStats);
    }

    public void addQuestao(Questao questao) {
        this.questoes.add(questao);
    }



}
