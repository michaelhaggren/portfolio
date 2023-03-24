import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { SectionProps } from '../constants';

//* Component for reusable framer motion transition for sections that i want a nice easein transition when that content is presented
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = '0' }: SectionProps) => (
  <StyledDiv
    initial={{ x: 60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: '0.6', delay }}
    mb={10}
  >
    {children}
  </StyledDiv>
);

export default Section;
