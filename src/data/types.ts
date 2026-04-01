export interface Reference {
    type: 'bible' | 'catechism'
    book?: string
    chapter?: number
    verse?: number
    endVerse?: number
    section?: number
}

export interface Saint {
    id: string
    name: string
    feastDay: string
    birthYear?: number
    deathYear?: number
    biography?: string
    works?: string[]
    imageUrl?: string
}

export interface BibleBook {
    name: string
    abbreviation: string
    chapters: string[][]
}