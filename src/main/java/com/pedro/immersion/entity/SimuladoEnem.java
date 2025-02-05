package com.pedro.immersion.entity;

import com.pedro.immersion.entity.enums.EAreaConhecimento;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class SimuladoEnem extends Simulado {

    public SimuladoEnem() {
    }

    public SimuladoEnem(int id, String name, LocalDateTime dataInicio, LocalDateTime dataFinal, List<Questao> questoes, SimuladoEstatistica estatisticas) {
        super(id, name,  dataInicio, dataFinal, questoes, estatisticas);
    }

    @Override
    public void calcularEstastisticas() {
            registrarStatsAreaConhecimento();
            registrarStatsGeral();
    }

    private void registrarStatsGeral() {
        SimuladoEstatistica statsGeral = getEstatisticas();

        statsGeral.getAreaStats().forEach(stats -> {
            statsGeral.setTotalAcertos(statsGeral.getTotalAcertos() + stats.getTotalAcertos());
            statsGeral.setTotalErros(statsGeral.getTotalErros() + stats.getTotalErros());
            statsGeral.setTotalQuestoes(statsGeral.getTotalQuestoes() + stats.getTotalQuestoes());
            statsGeral.setPorcentagemAcertos(statsGeral.getTotalAcertos() * 100 / statsGeral.getTotalQuestoes());
        });

        this.setEstatisticas(statsGeral);
    }

    private void registrarStatsAreaConhecimento() {
        SimuladoEstatistica simuladoEstatistica = getEstatisticas();
        List<AreaStats> areaStats = simuladoEstatistica.getAreaStats();


        Map<EAreaConhecimento, AreaStats> areaStatsMap = areaStats.stream().map(areaStats1 -> Map.entry(areaStats1.getAreaConhecimento(), areaStats1)).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        for (Questao questao : getQuestoes()) {
            EAreaConhecimento areaConhecimento = questao.getAreaConhecimento();
            if (!areaStatsMap.containsKey(areaConhecimento)) {
                AreaStats statusDaArea = new AreaStats(areaConhecimento);
                areaStatsMap.put(areaConhecimento, statusDaArea);
            }

            AreaStats stats = areaStatsMap.get(areaConhecimento);
            stats.addResposta(questao.getRespostaCorreta());
        }

        simuladoEstatistica.setAreaStats(areaStatsMap.values().stream().collect(Collectors.toList()));
    }
}
