let genres_list_http='https://api.themoviedb.org/3/genre/movie/list?';
var api_key='a29184cba69043e2539ab9aad610a707';
fetch(genres_list_http+new URLSearchParams({
    api_key:api_key
}))
.then(res=>res.json())
.then(data=>console.log(data))
//{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
//{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},
//{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},
//{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},
//{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
//{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},
//{"id":37,"name":"Western"}]}
//
var movies_genres_list='https://api.themoviedb.org/3/discover/movie?';
var api_key='a29184cba69043e2539ab9aad610a707';
//const fetchmovielist=(id,genres)=>{
    fetch('https://api.themoviedb.org/3/discover/movie?'+new URLSearchParams({
        api_key:api_key,
       // with_genres:id,
       // page:Math.floor(Math.random()*3)+1
    }))
    .then(res=>res.json())
    .then(data=>console.log(data))
//}
//{"adult":false,"backdrop_path":"/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg","genre_ids":[16,10751,35,14],
//"id":508947,"original_language":"en","original_title":"Turning Red",
//"overview":"Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
//"popularity":6323.817,"poster_path":"/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
//"release_date":"2022-03-01","title":"Turning Red","video":false,"vote_average":7.5,"vote_count":1209}
var api_key='a29184cba69043e2539ab9aad610a707';
fetch('https://api.themoviedb.org/3/movie/{movie_id}?'+new URLSearchParams({
    api_key:api_key,
   // with_genres:id,
   // page:Math.floor(Math.random()*3)+1
}))
.then(res=>res.json())
.then(data=>console.log(data))