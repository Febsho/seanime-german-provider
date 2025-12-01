import axios from 'axios';
import * as cheerio from 'cheerio';
import { AnimeProvider, SearchResult, Episode, VideoSource } from '../types';

export class AniWorldProvider implements AnimeProvider {
    name = "AniWorld";
    baseUrl = "[https://aniworld.to](https://aniworld.to)";
    
    async search(query: string): Promise<SearchResult[]> {
        // ... Code von vorher ...
        return [];
    }

    async getEpisodes(id: string): Promise<Episode[]> {
         // ... Code von vorher ...
         return [];
    }

    async getSources(id: string): Promise<VideoSource[]> {
         // ... Code von vorher ...
         return [];
    }
}
