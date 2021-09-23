import React from "react";
import './index.css'
import { NavigateBefore, NavigateNext} from "@material-ui/icons";
import { useState } from "react";

export default function ({title, itens}){
    const [scrollX, setScrollX] = useState(0)
    
    const handleLeftArrow =()=>{
        let x = scrollX + Math.round(window.innerWidth / 2) /* vai somar o scroll atual com a tela do usuario pela metade para fazer a transicao a esquerta*/
        if(x>0){/*se o scroll tiver maior que zero o scroll vai ser automaticamente 0 */
            x=0
        }
        setScrollX(x)
    }
    const handleRightArrow =()=>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = itens.results.length * 150
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return(
        <div className='movieRow'> 
             <h2>{title}</h2>
             <div className="movieRow-left" onClick={handleLeftArrow}><NavigateBefore style={{fontSize: 50}}/></div>
             <div className="movieRow-right" onClick={handleRightArrow}><NavigateNext style={{fontSize: 50}}/></div>

             <div className='movieRow-listA'>
                 <div className='movieRow-list' style={{
                     marginLeft:scrollX,
                     width: itens.results.length * 150
                     
                     }}>
                    {itens.results.length > 0 && itens.results.map((item, key)=>(
                        <div key={key} className='movieRow-item'>
                             <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}   
                 </div>
             </div>
        </div>
    )

}