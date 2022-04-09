import type { NextPage } from 'next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { CardItem } from '../components/Card';
import bookfullstack from '../public/images/homepagepng.png';
import cryptoApp from '../public/images/cryptoapp.png';
import Section from '../components/Section';
const Projects: NextPage = () => {
  return (
    <div className="py-4 px-4 mt-10 h-screen ">
      <Container maxW="4xl">
        <Heading as="h1">Projekt</Heading>
        <div>
          <SimpleGrid className="mt-10" columns={[1, 1, 2]} gap={6}>
            <Section>
              <CardItem
                id="bookproject"
                title="Fullstack Book App"
                thumbnail={bookfullstack}
              >
                En RESTFUL-Api applikation med CRUD operationer gjord för att
                förbättra min egna kunskap inom React.js och C#.
              </CardItem>
            </Section>
            <Section>
              <CardItem id="cryptoapp" title="Cryptoapp" thumbnail={cryptoApp}>
                En enkel applikation där man kan söka på samtliga cryptovalutor,
                skapad med Next.js då jag var nyfiken på skillnaderna mellan
                React.js och Next.js.
              </CardItem>
            </Section>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
