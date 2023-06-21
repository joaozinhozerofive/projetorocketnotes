import { Container, Profile, Logout} from "./style.js";


import  { RiShutDownLine } from 'react-icons/ri'


export  default function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/rodrigorgtic.png" 
                alt="foto do usuário"/>


                <div>
                    <span>Bem vindo</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>
                
            </Profile>

            <Logout>
                    <RiShutDownLine/>
            </Logout>

        </Container>



    )
}