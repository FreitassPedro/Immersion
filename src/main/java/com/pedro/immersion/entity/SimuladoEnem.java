package com.pedro.immersion.entity;

import com.pedro.immersion.entity.enums.EAreaConhecimento;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class SimuladoEnem extends Simulado {

    public SimuladoEnem() {
    }

    @Override
    public void calcularEstastisticas() {


            registrarPorAreaConhecimento();

    }

    private void registrarPorAreaConhecimento() {
        SimuladoEstatistica simuladoEstatistica = getSimuladoEstatistica();
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
