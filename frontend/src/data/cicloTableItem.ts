export interface CicloTableItem {
    id : number,
    materia: string,
    horasMeta: string,
    horasRealizadas: string,
    progresso: number,
    tags: string,
}
export const cicloTableItems: CicloTableItem[] = [
    {
        id: 1,
        materia: 'Matemática',
        horasMeta: "1:50:00",
        horasRealizadas: "1:30:00",
        progresso: 0.4,
        tags: '🤢😺😻😨'
    },
    {
        id: 2,
        materia: 'Inglês',
        horasMeta: "2:30:00",
        horasRealizadas: "2:23:00",
        progresso: 0.6,
        tags: '🤢😺😻😨'
    },
    {
        id: 3,
        materia: 'Biologia',
        horasMeta: '01:00:00',
        horasRealizadas: '00:20:00',
        progresso: 0.6,
        tags: '🤢😺😻😨'
    },
    {
        id: 4,
        materia: 'Física',
        horasMeta: "01:00:00",
        horasRealizadas: "01:20:00",
        progresso: 0.1,
        tags: '🤢😺😻😨'
    },
    {
        id: 5,
        materia: 'Química',
        horasMeta: "01:00:00",
        horasRealizadas: "00:30:00",
        progresso: 0.8,
        tags: '🤢😺😻😨'
    }
];