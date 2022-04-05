const API_key='api_key=a29184cba69043e2539ab9aad610a707'
const BASE_URL='https://api.themoviedb.org/3'
//popularity movies
const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_key
getmovies(API_URL)

const getmovies=(url)=>{
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results)
        showmovies(data.results)
        function showmovies(data){
            data.forEach(element => {
                const {poster_path,title,release_date,vote_average,overview}=element
                console.log(poster_path,title,release_date,vote_average,overview)
                
            });
        }

    })
}
//function showmovies(data){
  //  data.forEach(element => {
    //    const {poster_path,title,release_date,vote_average,overview}=element
      //  console.log(poster_path,title,release_date,vote_average,overview)
        
    //});
//}
//movies in threater
const API_keylatest=BASE_URL+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_key
getmovies(API_keylatest)

function getmovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results)
        showmovies(data.results)

    })
}
function showmovies(data){
    data.forEach(element => {
        const {poster_path,title,release_date,vote_average,overview}=element
        console.log(poster_path,title,release_date,vote_average,overview)
        
    });
} 