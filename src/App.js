import React, {useEffect, useState} from "react"
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/Featured";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

export default function App() {
  const [mList, setMList] = useState([])
  const [featuredShow, setFeaturedShow] = useState(null)
  const [headerTransition, setHeaderTransition] = useState(false)

  useEffect(()=>{
    const loadAll = async ()=>{
      /*pegando lista de filmes */
      let list = await Tmdb.getHomeList()
      console.log(list)
      setMList(list)

      //pegando featured
      let originals = list.filter(i=>i.slug === 'originals') /*vai pegar somente os filmes da lista que tiver slug como originals */
      let randomChosenMovie = Math.floor(Math.random() * (originals[0].itens.results.length - 1)) /*vai gerar um numero aleatorio que vai estar presentes entre os filmes */
      let chosen = originals[0].itens.results[randomChosenMovie] /*atribui a escolha o filme com gerado pela variavel anterior*/
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedShow(chosenInfo)
    }
    loadAll()
  },[])

  useEffect(()=> {
    const scrollListener =()=>{
      if (window.scrollY > 10){
        setHeaderTransition(true)
      }else{
        setHeaderTransition(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div className='page'>
    
      <Header transition={headerTransition}/>
      
      {featuredShow && <FeaturedMovie data={featuredShow}/> /*se houver algo em featuredshow ele vai mostrar FeaturedMovie */}
      <section className='list'>
        {mList.map((item, key)=>{
          return (
              <MovieRow key={key} title={item.title} itens={item.itens}/>
            )
        })}
      </section>
      <Footer/>
      {
      mList.length <= 0 &&
      <div className='loading'>
        <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='carregando'/>
      </div>
      }
    </div>
  );
}