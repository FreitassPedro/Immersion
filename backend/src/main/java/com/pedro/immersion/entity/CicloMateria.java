package com.pedro.immersion.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CicloMateria {

    private String materia;
    private LocalTime horasTotais;
    private LocalTime horasEstudadas;
    private Boolean finalizado = false;
    private List<RegistroEstudo> registrosEstudo;

    public void addRegistro(RegistroEstudo registroEstudo) {
        if (registrosEstudo == null) registrosEstudo = new ArrayList<>();

        registrosEstudo.add(registroEstudo);
    }
}