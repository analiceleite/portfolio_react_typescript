import Avatar from "../../components/avatar"
import Paragraph from "../../components/paragraph";
import { Title } from "../../components/title/styles";

import { Description, ButtonTheme, SidebarContainer } from "./styles";

type Props = {
  changeTheme: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Analice Leite</Title>
      <Paragraph tipo='secundario' fontSize={16}>analiceleite</Paragraph>
      <Description tipo="principal" fontSize={12}>Desenvolvedora front-end</Description>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar;

