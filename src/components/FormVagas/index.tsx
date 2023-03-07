import { FormEvent, useState } from 'react'

import { StyledForm, StyledButton, Styledinput } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <>
      <StyledForm onSubmit={aoEnviarForm}>
        <Styledinput
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <StyledButton type="submit">Pesquisar</StyledButton>
      </StyledForm>
    </>
  )
}
export default FormVagas
