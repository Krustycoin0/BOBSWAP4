import {
  AppBar,
  AppBarProps,
  Button,
  ButtonProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  MenuItem as MUIMenuItem,
  MenuItemProps,
  MenuList,
  MenuListProps,
  Paper,
  PaperProps,
  Popper,
  PopperProps,
  Tab,
  TabProps,
  Tabs,
  TabsProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// TODO: Use Colors from Theme instead of hard-coded ones

export const MenuBrand = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: `auto ${theme.spacing(4)} auto ${theme.spacing(2)}`,
  textDecoration: 'none',
  position: 'absolute',
  '&:hover': {
    color: theme.palette.accent1.main,
  },
}));

export const NavbarExternalBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  backgroundColor: '#000000',
  opacity: 0.25,
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'transparent',
  },
}));

export const NavbarManagement = styled('div')({
  justifySelf: 'self-end',
});

export const NavBar = styled(AppBar)(({ theme }) => ({
  marginTop: theme.spacing(4),
  background: 'transparent',
  boxShadow: 'none',
}));

export const NavbarContainer = styled('div')(({ theme }) => ({
  // [`@media (max-height: ${80 + 32 + 680}px)`]: {
  //   position: 'absolute',
  //   width: '100%',
  //   zIndex: 1,
  //   backdropFilter: 'blur(12px)',
  // },
  position: 'initial',
  background: 'transparent',
  height: '80px',
  padding: theme.spacing(6),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export interface NavbarDropDownButtonProps
  extends Omit<ButtonProps, 'mainCol'> {
  mainCol?: string;
}

export const NavbarDropdownButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'mainCol',
})<NavbarDropDownButtonProps>(({ theme, mainCol }) => ({
  justifyContent: 'center',
  color: !!mainCol ? mainCol : theme.palette.primary.main,
  width: '48px',
  borderRadius: '50%',
  marginLeft: theme.spacing(2),
  minWidth: 'unset',
  height: '48px',
}));

export interface NavbarPopperProps extends Omit<PopperProps, 'stickyLabel'> {}

export const NavbarPopper = styled(Popper, {
  shouldForwardProp: (prop) => prop !== 'stickyLabel',
})<NavbarPopperProps>(({ theme }) => ({
  zIndex: 2,
  bottom: '0 !important',
  left: '0 !important',
  top: 'unset !important',
  right: '0 !important',
  [theme.breakpoints.up('sm')]: {
    bottom: 'unset !important',
    left: 'unset !important',
    top: 'unset !important',
    right: '1.5rem !important',
    transform: 'unset !important',
  },
}));
export interface NavbarMenuListProps
  extends Omit<MenuListProps, 'stickyLabel'> {
  component?: string; //TODO: valid typescript HTML elements as string
  isScrollable?: boolean;
}

export const NavbarMenuList = styled(MenuList, {
  shouldForwardProp: (prop) => prop !== 'isScrollable',
})<NavbarMenuListProps>(({}) => ({
  padding: 0,
}));

export const NavbarLinkText = styled('span')({});

export const MenuHeader = styled('div')(({}) => ({
  padding: '0',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  '& svg': {
    position: 'absolute',
  },
}));

export const NavbarTabs = styled(Tabs, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})<TabsProps & { isDarkMode: boolean }>(({ theme }) => ({
  // visibility: 'hidden',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.alphaLight100.main
        : '#0000000A',
    margin: 'auto',
    // height: 56,
    borderRadius: 24,
    padding: 1,
    display: 'flex',
    // visibility: 'visible',
    width: 390,
    alignItems: 'center',
  },
  div: {
    height: '56px',
  },
  '.MuiTabs-flexContainer': {
    alignItems: 'center',
  },
  '.MuiTabs-indicator': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '48px',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.alphaLight300.main
        : theme.palette.white.main,
    zIndex: '-1',
    marginBottom: theme.spacing(1),
    borderRadius: '24px',
  },
  '> .MuiTabs-root': {
    minHeight: 'unset !important',
  },
  '.MuiTabs-root': {
    minHeight: 'unset !important',
  },
}));

export const NavbarTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})<TabProps>(({ theme }) => ({
  textTransform: 'initial',
  borderRadius: 24,
  width: 'calc( 50% - 8px )',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '20px',
  margin: '6px 4px',
  height: '48px',
  minHeight: 'unset',
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.white.main
      : theme.palette.black.main,
  textDecoration: 'none',
  '&.Mui-selected': {
    color: 'inherit',
    backgroundColor: 'transparent',
  },
}));

export const MenuHeaderText = styled('span')(({ theme }) => ({}));

export interface MUIMenuItemProps extends Omit<MenuItemProps, 'showButton'> {
  showButton?: boolean;
  component?: string;
  stickyLabel?: boolean;
}

export const MenuItem = styled(MUIMenuItem, {
  shouldForwardProp: (prop) => prop !== 'showButton' && prop !== 'stickyLabel',
})<MUIMenuItemProps>(({ theme, showButton }) => ({
  display: 'flex',
  padding: `0 ${theme.spacing(6)}`,
  justifyContent: 'space-between',
  marginTop: showButton && theme.spacing(4),

  '&:hover': {
    backgroundColor: showButton && 'transparent',
  },

  '> .menu-item-label__icon': {
    marginLeft: '13px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '48px',
  },
}));

export interface NavbarPaperProps extends Omit<PaperProps, 'isDarkMode'> {
  isDarkMode?: boolean;
  openSubMenu?: boolean;
  isSubMenu?: boolean;
  scrollableMainLayer?: boolean;
  isScrollable?: boolean;
  component?: string;
  stickyLabel?: boolean;
}

export const NavbarPaper = styled(Paper, {
  shouldForwardProp: (prop) =>
    prop !== 'isDarkMode' &&
    prop !== 'openSubMenu' &&
    prop !== 'isSubMenu' &&
    prop !== 'stickyLabel' &&
    prop !== 'scrollableMainLayer' &&
    prop !== 'isScrollable',
})<NavbarPaperProps>(
  ({
    theme,
    isDarkMode,
    openSubMenu,
    scrollableMainLayer,
    isScrollable,
    isSubMenu,
  }) => ({
    background: !!isDarkMode ? '#121212' : '#fff',
    padding: openSubMenu
      ? 0
      : scrollableMainLayer
      ? 0
      : `${theme.spacing(3, 0, 6)} !important`,
    marginTop: !!isSubMenu ? 0 : `${theme.spacing(3)} !important`, // TODO: use transform instead for offset?
    boxShadow: !!isDarkMode
      ? '0px 8px 32px rgba(255, 255, 255, 0.08)'
      : '0px 8px 32px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px 12px 0 0',
    marginBottom: 0,
    maxHeight: 'calc( 100vh - 80px )',
    overflowY: !!isScrollable ? 'auto' : 'inherit',
    overflowX: 'hidden',

    ul: {
      marginTop: 0,
      padding: `${theme.spacing(3, 0, 3)} !important`,
    },

    width: '100%',
    transformOrigin: 'bottom',
    transition:
      'opacity 307ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 204ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    [theme.breakpoints.up('sm')]: {
      transformOrigin: 'inherit',
      borderRadius: '12px !important',
      width: '288px',
    },
  }),
);

export interface MenuLinkItemProps extends Omit<LinkProps, 'component'> {
  component?: string;
}

export const MenuLinkItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'component' && prop !== 'stickyLabel',
})<MenuLinkItemProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: `0 ${theme.spacing(6)}`,
  height: '48px',
  textDecoration: 'none',
  color: 'inherit',
  '> .menu-item-label__icon': {
    marginLeft: '13px',
  },
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: '#0000000A',
  },
}));

export interface MenuButtonProps extends Omit<ButtonProps, 'component'> {
  textColor?: string;
  bgColor?: string;
}

export const MenuButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'textColor' && prop !== 'bgColor',
})<MenuButtonProps>(({ theme, textColor, bgColor }) => ({
  height: '48px',
  width: '100%',
  borderRadius: '24px',
  color: !!textColor ? textColor : theme.palette.white.main,
  backgroundColor: !!bgColor
    ? bgColor
    : theme.palette.mode === 'dark'
    ? '#653BA3'
    : theme.palette.accent1.main,
}));

export const MenuItemLabel = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const MenuItemText = styled('span')({});

export interface MenuHeaderAppWrapperProps
  extends Omit<ListItemProps, 'stickyLabel'> {
  component?: string;
  stickyLabel?: boolean;
  scrollableMainLayer?: boolean;
}

export const MenuHeaderAppWrapper = styled(ListItem, {
  shouldForwardProp: (prop) =>
    prop !== 'stickyLabel' && prop !== 'scrollableMainLayer',
})<MenuHeaderAppWrapperProps>(
  ({ theme, scrollableMainLayer, stickyLabel }) => ({
    padding: 0,
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.84)', // todo: use rgba for dark color as well

    backdropFilter: 'blur(12px)',
    zIndex: 1,
    overflow: 'hidden',
    marginTop:
      !!scrollableMainLayer || !!stickyLabel ? '-60px !important' : 'inherit',
    height: '60px',
  }),
);

export interface MenuHeaderAppBarProps extends Omit<AppBarProps, 'component'> {
  component?: string;
  stickyLabel?: boolean;
  scrollableMainLayer?: boolean;
}

export const MenuHeaderAppBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'stickyLabel' && prop !== 'scrollableMainLayer',
})<MenuHeaderAppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  zIndex: 1,
  position: 'fixed',
  width: '100%',
  height: '60px',
  top: 'initial',
  left: 'initial',
  right: 'initial',
  backdropFilter: 'blur(12px)',
  padding: theme.spacing(0, 6, 0, 6),
  color: theme.palette.text.primary,
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 48,
}));
