import { useLocation } from "react-router-dom"
import { styled } from "styled-components"

function Detail() {
  const location = useLocation()
  const title = location.state.movie.title
  const backImg = location.state.movie.backgroundImg
  const titleImg = location.state.movie.titleImg

  console.log(location.state.movie.title)
  return (
    <Container style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover' }}>
      <Content>
      <ImgTitle src={titleImg} alt="title" />
      <ButtonContainer>
<button>Play</button>
<button>Play</button>
<button>Play</button>
      </ButtonContainer>
      </Content>
    </Container>
  )
}

const Container = styled.div`
background-size:cover;
min-height:calc(100vh - 56px);
overflow:hidden;
position:relative;
top:56px;
`
const ImgTitle = styled.img`
width:38%;
height:50%;
`
const ButtonContainer = styled.div`
display:flex;

`
const Content = styled.div`
position:absolute;
top:20%;
left:7%;
display:flex;
flex-direction:column;
`

export default Detail