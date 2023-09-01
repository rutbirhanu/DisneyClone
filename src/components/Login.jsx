import { styled } from "styled-components"

function Login() {
  return (
    <Container>
      <Content>
        <LogoImg src="/images/cta-logo-one.svg" />
        <LoginButton className="login-btn"> GET ALL THERE</LoginButton>
        <Description >Get Premier Access to the key Lorem ipsum dolor sit amet
          coerendis culpa dolore delectus quod recusandae rerum tempore, voluptatum quo!</Description>
        <LogoImg src="images/cta-logo-two.png"/>
      </Content>
    </Container>
  )
}

const Container = styled.section`
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100vw;
z-index:-1;
background-image:url("/images/login-background.jpg");
background-position:top;
background-size:cover;
background-repeat:no-repeat;
`
const Content = styled.div`
// position:relative;
// min-height:100vh;
margin-top:3rem;
width:80%;
max-width:600px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:80px 40px;
margin-bottom:10vh;
box-sizing:border-box;
text-align:center;
`
const LogoImg = styled.img`
height:100%;
width:100%;
max-width:600px;
display:block;
margin-bottom:20px;

`
const LoginButton = styled.a`
background-color:#0063e5;
width:100%;
border:none;
border-radius:5px;
font-weight:bold;
letter-spacing:2px;
font-size:18px;
padding:16.5px 0;
margin-bottom:12px;

@media (max-width:340px){
font-size:11px;
letter-spacing:0;
margin-bottom:9px;
}

&:hover{
  background-color:#0483ee;
}
`
const Description = styled.p`
font-size:14.3px;
padding:0 0 20px;
line-height:1.5;
margin-bottom:15px;
@media (max-width:300px){
  font-size:10px;
}
`

export default Login