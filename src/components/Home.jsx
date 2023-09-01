import { styled } from "styled-components"
import ImgSlider from "./ImgSlider"
import Viewers from "./Viewers"
import Recommended from "./Recommended"
import { useEffect, useState } from "react"
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"

function Home() {

  const moviesCollection = collection(db, "movies");
  const [movies,setMovies]=useState([])

  useEffect(()=>{

    const getMovies = async () => {
      try {
        const movie = await getDocs(moviesCollection);
        const filtered = movie.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setMovies(filtered)
        console.log(movies)
      }
      catch (err) {
        console.log(err)
      }
     
    }
    getMovies()

  }, [])
  
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended movies={ movies} />
    </Container>
  )
}

const Container = styled.div`
position:relative;
min-height: calc(100vh - 250px);
overflow:hidden;
background-image:url("/images/home-background.png");
background-repeat:no-repeat;
background-size:cover;
top:70px;
padding:0 calc(3.5vw + 5px);
`

export default Home