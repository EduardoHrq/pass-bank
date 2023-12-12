import { NavLink } from "react-router-dom";
import { IconStyled, BoxContainer } from "../../../style/userActionsStyles";
import { useForm } from "react-hook-form";
import { api } from "../../../../lib/axios";
import { Warning } from "phosphor-react";
import { BoxAlert } from "./styles";
import { useState } from "react";

interface loginData {
  username: string
  password: string
}

interface login {
  onLogin: (user: string) => void
}

export function Login({ onLogin }: login) {

  const {register, handleSubmit, reset} = useForm<loginData>();
  const [alert, setAlert] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const login = async (data: loginData) => {

    setIsLoading(true)

    await api.post("/logar", {
      username: data.username,
      password: data.password
    })
    .then(res => {
      console.log(res.data);
      sessionStorage.setItem("idUser", res.data.id)
      sessionStorage.setItem("username", res.data.username)

      onLogin(res.data.id)
    })
    .catch(() => {
      console.log("Usuario ou senha incorretos");
      setAlert('Usuario ou senha incorretos!')
      setIsLoading(false)
    })  
  }

  function handleLogin(data: loginData) {
    // console.log("LOGIN");
    // console.log(data);
    login(data);

    reset()
  }

  return(
    <>
      <IconStyled size={90}/>
      <BoxContainer>
        
        <h1>Login</h1>

        <form action="" onSubmit={ handleSubmit(handleLogin) }>
          {alert ? 
          <BoxAlert>
            <Warning size={20} weight="duotone"/>
            {alert}
          </BoxAlert>
          :
          null }

          <input type="text" placeholder="Username" required {...register('username')}/>

          <input type="password" placeholder="Password" required {...register('password')}/>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </button>

        </form>

        <NavLink to={"/cadastro"}>Cadastro</NavLink>
      </BoxContainer>
    </>
  )
}