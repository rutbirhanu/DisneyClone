import { styled } from "styled-components"

function Viewers() {
    return (
        <Container>
             <ImgWrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </ImgWrap>
      <ImgWrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </ImgWrap>
      <ImgWrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </ImgWrap>
      <ImgWrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </ImgWrap>
      <ImgWrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </ImgWrap>

        </Container>
    )
}

const Container = styled.div`
margin-top:60px;
display:grid;
grid-template-columns:repeat(5, 1fr);
gap:20px;

@media (max-width:760px){
    grid-template-columns:repeat(1,1fr);
}
`

const ImgWrap = styled.div`
border-radius:4px;
border:2px solid rgba(255,255,255,0.1);
transition:all 0.4s ease-in;
box-shadow:1px 1px 10px -1px black;
position:relative;

img{
    width:100%;
    height:100%;
    inset:5px;
}

video {
    width:100%;
    height:100%;
    position: absolute;
    top: 0px;
    left:0px;
    right:0px;
    bottom:0px;
    display:none;
    z-index: -1;
  }

&:hover{
cursor:pointer;
    border:2px solid white;
    transform:scale(1.08);

    video{
        display:block;
    }
}
`

export default Viewers