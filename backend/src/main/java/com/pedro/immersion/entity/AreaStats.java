package com.pedro.immersion.entity;

import com.pedro.immersion.entity.enums.EAreaConhecimento;
import lombok.Data;

@Data
public class AreaStats {

    private EAreaConhecimento areaConhecimento;
    private int totalQuestoes;
    private int totalAcertos;
    private int totalErros;

    private float porcentagemAcertos;

    public AreaStats() {
    }
    public AreaStats(EAreaConhecimento areaConhecimento) {
        this.areaConhecimento = areaConhecimento;
    }

    public AreaStats(EAreaConhecimento areaConhecimento, int totalQuestoes, int totalAcertos, int totalErros) {
        this.areaConhecimento = areaConhecimento;
        this.totalQuestoes = totalQuestoes;
        this.totalAcertos = totalAcertos;
        this.totalErros = totalErros;
    }

    public void addAcerto() {
        totalAcertos++;
        totalQuestoes++;
    }
    public void addErro() {
        totalErros++;
        totalQuestoes++;
    }

    public void addResposta(boolean respostaCorreta) {
        if (respostaCorreta) addAcerto();
        else addErro();
    }
}
