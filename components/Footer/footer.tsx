import styled from '@mui/material/styles/styled';

const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 0',
  borderTop: `1px solid ${theme.palette.secondary.main}`
}));

const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.light
}));

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main
}));

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledSpan>Coded by</StyledSpan>
      <StyledLink href='https://github.com/Lorenzo-Pappalardo'>Lorenzo Pappalardo</StyledLink>
      <StyledLink href='https://github.com/Helias'>Stefano Borzì</StyledLink>
      <StyledLink href='https://github.com/Gigi-G'>Luigi Seminara</StyledLink>
    </StyledFooter>
  );
};

export default Footer;
