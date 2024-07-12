import styled from 'styled-components';

type BotaoProps = {
  principal: boolean;
  //? A interrogação torna esse atributo opcional
  fontSize?: string;
}
const Botao = styled.button<BotaoProps> `
background-color: ${props => props.principal ? 'green' : 'blue'};
//? Caso não haja definição do font-size o 16px é settado como padrão, sendo chamado callback = Quando algo não é atendido é dado outra instrução para o computador
font-size: ${(props) => props.fontSize || '16px'}
`
const BotaoPerigo = styled(Botao) `
background-color: red;
color: white;

span {
  text-decoration: line-through;
}
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar!
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar!
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui!</span>
      </BotaoPerigo>
    </>
  )
}


export default Teste
