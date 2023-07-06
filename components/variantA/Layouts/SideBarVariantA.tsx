/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from '@mantine/core';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SideBarVariantA(props: any) {
  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <Box
        sx={(theme: any) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#d4e6e8',
          color: theme.colorScheme === 'dark' ? 'white' : 'black',
        })}
        p={0}
        id="default-sidebar"
        className={`fixed left-0 z-40 ${
          // eslint-disable-next-line no-constant-condition
          true ? '' : '-ml-64 md:-ml-80'
        }  md: w-64 md:w-80 h-full duration-300 `}
        aria-label="Sidebar"
      >
        <div className={`${sideBar ? 'sm:ml-64 md:ml-80' : ''} pt-[0.65rem] duration-500`}>
          <div
            className="md:hidden fixed bottom-10 right-10 rounded-full z-50"
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            {!sideBar ? <GiHamburgerMenu fontSize="small" /> : <GrClose fontSize="small" />}
          </div>
          <div className="mt-20 min-h-screen mx-auto">{props.children}</div>
        </div>
      </Box>
    </>
  );
}
