import { useTheme } from 'providers/ThemeProvider';
import { Card, TitleWrap } from 'components/ui/Card';
import Container from 'components/ui/Container';
import Fork from 'components/ui/Icons/Fork';
import Star from 'components/ui/Icons/Star';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import projects from './projects.json';

const Projects = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map((project) => {
          if (!project) return null;
          return (
            <Item key={project.id} as="a" href={project.link} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Card theme={theme}>
                <Content>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <img src={project.imageUrl} alt="Picture of the author" />
                </Content>
                <TitleWrap>
                  <Stats theme={theme} stars>
                    <div>
                      <Star color={theme === 'light' ? '#000000' : '#fff'} />
                    </div>
                    <div>
                      <Fork color={theme === 'light' ? '#000' : '#fff'} />
                    </div>
                  </Stats>
                  <Stats theme={theme}>
                    <Languages theme={theme}>
                      {project.languages.map((language, index) => (
                        <span key={index}>{language}</span>
                      ))}
                    </Languages>
                  </Stats>
                  {/* {project.showViewLive ? (
                    <ViewLive as="a" href={project.link} target="_blank" rel="noopener noreferrer">
                      {<span key={project.id}>view live</span>}
                    </ViewLive>
                  ) : null} */}
                </TitleWrap>
              </Card>
            </Item>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
