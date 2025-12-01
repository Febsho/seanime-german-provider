export interface SearchResult {
    id: string;
    title: string;
    url: string;
    image?: string;
    subOrDub?: 'sub' | 'dub' | 'both';
}

export interface Episode {
    id: string;
    number: number;
    title: string;
    url: string;
}

export interface VideoSource {
    url: string;
    quality: string;
    format: 'hls' | 'mp4';
}

export interface AnimeProvider {
    name: string;
    search(query: string): Promise<SearchResult[]>;
    getEpisodes(animeId: string): Promise<Episode[]>;
    getSources(episodeId: string): Promise<VideoSource[]>;
}
