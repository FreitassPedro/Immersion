package com.pedro.immersion.controller;

import com.pedro.immersion.entity.*;
import com.pedro.immersion.entity.enums.EAreaConhecimento;
import com.pedro.immersion.entity.enums.EMateria;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teste")
public class TesteController {

    @PostMapping()
    private ResponseEntity<?> testePost(@RequestBody Simulado simulado) {
        System.out.println(simulado);
        return ResponseEntity.ok(simulado);
    }

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


    @PostMapping("/secao")
    public ResponseEntity<?> testeSecao(@RequestBody RegistroEstudoForm registroEstudoForm) {
        RegistroEstudo registroEstudo = RegistroEstudo.builder()
                .data(registroEstudoForm.getData())
                .pausa(registroEstudoForm.getPausa())
                .duracao(registroEstudoForm.getDuracao())
                .materia(registroEstudoForm.getMateria())
                .tipoEstudo(registroEstudoForm.getTipoEstudo())
                .quantidadeQuestoes(registroEstudoForm.getQuantidadeQuestoes())
                .quantidadeAcertos(registroEstudoForm.getQuantidadeAcertos())
                .quantidadeErros(registroEstudoForm.getQuantidadeQuestoes() - registroEstudoForm.getQuantidadeAcertos())
                .observacoes(registroEstudoForm.getObservacoes())
                .produtividade(registroEstudoForm.getProdutividade())
                .desempenho(registroEstudoForm.getDesempenho())
                .concentracao(registroEstudoForm.getConcentracao())
                .build();

        CicloMateria cicloMateria = new CicloMateria();
        cicloMateria.setMateria(registroEstudoForm.getMateria());
        cicloMateria.setHorasEstudadas(registroEstudoForm.getDuracao());
        cicloMateria.setHorasTotais(registroEstudoForm.getDuracao());
        if (cicloMateria.getHorasTotais().isAfter(registroEstudo.getDuracao()) || cicloMateria.getHorasTotais().equals(registroEstudo.getDuracao())) {
            cicloMateria.setHorasTotais(registroEstudo.getDuracao());
            cicloMateria.setFinalizado(true);
        }

        RegistroEstudo registroEstudo1 = new RegistroEstudo();
        registroEstudo1.setData(registroEstudoForm.getData());
        registroEstudo1.setDuracao(LocalTime.now().minusHours(1));
        registroEstudo1.setMateria("Matemática");
        registroEstudo1.setDesempenho(2);
        registroEstudo1.setProdutividade(3);
        registroEstudo1.setConcentracao(4);
        registroEstudo1.setTipoEstudo("Video-aula");


        CicloMateria cicloMateria1 = new CicloMateria();
        cicloMateria1.setMateria(registroEstudo1.getMateria());
        cicloMateria1.setHorasTotais(registroEstudo1.getDuracao().minusHours(4));
        cicloMateria1.setHorasEstudadas(registroEstudo1.getDuracao());

        cicloMateria1.addRegistro(registroEstudo1);
        cicloMateria.addRegistro(registroEstudo);

        CicloEstudo cicloEstudo = new CicloEstudo();
        cicloEstudo.setNome("Ciclo 1");
        cicloEstudo.setHorasTotais(LocalTime.of(10, 30));
        cicloEstudo.addHorasEstudadas(registroEstudo.getDuracao());
        cicloEstudo.addHorasEstudadas(registroEstudo1.getDuracao());
        cicloEstudo.addMateria(cicloMateria);
        cicloEstudo.addMateria(cicloMateria1);
        return ResponseEntity.ok(cicloEstudo);
    }

}
