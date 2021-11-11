import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import skillsIllustration from 'assets/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <Image src={skillsIllustration} alt="I’m Ademola and I’m a Software developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            My name is Akindotuni Ademola Richard, a self-taught Full Stack JavaScript Developer. I love to get involved
            with problem solving by creating solutions to real-world problems using Javascript tools.
          </p>
          <Link href="#contact" passHref>
            <Button as="a">Get in Touch</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
