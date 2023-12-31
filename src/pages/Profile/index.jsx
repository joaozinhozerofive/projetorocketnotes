import { Container, Form, Avatar} from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";




export function Profile(){
     return(
        <Container>
            <header>
                <Link to ="/">
                <FiArrowLeft/>
                </Link >
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/rodrigorgtic.png" alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <input 
                        id="avatar"
                        type="file"/>
                        <FiCamera/>
                    </label>
                </Avatar>
            <Input
            placeholder = "Nome"
            type ="text"
            icon={FiUser}
            />
            <Input
            placeholder = "E-mail"
            type ="text"
            icon={FiMail}
            />
            <Input
            placeholder = "Senha atual"
            type ="password"
            icon={FiLock}
            />
            <Input
            placeholder = "Nova atual"
            type ="password"
            icon={FiLock}
            />
            <Button title =" Salvar " />
            </Form>


        </Container>
     )
}