import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack spacing={8} boxShadow={'2xl'} padding={16} mt={0}>
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text={'Dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url={'createmovie'}
        Icon={RiAddCircleFill}
        text={'Upload Movie'}
        active={location.pathname === '/admin/createmovie'}
      />
      <LinkButton
        url={'movies'}
        Icon={RiEyeFill}
        text={'Movies'}
        active={location.pathname === '/admin/movies'}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser3Fill}
        text={'Users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, text, active, Icon }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        colorScheme={active ? 'purple' : ''}
        fontSize={'larger'}
        variant={'ghost'}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}
