import { AniWorldProvider } from './providers/aniworld';

// Für Seanime exportieren wir die Klasse oder eine Instanz
// Hinweis: Die genaue Integration hängt von der Seanime API ab. 
// Oft wird erwartet, dass das Skript global verfügbar ist oder ein default export ist.
export default {
    providers: [
        new AniWorldProvider()
    ]
};
