import styled from "styled-components"
import { BtnSave, v } from "../../index"

export function LoginTemplate() {
  return (
    <Container>
      <div>
        <span>version 1.0</span>
        <div>
          <img />
        </div>
        <Titulo>Cerdyn</Titulo>
        <p>
          Toma el control de tus 💵 gastos e 💰 ingresos
        </p>
        <ContainerBtn>
          <BtnSave titulo="Iniciar con google" icono={<v.iconogoogle />} />
        </ContainerBtn>
      </div>
    </Container>
  )
}

const Container = styled.div`
  /* Your styles here */
`

const Titulo = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`
