interface cicloTableData {
    id : number | string,
    materia: string,
    horasTotais: string,
    horasFeitas: string,
    progresso: number,
    tags: string,
}
export const cicloTableData = [
    {
        id: 1,
        materia: 'Matemática',
        horasMeta: "1:50:00",
        horasFeitas: "1:30:00",
        progresso: 0.4,
        tags: '🤢😺😻😨'
    },
    {
        id: 2,
        materia: 'Inglês',
        horasMeta: "2:30:00",
        horasFeitas: "2:23:00",
        progresso: 0.6,
        tags: '🤢😺😻😨'
    },
    {
        id: 3,
        materia: 'Biologia',
        horasMeta: '01:00:00',
        horasFeitas: '00:20:00',
        progresso: 0.6,
        tags: '🤢😺😻😨'
    },
    {
        id: 4,
        materia: 'Física',
        horasMeta: "01:00:00",
        horasFeitas: "01:20:00",
        progresso: 0.1,
        tags: '🤢😺😻😨'
    },
    {
        id: 5,
        materia: 'Química',
        horasMeta: "01:00:00",
        horasFeitas: "00:30:00",
        progresso: 0.8,
        tags: '🤢😺😻😨'
    }
];