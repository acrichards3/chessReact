import { Policy, Gavel, Info } from '@mui/icons-material';

const PAGES = [
  {
    id: 0,
    page: 'Privacy Policy',
    icon: <Policy className="topbarLink" />,
    link: '/privacy-policy',
  },
  {
    id: 1,
    page: 'Terms & Conditions',
    icon: <Gavel className="topbarLink" />,
    link: '/terms-&-conditions',
  },
  {
    id: 2,
    page: 'About',
    icon: <Info className="topbarLink" />,
    link: '/about',
  },
];

export default PAGES;
