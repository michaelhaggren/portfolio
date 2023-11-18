import NextLink from 'next/link';
import {
  Divider,
  Heading,
  Box,
  Button,
  Badge,
  SimpleGrid,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { FaRunning } from 'react-icons/fa';
import { HiChartBar, HiOutlineCode } from 'react-icons/hi';
import { BsMusicPlayer } from 'react-icons/bs';
import { GiFoodTruck } from 'react-icons/gi';
import ProfilBild from '../public/images/CVBIld.png';
import Head from 'next/head';
const Home = () => (
  <Box>
    <Head>
      <title> Michael Haggren - Portfolio</title>
      <meta name='twitter:title' />
      <meta property='og:title' />
    </Head>

    <div className='grid place-items-center grid-cols-1'>
      <div className='w-2/4 md:w-1/4'>
        <Section delay='0.2'>
          <Box borderRadius='xl' mb={6} mt={10} p={3} textAlign='center'>
            Backend utvecklare på
            <Box
              className='inline'
              color={useColorModeValue('#ffb612', '#ffb612')}
            >
              <span className='tracking-widest font-semibold'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.avanade.com/se-no'
                  className='hover:border-b-2 hover:border-orange-orangePrimary '
                >
                  {' '}
                  Avanade{' '}
                </a>
              </span>
            </Box>
            med rötterna från{' '}
            <span className='tracking-widest   font-semibold'>
              Falkenberg.
            </span>{' '}
            För närvarande bosatt i{' '}
            <span className='tracking-widest   font-semibold'> Stockholm.</span>
          </Box>

          <Box>
            <Box className='flex sm:flex-row flex-col '>
              <Box
                color={useColorModeValue('#141E27', '#ffb612')}
                className='flex flex-col md:px-0 px-2'
              >
                <Heading
                  className=' tracking-widest flex'
                  as='h1'
                  variant='page-title'
                >
                  michael haggren
                </Heading>
                <p className=' opacity-40 tracking-widest'>systemutvecklare</p>
              </Box>
              <Box>
                <Avatar
                  size='2xl'
                  name='Michael Haggren'
                  src='/images/profil.png'
                />{' '}
              </Box>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign='center'
            ></Box>
          </Box>
        </Section>
        <Section delay='0.4'>
          <Heading as='h3' mt={10} fontSize='1em' className=' opacity-90'>
            Om mig
          </Heading>

          <Box alignItems='center' my={2}>
            <Paragraph>
              Teknikintresserad hallänning som gillar att löpa och vandra i
              Nackareservatet, följa aktiemarknaden och lägger även skrämmande
              mycket tid på att hitta ny musik på Spotify/Youtube.
            </Paragraph>
          </Box>
          <Box alignItems='center' my={10}>
            <Heading
              as='h3'
              fontSize='1em'
              fontWeight='bold '
              className='opacity-90'
            >
              Main-stack
            </Heading>
            <Paragraph>
              <SimpleGrid
                columns={[1, 2]}
                className='flex mt-2 justify-around gap-4 my-4  items-center'
              >
                <Badge
                  border='1px'
                  py='2'
                  px='1'
                  className='border text-center w-auto'
                  colorScheme='grey'
                >
                  .NET/C#
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  MSSQL
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  azure
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  Git
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  Bicep
                </Badge>

                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  Azure devops
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  YAML
                </Badge>
              </SimpleGrid>
            </Paragraph>
            <Heading
              as='h3'
              fontSize='1em'
              marginTop={4}
              fontWeight='bold '
              className='opacity-90'
            >
              Sub-stack
            </Heading>
            <Paragraph>
              <SimpleGrid
                gap={3}
                columns={[1, 2]}
                className='flex  mt-2 justify-around gap-4  items-center'
              >
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  TypeScript
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  React/Next
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  tailwind
                </Badge>
                <Badge
                  py='2'
                  px='1'
                  border='1px'
                  className='border text-center'
                  colorScheme='grey'
                >
                  JAVASCRIPT
                </Badge>
              </SimpleGrid>
            </Paragraph>
          </Box>
        </Section>
        <Divider />
        <Section delay='0.6'>
          <Box alignItems='center' my={4}>
            <NextLink href='/projects' scroll={false} passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                variant='outline'
                className=' text-current  bg-orange-orangePrimary'
              >
                Projekt
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Divider color='white' mb='6' />
        <Section delay='0.8'>
          <Heading as='h4' fontSize='1.2em' mb='4' className=' opacity-90'>
            Intressen
          </Heading>
          <div className='flex gap-2 justify-between items-start md:flex-wrap flex-none md:flex-row flex-col'>
            <Paragraph>
              Löpning{' '}
              <FaRunning className='inline-block text-orange-orangePrimary' />
            </Paragraph>
            <Paragraph>
              Aktier{' '}
              <HiChartBar className='inline-block text-orange-orangePrimary' />
            </Paragraph>
            <Paragraph>
              Mat{' '}
              <GiFoodTruck className='inline-block text-orange-orangePrimary' />
            </Paragraph>
            <Paragraph>
              Musik{' '}
              <BsMusicPlayer className='inline-block text-orange-orangePrimary' />
            </Paragraph>

            <Paragraph>
              Programmering{' '}
              <HiOutlineCode className='inline-block text-orange-orangePrimary' />
            </Paragraph>
          </div>
        </Section>
      </div>
    </div>
  </Box>
);

export default Home;
