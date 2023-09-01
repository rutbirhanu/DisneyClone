import { styled } from "styled-components"
import { provider, authentication } from "../firebase"
import { signInWithPopup, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, loggedInUsers } from "../redux/authSlice";
import { useEffect } from "react";

function Header() {

  const name = useSelector(state => state.auth.name)
  const photo = useSelector(state => state.auth.photo)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    authentication.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(loggedInUsers({ name: user.displayName, email: user.email, photo: user.photoURL }))
        navigate("/home")
      }
    })
  }, [name])

  const handleLogout = async () => {
    try {
     await signOut(authentication)      
      dispatch(logOut())
      navigate("/")
      console.log(name)
    }
    catch (err) {
      console.log(err)
    }
}

  const handleAuth = async () => {
    try {
      const result = await signInWithPopup(authentication, provider);
      dispatch(loggedInUsers({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }))
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <Nav>
      {/* <NavLink> */}
      <img src="/images/logo.svg" alt="disney" width="80px" style={{ marginRight: "25px" }} />
      {/* </NavLink> */}
      {!name ? <LoginButton onClick={handleAuth}>
        Login
      </LoginButton> :
        <>
          <StyledLink>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <p>HOME</p>
            </a>
            <a href="#">
              <img src="/images/search-icon.svg" alt="home" />
              <p>SEARCH</p>
            </a>
            <a href="#">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <p>WATCHLIST</p>
            </a>
            <a href="#">
              <img src="/images/original-icon.svg" alt="home" />
              <p>ORIGINALS</p>
            </a>
            <a href="#">
              <img src="/images/movie-icon.svg" alt="home" />
              <p>MOVIES</p>
            </a>
            <a href="#">
              <img src="/images/series-icon.svg" alt="home" />
              <p>SERIES</p>
            </a>
          </StyledLink>
          <ProfileCont>
            <ProfileImg src={photo} />
            <Dropdown onClick={handleLogout}>Log out</Dropdown>
          </ProfileCont>
        </>}

    </Nav>
  )
}

const Nav = styled.div`
height:67px;
position:fixed;
top:0;
right:0;
left:0;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
z-index:5;
`

const StyledLink = styled.div`
width:20px;
display:flex;
margin-right:6rem;
align-items:center;
flex-flow: row nowrap;
padding:0;
margin:0;
position:relative;
margin-right:auto;

a{
display:flex;
align-items:center;
padding: 0 11px;

img{
  width:21px;
}

p{
  letter-spacing:1.45px;
  font-size:13px;
  margin-left:5px;
  position:relative;

  &::before{
    content:"";
    height:1.7px;
    background-color:white;
    border-radius:3px;
    position:absolute;
    bottom:-6px;

    left:0;
    width:auto;
    right:0;
    opacity:0;
    visibility:hidden;
    transform:scaleX(0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

   }}

   &:hover{
    p::before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
}


@media (max-width:770px){
  display:none;
}
`

const LoginButton = styled.a`
padding:6px 16px;
font-size:16px;
color:white;
background:transparent;
border: 1px solid #f9f9f9;
border-radius:3px;
transition:0.2s ease-in-out;
letter-spacing:1.4px;
cursor:pointer;

&:hover{
  background-color:white;
  color:black;
}
`
const Dropdown = styled.span`
position:absolute;
top:60px;
right:10px;
font-sizing:14px;
border-radius:4px;
padding: 3px 5px;
width:70px;
display:none;
cursor:pointer;
box-shadow:0 0 4px black;
`
const ProfileCont = styled.div`
position:relative;
display:flex;
align-items:center;
justify-content:center;
width:50px;
height:50px;
transition:0.5s ease-in;

&:hover{
  ${Dropdown}{
    display:block;
  }
}
`
const ProfileImg = styled.img`
border-radius:50%;
height:45px;

}
`

export default Header