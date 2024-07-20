import { P } from './styles';

export type Props = {
  children: React.ReactNode;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => <P fontSize={fontSize} tipo = {tipo}> {children} </P>;

export default Paragraph

