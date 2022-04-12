import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MetaProps, TitleProps, WorkImageProps } from '../../constants';
import Paragraph from '../Paragraph';

export const Title = ({ children }: TitleProps) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>
        <Paragraph className=" w-auto  inline-block y hover:border-b ">
          projects
        </Paragraph>
      </Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading
      className="opacity-80"
      display="inline-block"
      as="h3"
      fontSize={20}
      mb={4}
    >
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: MetaProps) => (
  <Badge colorScheme="whatsapp" mr={2}>
    {children}
  </Badge>
);
