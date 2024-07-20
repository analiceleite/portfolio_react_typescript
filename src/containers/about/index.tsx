import {Title} from "../../components/title/styles"
import Paragraph from "../../components/paragraph"
import { GithubSecao } from "./style";

const About = () => (
  <section>
    <Title fontSize={16}> Sobre mim </Title>
    <Paragraph tipo = 'secundario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo quaerat sit similique saepe a earum quasi ipsam qui error cum pariatur tempore, magni quos laborum esse animi voluptates obcaecati.</Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=analiceleite&show_icons=true&theme=algolia" alt= "Data"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=analiceleite&layout=compact&langs_count=7&theme=algolia" alt= "Data"/>
    </GithubSecao>
  </section>
)

export default About;
