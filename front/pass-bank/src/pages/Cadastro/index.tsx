import { NavLink, useNavigate } from "react-router-dom";
import { BoxContainer, IconStyled } from "../style/userActionsStyles";
import { ArrowLeft, CheckCircle, Warning } from "phosphor-react";
import { BoxAlertSucess, BoxAlertWarn, HeaderCadastro } from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useState } from "react";

interface UserFormInput {
  name: string
  username: string
  password: string
}

interface alertProps {
  type: 'warn' | 'sucess' | ''
  message: string
}

export function Cadastro() {

  const { register, handleSubmit, reset } = useForm<UserFormInput>();

  const [ alert, setAlert ] = useState<alertProps>({
    type: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false)

  const redirect = useNavigate();

  const saveNewUser = async (data: UserFormInput) => {
    setIsLoading(true)
    await api.post("/user/saves", {
      name: data.name,
      username: data.username,
      password: data.password
    })
    .then(() => {
      setAlert({
        type: "sucess",
        message: "Cadastro realizado com sucesso!"
      });
      setTimeout(() => {
        setAlert({type: '', message: ''});
        redirect('/');
      }, 3000)
    })
    .catch(() => {
      setAlert({
        type: 'warn',
        message: 'Usuario já existe!'
      })
    })
  }

  async function handleCreateUser(data: UserFormInput) {

    console.log(data);

    reset()

    saveNewUser(data);

  }

  return (
    <>
      {alert.type == 'sucess' ? 
        <BoxAlertSucess>
          <CheckCircle weight="duotone" size={25}/>
          {alert.message}
        </BoxAlertSucess>
      : null}

      <IconStyled size={90}/>
      <BoxContainer>
        <HeaderCadastro>
          <h1>Cadastro</h1>
          <NavLink to={"/"}>
            <ArrowLeft size={24}/>
          </NavLink>
        </HeaderCadastro>

        <form action="" onSubmit={handleSubmit(handleCreateUser)}>

          {alert.type == 'warn' ?
          <BoxAlertWarn>
            <Warning size={25} weight="duotone"/>
            {alert.message}
          </BoxAlertWarn>
          : null}

          <input type="text" placeholder="Name" required
            {...register('name')}
          />

          <input type="text" placeholder="Username" required
            {...register('username')}
          />

          <input type="text" placeholder="Password" required
            {...register('password')}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Cadastrando..." : 'Cadastrar'}
          </button>

        </form>

      </BoxContainer>
    </>
  )
}