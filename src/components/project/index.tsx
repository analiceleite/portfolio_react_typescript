import Paragraph from "../paragraph";
import Title from "../title";
import {Card, LinkButton} from './styles';

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundario"> Lista de tarefas feita com VueJS </Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
