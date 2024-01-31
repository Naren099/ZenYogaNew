// import React, { useState } from 'react';
// import { Link as Defpath } from 'react-router-dom';
// import style from './Admin.module.css';

// function Admin() {
//   const [sidebarActive, setSidebarActive] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

//   const closeSidebar = () => {
//     setSidebarActive(false);
//   };

  
//     return (

//         <div>
//         <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet" type="text/css" />
//         <div className="app-container" style={{marginTop:"300px"}}>
//           <nav className="nava">
//             <a href="#" className="nava__logo">
//               YogaBalance
//             </a>
//             <ul className="nava__list">
//               <li className="nava__list-item">
//                 <a href="#" className="nav__item-link">Dashboard</a>
//               </li>
//               <br></br>
              
//               <li className="nava__list-item">
//                 <a href="#" className="nava__item-link">Users</a>
//               </li>
//               <li className="nava__list-item">
//                 <a href="#" className="nava__item-link">Registrations</a>
//               </li>
//               {/* <li className="nava__list-item">
//                 <a href="#" className="navaa__item-link">C</a>
//               </li> */}
//               <li className="nava__list-item">
//                 <a href="#" className="nava__item-link">Services</a>
//               </li>
//               <li className="nava__list-item">
//                 <a href="signup" className="nava__item-link">Logout</a>
//               </li>
//             </ul>
//           </nav>
//           <div className="app-view">
//             <nav className="utility-bar">
//               <div className="utility-bar__inner">
//                 <ul className="utility-bar__list">
//                   <li className="utility-bar__list-item">
//                     <a href="#" className="utility-bar__item-link">
//                       {/* by Arthur Shlain https://thenounproject.com/search/?q=mail&i=396565               */}
//                       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 100 100" width="26px" xmlSpace="preserve"><path fill="#999" d="M10,66h16v24l24-24h40V10H10V66z M26,26h48v8H26V26z M26,42h48v8H26V42z" /></svg>
//                       {/*               Messages */}
//                     </a>
//                   </li>
//                   <li className="utility-bar__list-item">
//                     <a href="#" className="utility-bar__item-link">
//                       {/* by Nick Novell https://thenounproject.com/search/?q=notification&i=430200               */}
//                       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" fill="#999" width="20px" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality'}} viewBox="0 0 0.276083 0.32331250000000004" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd"><defs>
//                         </defs><g><path className="fil0" d="M0.185915 0.247296c-0.00283406,0.024408 -0.0235765,0.0433539 -0.0487436,0.0433539 -0.0251671,0 -0.0459057,-0.0189459 -0.0487436,-0.0433539l0.0974872 0zm-0.11863 -0.198392c0.015799,-0.0138347 0.0311442,-0.0218257 0.0461308,-0.0250946 6.4844e-005,-0.0131595 0.0107527,-0.0238092 0.0239312,-0.0238092 0.0130794,0 0.0237062,0.0104933 0.0239236,0.0235193 0.0154252,0.00307055 0.0312395,0.0111227 0.047523,0.0253845 0.0264907,0.0291493 0.0340927,0.0621854 0.0291378,0.0978076 -0.00316973,0.076226 0.0178474,0.055453 0.0381511,0.0874021 -0.0460163,0 -0.0920289,0 -0.138041,0 -0.0460163,0 -0.0920289,0 -0.138041,0 0.0203038,-0.031949 0.0413171,-0.0111761 0.0381511,-0.0874021 -0.00495866,-0.0356222 0.00264335,-0.0686583 0.029134,-0.0978076z" /></g></svg>
//                       {/*               Alerts */}
//                       <span className="utility-bar__indicator">3</span>
//                     </a>
//                   </li>
//                 </ul>
//                 <a href="#" className="utility-bar__account">
//                   <span className="utility-bar__account-avatar" />
//                   <span className="utility-bar__account-name">narendharkumar999@gmail.com</span>
//                 </a>
//               </div>
//             </nav>
//             <main className="contentt">
//               <h1><b>Contacts</b></h1><br></br>
                    
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>City</th>
//                     <th>State</th>
//                     <th>Zip</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <a href="#">Keenan Staffieri</a>
//                     </td>
//                     <td>keenan@example.com</td>
//                     <td>555 ABC St.</td>
//                     <td>San Diego</td>
//                     <td>CA</td>
//                     <td>55555</td>
//                     <td>
//                       <button className="btn">Edit</button>
//                       <button className="btn btn-delete">Delete</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <a href="#">Sean Staffieri</a>
//                     </td>
//                     <td>sean@example.com</td>
//                     <td>555 XYZ Ave.</td>
//                     <td>Los Angeles</td>
//                     <td>CA</td>
//                     <td>55555</td>
//                     <td>
//                       <button className="btn">Edit</button>
//                       <button className="btn btn-delete">Delete</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       <a href="#">Ziggy Staffieri</a>
//                     </td>
//                     <td>ziggy@example.com</td>
//                     <td>555 Yoyo Ave.</td>
//                     <td>Austin</td>
//                     <td>TX</td>
//                     <td>55555</td>
//                     <td>
//                       <button className="btn">Edit</button>
//                       <button className="btn btn-delete">Delete</button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </main>
//           </div>
//         </div>
//       </div>
//           );
//         }
//       export default Admin;

import React, { useState } from 'react';
import { Container, TextField, Grid, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import image from '../../public/Images/instagram1.jpeg';
import image2 from '../../public/Images/instagram2.jpeg';
import image3 from '../../public/Images/instagram3.jpeg';
import image4 from '../../public/Images/instagram4.jpeg';
import image5 from '../../public/Images/imgg2.jpeg';
import image6 from '../../public/Images/Heroimage-3.png';
import image8 from '../../public/Images/imgg6.jpeg';
import image7 from '../../public/Images/imgg4.jpeg';
import image9 from '../../public/Images/imgg1.jpeg';
import { Link as Defpath } from 'react-router-dom';

const cards = [
  { id: 1, name: 'YOGA CLASS', image: image2 ,path: '/jobinfostat'},
  { id: 2, name: 'YOGA & MEDITATION', image: image3,path: '/jobinfoai' },
  { id: 3, name: 'YOGA FOR WOMEN', image: image4 ,path:'/apply'},
  { id: 4, name: 'Yoga Course', image: image9 },
  { id: 5, name: 'Ashna', image: image6 },
  { id: 6, name: 'Pranaya Center', image: image },
  { id: 7, name: 'Yoga Center', image: image5 },
  { id: 8, name: 'YOGAAA ', image: image7 },
  { id: 9, name: 'Yoga for Kids', image: image8 },
];

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(cards);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterJobs(query);
  };


  const filterJobs = (query) => {
    const filteredJobs = cards.filter((card) => {
      const nameMatch = card.name.toLowerCase().includes(query.toLowerCase());
      return nameMatch;
    });

    setFilteredJobs(filteredJobs);
  };

  const pages = [
    { label: 'Job Listings', path: '/joblistings' },
    { label: 'Resume', path: '/resume' },
    { label: 'PostJobs', path: '/postingmain' },
  ];
   const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login', path: '/signin' }];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <WorkHistoryTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                YOGABALANCE
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.label}
                      component={Defpath}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'poppins ',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ></Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.label}
          component={Defpath}
          to={page.path}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.label}
        </Button>
      ))}
    </Box>

     <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                      {setting.path ? (
                        <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography textAlign="center">{setting.label}</Typography>
                        </Defpath>
                      ) : (
                        <Typography textAlign="center">{setting.label}</Typography>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <br />
        <br />
        <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                marginTop="50px"
                gutterBottom
              >
                Find your YOGA Class!
              </Typography><br/><br/>
        <Container maxWidth="md">
          <TextField
            label="Search class"
            fullWidth
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
          /><br/><br/><br/>
          <Grid container spacing={2}>
            {filteredJobs.map((job) => (
  <Grid item xs={12} sm={6} md={4} key={job.id}>
    {/* <Paper elevation={3} sx={{ padding: '1rem' }}> */}
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="img" sx={{ pt: '3.25%' }} image={job.image} alt={job.name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {job.name}
          </Typography>
        </CardContent>
        <CardActions>
        <Defpath to={job.path} style={{ textDecoration: 'none' }}>

          <Button size="small">View</Button>
          <Button size="small">Delete</Button>
          </Defpath>
        </CardActions>
      </Card>
    {/* </Paper> */}
  </Grid>
))};
      </Grid>
          <br />
          <br />
        </Container>
        
      </>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          YOGABALANCE
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Admin;

