interface CreatedBy {
    name: string;
    profile_path: string;
}
export interface MovieCard {
    backdrop_path: string;
    poster_path: string;
    name: string;
    title: string;
    vote_average: number;
    id: number;
    media_type: string;
    original_language: string;
    overview: string;
    release_date: string;
    status: string;
    tagline: string;
    number_of_episodes: number;
    number_of_seasons: number;
    popularity: number;
    created_by: CreatedBy[];
}
