import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { Image, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";

interface accountsInput {
  image: string
  name: string
  username: string
  password: string
}

interface account {
  id: string
  name: string
  username: string
  password: string
  image: string | null
  delay: string
}

interface modalProps {
  setNewAccount: React.Dispatch<React.SetStateAction<account[]>>;
}


export function ModalNewAccount ({ setNewAccount }: modalProps) {

  const [image, setImage] = useState('');

  const { register, handleSubmit, reset } = useForm<accountsInput>();

  const NewAccount = async (data: accountsInput) => {
    await api.post("/data/saves/accounts", {
      image: data.image,
      name: data.name,
      username: data.username,
      password: data.password
    }, {
      headers: {
        'Authorization': sessionStorage.getItem('idUser')
      }
    })
    .then((res) => {
      const conta: account = {
        id: res.data.id,
        name: res.data.name,
        username: res.data.username,
        password: res.data.password,
        image: res.data.image == '' ? null : res.data.image,
        delay: '0.1s'
      }

      console.log(conta);
      

      setNewAccount((state) => [...state, conta]);
      
    })
    .catch(() => {
      alert("erro");
    })
  }

  function handleNewAccount (data: accountsInput) {

    console.log(data);
    

    NewAccount(data);

    reset()
  }

  return (
    <Dialog.Portal> 
      <Overlay />

      <Content>
        <CloseButton>
          <X size={25}/>
        </CloseButton>
        <Dialog.Title>Adicione uma nova conta</Dialog.Title>

        <form onSubmit={handleSubmit(handleNewAccount)}>
          
          <div>
            {image.length > 10 ? 
              <img src={image} alt="" />
             : 
              <Image size={70} weight="duotone" />
            }
            <input type="text" placeholder="URL da imagem"  {...register('image')} onChange={e => setImage(e.target.value)}/>
          </div>

          <input type="text" placeholder="Name" required {...register('name')}/>
          
          <input type="text" placeholder="Username" required {...register('username')}/>

          <input type="text" placeholder="Password" required {...register('password')}/>

          <button type="submit">Adicionar</button>

        </form>

      </Content>
    </Dialog.Portal>
  )
}