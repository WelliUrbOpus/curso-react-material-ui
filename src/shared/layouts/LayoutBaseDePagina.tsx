import { Box, Typography, useTheme, IconButton, useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center">
      
        {smDown && <IconButton onClick={toggleDrawerOpen}>
          <Menu />
        </IconButton>}

        <Typography display="flex" alignItems="center" variant="h5" height={theme.spacing(12)} color="initial">
          {titulo}
        </Typography>

      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>

    </Box >
  );
}; 