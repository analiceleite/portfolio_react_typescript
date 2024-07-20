import Avatar from "../../components/avatar"
import Paragraph from "../../components/paragraph";
import { Title } from "../../components/title/styles";

import { Description, ButtonTheme, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Analice Leite</Title>
      <Paragraph tipo='secundario' fontSize={16}>analiceleite</Paragraph>
      <Description tipo="principal" fontSize={12}>Desenvolvedora front-end</Description>
      <ButtonTheme>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar;

