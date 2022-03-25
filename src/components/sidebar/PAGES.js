import {
  Dashboard,
  LocalLibrary,
  NetworkWifi,
  QuestionMark,
  School,
  SignalWifi0Bar,
  SignalWifi2Bar,
} from '@mui/icons-material';

const PAGES = [
  {
    category: 'Information',
    above: true,
  },
  {
    id: 0,
    page: 'Dashboard',
    icon: <Dashboard className="sidebarIcon" />,
    above: false,
    link: '/dashboard',
  },
  {
    category: 'For Beginners',
    above: true,
  },
  {
    id: 1,
    page: 'Principles',
    icon: <LocalLibrary className="sidebarIcon" />,
    above: false,
    link: '/principles',
  },
  {
    id: 2,
    page: 'Rules of Chess',
    icon: <School className="sidebarIcon" />,
    above: false,
    link: '/rules',
  },
  {
    category: 'Openings',
    above: true,
  },
  {
    id: 3,
    page: 'Beginner',
    icon: <SignalWifi0Bar className="sidebarIcon" />,
    above: false,
    link: '/beginner-openings',
  },
  {
    id: 4,
    page: 'Intermediate',
    icon: <SignalWifi2Bar className="sidebarIcon" />,
    above: false,
    link: '/intermediate-openings',
  },
  {
    id: 5,
    page: 'Advanced',
    icon: <NetworkWifi className="sidebarIcon" />,
    above: false,
    link: '/advanced-openings',
  },
  {
    category: 'Extras',
    above: true,
  },
  {
    id: 6,
    page: 'FAQ',
    icon: <QuestionMark className="sidebarIcon" />,
    above: false,
    link: '/faq',
  },
];

export default PAGES;
