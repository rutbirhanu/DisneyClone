import { Link } from "react-router-dom"
import { styled } from "styled-components"

function Recommended({movies}) {
  return (
      <Container>
          <h3>Recommended For You</h3>
          <Content>
        {movies.map(movie => (
          <ImgWrap key={movie.id}>
           <Link to={`/detail/${movie.id}`}>
        <img src={movie.cardImg} alt="recommended" />
          </Link>
          </ImgWrap>
       ))}
              </Content>
    </Container>
  )
}

const Container = styled.div`
margin-top:55px;

`
const Content = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
padding-bottom:20px;

@media (max-width:760px){
    grid-template-columns:repeat(2,1fr);
    
}
`

const ImgWrap = styled.div`
border-radius:7px;
border:2px solid rgba(255,255,255,0.1);
transition:all 0.4s ease-in;
box-shadow:1px 1px 10px -1px black;
position:relative;

img{
    width:100%;
    height:100%;
    inset:5px;
}

&:hover{
cursor:pointer;
  transform:scale(1.05);
  border:2px solid rgba(255,255,255,0.8);
}
`

export default Recommended