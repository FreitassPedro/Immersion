package com.pedro.immersion;

import com.pedro.immersion.entity.Simulado;
import com.pedro.immersion.entity.SimuladoStats;
import com.pedro.immersion.entity.enums.EAreaConhecimento;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;

@SpringBootApplication
public class ImmersionApplication  implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ImmersionApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		Simulado simulado = new Simulado();
		simulado.setId(1);
		simulado.setName("Simulado 1");
		simulado.setDataInicio(LocalDateTime.now());
		simulado.setDataFinal(LocalDateTime.parse("2025-10-10T12:00:00"));
		simulado.setTotalQuestoes(90);
		simulado.setTotalAcertos(80);
		simulado.setTotalErros(10);




		System.out.println(simulado);

	}
}
