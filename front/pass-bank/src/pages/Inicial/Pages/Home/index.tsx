import { Keyhole, Plus, SignOut, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { ButtonModal, ContentContainer, FilterContainer, HeaderContainer, UserContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { AccountCards } from "./components/accountCards";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalNewAccount } from "../../../../components/modal";
import { api } from "../../../../lib/axios";

interface logout {
  onLogout: (id: string) => void
}

interface userType {
  id: string
  username: string
}

interface accountType {
  id: string
  name: string
  username: string
  password: string
  image: string
  delay: string
}

export function Home( { onLogout }: logout ) {

  const redirect = useNavigate();

  const [usuario] = useState<userType>({
    id: sessionStorage.getItem('idUser') || '',
    username: sessionStorage.getItem('username') || ''
  })

  const [ account, setAccount ] = useState<accountType[]>([]);

  function handleLogout() {
    sessionStorage.clear();
    redirect('/');
    onLogout('');
  }


  useEffect(() => {
    
    async function getAccounts() {
      const listAccounts: accountType[] = [];
      await api.get("/accounts", {
        headers: {
          'Authorization': sessionStorage.getItem('idUser')
        }}).then((res) => {

          let delayValue = 0;

          res.data.forEach((value: accountType) => {

            delayValue += 0.1;

            const conta: accountType = {
              id: value.id,
              name: value.name,
              username: value.username,
              password: value.password,
              image: value.image,
              delay: delayValue + 's'
            }

            listAccounts.push(conta)
          })
        });

        console.log(listAccounts);
        
        // setAccount(listAccounts)
        setTimeout(() => {setAccount(listAccounts)}, 2000)
      }

      getAccounts()
    
  }, [])
  
  

  return (
    <>
      <HeaderContainer>
        <Keyhole size={50} weight="duotone"/>

        <FilterContainer>
          <a href="">ALl</a>
          <a href="">Folders</a>
          <form action="">
            <input type="text" />
            <button type="submit">P</button>
          </form>
        </FilterContainer>

        <UserContainer>
          <div>
            <UserCircle size={30} weight="duotone" />
            {usuario.username}
          </div>
          <SignOut onClick={handleLogout} size={20} color="#ef4444" weight="bold" className="buttonLogout"/>
        </UserContainer>

      </HeaderContainer>
      
      <ContentContainer>

        {
          account.map((conta) => {   
            return (
                <AccountCards 
                  key={conta.id}
                  name={conta.name}
                  username={conta.username} 
                  password={conta.password}
                  img={conta.image}
                  delay={conta.delay}/>
            )
          })
        }
          
      </ContentContainer>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonModal>
            <Plus size={25} weight="bold" />
          </ButtonModal>
        </Dialog.Trigger>

        <ModalNewAccount setNewAccount={setAccount} />
      </Dialog.Root>
    </>
  )
}