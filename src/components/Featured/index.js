import React from "react";
import './index.css'

export default function FeaturedMovie({data}){

    let featuredMovieYear = new Date(data.first_air_date).getFullYear()
    let featuredMovieGenres = [];
    for (let i in data.genres){
        featuredMovieGenres.push(data.genres[i].name);
    }


    return(
        <section className='featured' style={{
            backgroundSize:'cover', 
            backgroundPosition: 'center', 
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
            }}>
            <div className='featured-vertical'>
                <div className='featured-horizontal'>
                    <div className='featured-name'>{data.original_name}</div>
                    <div className='featured-infos'>
                        <div className='featured-points'>{data.vote_average} pontos</div>
                        <div className='featured-year'>{featuredMovieYear}</div>
                        <div className='featured-seasons'>{data.number_of_seasons} temporada{data.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured-description'>{data.overview}</div>
                    <div className='featured-btns'>
                        <a href={`/watch/${data.id}`} className='featured-Wbtn'>▶ Assistir</a>
                        <a href={`/list/add/${data.id}`} className='featured-Lbtn'>+ Minha lista</a>
                    </div>
                    <div className='featured-genres'><strong>Gêneros:</strong> {featuredMovieGenres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}