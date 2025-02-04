package com.pedro.immersion.entity;

import com.pedro.immersion.entity.enums.EAreaConhecimento;
import com.pedro.immersion.entity.enums.EMateria;
import lombok.Data;

@Data
public class Questao {

    private int id;
    private int numeroQuestao;

    private EAreaConhecimento areaConhecimento;
    private EMateria materia;

    private Boolean respostaCorreta = false;

    private String motivoErro;



}
