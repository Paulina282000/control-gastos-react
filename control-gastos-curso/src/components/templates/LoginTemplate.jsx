import styled from "styled-components"
import { BtnSave, v,useAuthStore } from "../../index"

export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return (
    <Container imagenfondo={v.imagenfondo}>
      <div className="contendCard">
        <span className="version">version 1.0</span>
        <div className="contentImg">
          <img src = {v.logo}/>
        </div>
        <Titulo>MoneyMate</Titulo>
        <p className="frase">Toma el control de tus 💵 gastos e 💰 ingresos</p>
        <ContainerBtn>
          <BtnSave titulo="Iniciar con google" icono={<v.iconogoogle />}
          bgcolor={v.colorSecundario} funcion={signInWithGoogle}/>
        </ContainerBtn>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-image: url(${(props) => props.imagenfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;      /* Centra verticalmente */
  justify-content: center; /* Centra horizontalmente */
  color: rgba(255, 255, 255, 0.87);

  .contendCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0,0,0,0.35);
    padding: 20px;          /* Espacio interno para que no quede pegado a los bordes */
    align-items: center;    /* Centra los elementos hijos en el eje horizontal */
    text-align: center;     /* Centra el texto dentro de la card */
  }

  .version {
    color: #727272;
    align-self: flex-start; /* Si quieres que la versión quede a la izquierda */
    text-align: start;
  }
.contentImg{
  img{
    max-width: 60%;
    animation: flotar 1.6s ease-in-out infinite alternate;
  }
.frase{
  color: #909090;
  font-size: 1.5rem;
}
}
@keyframes flotar {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
`;
const Titulo = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
