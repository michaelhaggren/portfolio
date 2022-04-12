import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image,
} from '@chakra-ui/react';
import ArticleLayout from '../../components/ArticleLayout';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/ProjectItem/index';
import P from '../../components/Paragraph';
import Section from '../../components/Section';
const Project = () => (
  <Container h='full' py={8} px={3}>
    <ArticleLayout title='Fullstack Bookapp'>
      <Section delay='0.2'>
        <Title>Fullstack Bookapp</Title>
        <P>
          En fullstack RESTFUL Api som låter användare lägga till sina
          favoritböcker i en lista och även ge betyg på vad de tyckte om just
          den boken. <br />
          <br /> Det svåraste med detta projekt var att lira mig att hantera{' '}
          <span className='font-bold tracking-wider'>state management</span> med
          redux och att förstå hur detta fungerar rent kodmässigt. Det var även
          lite klurigt i början med att förstå hur modals fungerar i react dock
          var detta rätt lätt att greppa tillslut.
        </P>
      </Section>

      <Section delay='0.3'>
        <UnorderedList className='opacity-90' my={4}>
          <ListItem>CRUD Operationer för böcker</ListItem>
          <ListItem>Modals för att lägga till & redigera böcker</ListItem>
        </UnorderedList>
      </Section>
      <Section delay='0.4'>
        <List ml={4} my={4}>
          <ListItem mb={4}>
            <Badge size='sm' className='mr-4'>
              Tech Stack
            </Badge>
            <span>C#, React.js, MSSQL, Redux, Tailwind, SCSS, Figma </span>
          </ListItem>

          <ListItem>
            <Badge size='sm' className='mr-4'>
              Source
            </Badge>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://github.com/michaelhaggren/fullstack-bookApp'
            >
              github.com/michaelhaggren/fullstack-bookApp
              <ExternalLinkIcon mx='6px' color='cream' />
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={1} gap={4}>
          <WorkImage src='/images/homepage.png' alt='homepage' />
          <WorkImage src='/images/bookfullstack.png' alt='add-book-modal' />
          <WorkImage src='/images/addbookmodal.png' alt='add-book-modal' />
        </SimpleGrid>
      </Section>
    </ArticleLayout>
  </Container>
);

export default Project;
