export const LOAD_HMOVIES = 'LOAD_HMOVIES';
export const LOAD_BMOVIES = 'LOAD_BMOVIES';
export const ADD_LIKES = 'ADD_LIKES'

export function HollywoodMovie(HMovie) { // add book 
    return {
        type: LOAD_HMOVIES,
        HMovie: {
            ...HMovie
        }
    }
}

export function BollywoodMovie(BMovie) { // add book 
    return {
        type: LOAD_BMOVIES,
        BMovie: {
            ...BMovie
        }
    }
}