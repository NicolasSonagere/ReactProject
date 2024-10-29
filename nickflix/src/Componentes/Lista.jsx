import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";

const API_key = "2a56bdce43255a78ec406e13c71ebe4b";
const API_URL = "https://api.themoviedb.org/3";

export function Lista(){
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('Error', error);
            });
    }, [])

    return(
        <div>
            <figure className="flex flex-wrap">
                {movies.map(movie =>(
                    <Card key={movie.id} movie={movie}/>
                ))}

            </figure>
        </div>
    )
}