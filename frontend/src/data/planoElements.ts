export interface PlanoItem {
    id: number;
    materia: string;
    sessoes: Sessao[];
    total: string;
}

interface Sessao {
    id: number;
    tempo: string;
}

export const planoElements: PlanoItem[] = [
    {
        id: 1,
        materia: 'Matemática',
        sessoes: [
            {
                id: 1,
                tempo: '01:00'
            },
        ],
        total: '01:00'
    },
    {
        id: 2,
        materia: 'Química',
        sessoes: [
            {
                id: 1,
                tempo: '01:00'
            },
            {
                id: 2,
                tempo: '01:00'
            },
            {
                id: 3,
                tempo: '01:20'
            },
        ],
        total: '03:20'
    },
    {
        id: 3,
        materia: 'Biologia',
        sessoes: [
            {
                id: 1,
                tempo: '01:00'
            },
            {
                id: 2,
                tempo: '03:00'
            },
        ],
        total: '04:00'
    },
    {
        id: 4,
        materia: 'Física',
        sessoes: [
            {
                id: 1,
                tempo: '01:00'
            },
            {
                id: 2,
                tempo: '01:40'
            },
            {
                id: 3,
                tempo: '01:20'
            },
            {
                id: 4,
                tempo: '01:00'
            },
            {
                id: 5,
                tempo: '01:20'
            },
            {
                id: 6,
                tempo: '01:50'
            },
        ],
        total: '08:10'
    }
];