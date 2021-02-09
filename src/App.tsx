import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const Title = styled(Typography)`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin-right: 24px;
`;

const Main = styled.main`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const App: FunctionComponent = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <MenuButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">App</Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Main>Content</Main>
    </div>
  );
};

export default App;
