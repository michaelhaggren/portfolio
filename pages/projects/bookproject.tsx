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
const Project = () => (
  <Container h="full" py={8} px={3}>
    <ArticleLayout title="Fullstack Bookapp">
      <Title>
        Fullstack Bookapp <Badge ml={3}>2021</Badge>
      </Title>
      <P>
        Ett av mina första projekt där mitt tålamod verkligen fick testas och
        många hårstrån fick sätta livet till, vilket lärde mig otroligt mycket.
        En fullstack RESTFUL Api som låter användare lägga till sina
        favoritböcker i en lista och även ge betyg på vad de tyckte om just den
        boken. <br />
        <br /> Det svåraste med detta projekt var att lira mig att hantera{' '}
        <span className="font-bold tracking-wider">state management</span> med
        redux och att förstå hur detta fungerar rent kodmässigt. Samt att förstå
        hur modals fungerar i react var också en viss utmaning att klura ut,
        dock var detta rätt lätt att greppa tillslut.
      </P>

      <UnorderedList className="opacity-90" my={4}>
        <ListItem>CRUD Operationer för böcker</ListItem>
        <ListItem>Modals för att lägga till & redigera böcker</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem mb={4}>
          <Meta>Stack</Meta>
          <span>
            C#, React.js, MSSQL, Redux, Tailwind, SCSS, Boostrap, Figma{' '}
          </span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/michaelhaggren/fullstack-bookApp">
            github.com/michaelhaggren/fullstack-bookApp
            <ExternalLinkIcon mx="6px" color="cream" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={1} gap={4}>
        <WorkImage src="/images/Homepagepng.png" alt="homepage" />
        <WorkImage src="/images/bookfullstack.png" alt="add-book-modal" />
        <WorkImage src="/images/addbookmodal.png" alt="add-book-modal" />
      </SimpleGrid>
    </ArticleLayout>
  </Container>
);

export default Project;
