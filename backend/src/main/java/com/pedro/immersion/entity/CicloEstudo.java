package com.pedro.immersion.entity;

import lombok.Data;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class CicloEstudo {

    private String nome;
    private LocalTime horasTotais;
    private LocalTime horasEstudadas;
    private List<CicloMateria> cicloMaterias;

    public CicloEstudo(String nome, LocalTime horasTotais, LocalTime horasEstudadas, List<CicloMateria> cicloMaterias) {
        this.nome = nome;
        this.horasTotais = horasTotais;
        this.horasEstudadas = horasEstudadas;
        this.cicloMaterias = cicloMaterias;
    }
    public CicloEstudo() {
        this.horasEstudadas = LocalTime.of(0, 0);
    }

    public void addHorasEstudadas(LocalTime horasEstudadas) {
        this.horasEstudadas = this.horasEstudadas.plusHours(horasEstudadas.getHour());
        this.horasEstudadas = this.horasEstudadas.plusMinutes(horasEstudadas.getMinute());
    }

    public void addMateria(CicloMateria ciclo) {
        if (this.cicloMaterias == null) this.cicloMaterias = new ArrayList<>();
        this.cicloMaterias.add(ciclo);
    }
}
