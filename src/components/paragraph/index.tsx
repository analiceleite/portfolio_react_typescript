import { P } from './styles';

export type Props = {
  children: React.ReactNode;
  tipo: 'principal' | 'secundario';
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => <P tipo = {tipo}> {children} </P>;

export default Paragraph

