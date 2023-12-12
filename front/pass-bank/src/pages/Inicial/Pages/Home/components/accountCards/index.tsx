import { CardContainer } from "./styles";

interface CardProps {
  name: string
  username: string
  password: string
  img: string
  delay: string
}

export function AccountCards( { name, username, password, img, delay }:CardProps ) {

  return (
    <CardContainer className="boxes" delay={delay}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content-acc">
        <header>{name}</header>
        <div className="account">
          <p>{username}</p>
          <p>{password}</p>
        </div>
      </div>
    </CardContainer>
  )
}