import {
  Dashboard,
  LocalLibrary,
  NetworkWifi,
  QueryStats,
  QuestionMark,
  School,
  SignalWifi0Bar,
  SignalWifi2Bar,
  TrendingUp,
  YouTube,
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
    id: 1,
    page: 'In-Depth Stats',
    icon: <QueryStats className="sidebarIcon" />,
    above: false,
    link: '/stats',
  },
  {
    id: 2,
    page: 'Level & Rank',
    icon: <TrendingUp className="sidebarIcon" />,
    above: false,
    link: '/rank',
  },
  {
    category: 'For Beginners',
    above: true,
  },
  {
    id: 3,
    page: 'Principles',
    icon: <LocalLibrary className="sidebarIcon" />,
    above: false,
    link: '/principles',
  },
  {
    id: 4,
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
    id: 5,
    page: 'Beginner',
    icon: <SignalWifi0Bar className="sidebarIcon" />,
    above: false,
    link: '/beginner-openings',
  },
  {
    id: 6,
    page: 'Intermediate',
    icon: <SignalWifi2Bar className="sidebarIcon" />,
    above: false,
    link: '/intermediate-openings',
  },
  {
    id: 7,
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
    id: 8,
    page: 'Videos',
    icon: <YouTube className="sidebarIcon" />,
    above: false,
    link: '/videos',
  },
  {
    id: 9,
    page: 'FAQ',
    icon: <QuestionMark className="sidebarIcon" />,
    above: false,
    link: '/faq',
  },
];

export default PAGES;
