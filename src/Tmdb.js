const API_KEY = 'API_KEY'
const API_BASE = 'https://api.themoviedb.org/3'

/*
-originais netflix       - with_networks=213
-recomendados (trending) - 
-em alta (top rated)
-ação                    -with_genres=28
-comedia                 -with_genres=35
-terror                  -with_genres=27
-romance                 -with_genres=10749
-documentários           -with_genres=99
*/
/*await pausa a função async ate receber a resposta de sua requisição */
const basicFetch = async (endpoint)=>{
   const req = await fetch(`${API_BASE}${endpoint}`)
   const json = await req.json()
   return json
}

export default {
    getHomeList: async ()=>{
        return [
            {
                slug: 'originals',
                title: 'Original Netflix',
                itens: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topRated',
                title: 'Em alta',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type)=>{
        let info = {}

        if(movieId){
            switch(type){
                case 'movie' :
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv' :
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break; 
            }
            return info
        }

    }
}