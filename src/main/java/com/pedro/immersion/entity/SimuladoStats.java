package com.pedro.immersion.entity;

import com.pedro.immersion.entity.enums.EAreaConhecimento;
import lombok.Data;

@Data
public class SimuladoStats {

    private EAreaConhecimento areaConhecimento;
    private Integer totalQuestoes;
    private Integer totalAcertos;
    private Integer totalErros;

    public void calcularStatus() {

    }
}
