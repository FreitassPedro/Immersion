package com.pedro.immersion.controller;

import com.pedro.immersion.entity.Questao;
import com.pedro.immersion.entity.Simulado;
import com.pedro.immersion.entity.SimuladoEnem;
import com.pedro.immersion.entity.enums.EAreaConhecimento;
import com.pedro.immersion.entity.enums.EMateria;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teste")
public class TesteController {

    @GetMapping
    public ResponseEntity<?> teste() {
        Simulado simulado = new SimuladoEnem();
        simulado.setId(1);
        simulado.setName("Simulado 1");
        simulado.setDataInicio(LocalDateTime.now());
        simulado.setDataFinal(LocalDateTime.parse("2025-10-10T12:00:00"));

        simulado.setQuestoes(createListQuestoes());

        System.out.println(simulado);
        return ResponseEntity.ok(simulado);
    }

    private List<Questao> createListQuestoes() {
        List<Questao> questaos = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Questao questao = new Questao();
            questao.setId(i);
            questao.setAreaConhecimento(EAreaConhecimento.LINGUAGENS);
            questao.setMateria(EMateria.PORTUGUES);
            if (i % 2 == 0) questao.setRespostaCorreta(true);
            questao.setMotivoErro("N/A");
            questaos.add(questao);
        }

        Questao questao = new Questao(11, 11, EAreaConhecimento.MATEMATICA, EMateria.MATEMATICA, true, "N/A");

        questaos.add(questao);
        return questaos;
    }
}
