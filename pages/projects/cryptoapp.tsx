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
    <ArticleLayout title="Cryptoapp">
      <Title>Cryptoapp</Title>
      <P>
        En enkel API cryptoapp som skapades för att vidaretuveckla min kunskap
        inom Next.js, idén är inte ny men den gav mig bra kunskap om hur Next.js
        fungerar.
      </P>

      <UnorderedList className=" font-montserrat  opacity-90" my={4}>
        <ListItem>
          Information om alla kryptovalutor samlade på ett ställe
        </ListItem>
        <ListItem>Sök och filtrera mellan olika kryptovalutor</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem mb={4}>
          <Badge size="sm" className="mr-4">
            Tech Stack
          </Badge>
          <span>Next.js, Typescript, Tailwind, SCSS </span>
        </ListItem>

        <ListItem>
          <Badge size="sm" className="mr-4">
            Source
          </Badge>
          <Link href="https://github.com/michaelhaggren/cryptoApp">
            github.com/michaelhaggren/cryptoApp
            <ExternalLinkIcon mx="6px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={1} gap={4}>
        <WorkImage src="/images/cryptoapp.png" alt="homepage" />
        <WorkImage src="/images/searchcurrency.png" alt="search-currencies" />
      </SimpleGrid>
    </ArticleLayout>
  </Container>
);

export default Project;
