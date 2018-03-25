const axios =require("axios");
let movies =[];
let newId = 50000;
module.exports ={
    getMovies :(req,res)=>{
        if (!movies.length) { 
            axios
              .get('https://api.themoviedb.org/4/list/51615?api_key=05bc7eb3bc1e74225d21da4179bf87f9')
              .then(list => {
                console.log(list)
                movies = list.data.results;
                res.status(200).json(movies);
              })
              .catch(res => res.status(500).json(res));
            }else{
            res.status(200).json(movies);
        }
        // console.log(foods);
    },
    postMovies: (req,res) =>{
      const{title,overview} = req.body;
      let id = newId;
      movies.push({title,overview,id})
      newId++;
      res.status(200).json(movies);
    },
    updateMovies:(req,res) =>{
        const{ id } = req.params;
        const{ title , overview } =req.body;
        movies.forEach(movie=>{
            {  
                if(parseInt(id) === movie.id){
            movie.overview = overview;
            movie.title = title;
                }
        }
        });
        res.status(200).json(movies);
    },
    deleteMovies:(req,res) =>{
       const {id} =req.params;
       let index = movies.findIndex((movie)=>movie.id === parseInt(id));
       movies.splice(index,1);
       res.status(200).json(movies);
    }
}