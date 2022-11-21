const movie={
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const Card=({Title,Image ,Type})=>{
    return(
        <div className="card flex flex-col items-center  gap-2  w-52 bg-slate-700 text-center rounded-md  text-gray-100  h-96 relative">
        <img src={Image} alt="" className=' rounded-t-md  h-68 w-full  relative top-0' />
        <h3>{Type}</h3>
        <p className=' text-xs px-5 pb-5'>{Title}</p>
      </div>
    )
}
export default Card