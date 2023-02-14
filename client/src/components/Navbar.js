import { Tabs, TabList, TabPanels, Tab, TabPanel, Image } from '@chakra-ui/react';

const Navbar = () => {
  return (
      <Tabs isFitted variant='enclosed unstyled' size='lg'>
          <Image boxSize='100px' fit='cover' src='/logo.svg' />
          <TabList>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Videos</Tab>
              <Tab _selected={{ color: 'white', bg: 'green.400' }}>
                  Articles
              </Tab>
              <Tab _selected={{ color: 'white', bg: 'yellow.300' }}>Tools</Tab>
              <Tab _selected={{ color: 'white', bg: 'red.400' }}>Events</Tab>
              <Tab _selected={{ color: 'white', bg: 'pink.400' }}>Humour</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                  <p>one!</p>
              </TabPanel>
              <TabPanel>
                  <p>two!</p>
              </TabPanel>
              <TabPanel>
                  <p>three!</p>
              </TabPanel>
              <TabPanel>
                  <p>four!</p>
              </TabPanel>
              <TabPanel>
                  <p>five!</p>
              </TabPanel>
          </TabPanels>
      </Tabs>
  );
}

export default Navbar;