import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import NextLink from 'next/link';
import Image from 'next/image';
import { CardItemProps, CardProps } from '../constants';

export const Card = ({ children, title, href, thumbnail }: CardProps) => {
  return (
    <div>
      {' '}
      <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
          />
          <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Box>
    </div>
  );
};

export const CardItem = ({ children, title, id, thumbnail }: CardItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const CardItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
