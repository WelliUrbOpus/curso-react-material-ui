import { Box, Typography, useTheme, IconButton, useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useDrawerContext } from '../contexts';
import { ReactNode } from 'react';

interface ILayoutBaseDePaginaProps {
  children: ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>

        {smDown && <IconButton onClick={toggleDrawerOpen}>
          <Menu />
        </IconButton>}

        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          display="flex"
          alignItems="center"
          height={theme.spacing(12)}          
        >
          {titulo}
        </Typography>

      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>

    </Box >
  );
}; 