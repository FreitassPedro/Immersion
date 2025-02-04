package com.pedro.immersion.entity;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class SimuladoEstatistica {

    List<AreaStats> areaStats;
    private int totalQuestoes;
    private int totalAcertos;
    private int totalErros;
    private float porcentagemAcertos;





    private void addAcerto() {
        totalAcertos++;
    }

    private void addErro() {
        totalErros++;
    }

    private void addQuestao() {
        totalQuestoes++;
    }



    public void addAreaStats(AreaStats areaStats) {
        if (this.areaStats == null) this.areaStats = new ArrayList<>();
        this.areaStats.add(areaStats);
    }

}
