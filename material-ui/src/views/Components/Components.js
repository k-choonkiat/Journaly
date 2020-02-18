import React from "react";
import Card from "components/Card/Card.js";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import doctor1 from "../../assets/img/faces/con2.jpg"
import doctor2 from "../../assets/img/faces/con1.jpg"
import doctor3 from "../../assets/img/faces/con4.jpg"
import doctor4 from "../../assets/img/faces/con5.jpg"
import doctor5 from "../../assets/img/faces/con3.png"




import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from 'material-ui-rating'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Create from './write.js';
import '../../assets/css/components.css';






const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};








const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}



export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };


  // export default function DialogSelect() {
  //   const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };





  return (
    <div className="homeBG">

      <GridContainer>
        <GridItem>
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Home",
                tabIcon: Face,
                tabContent: (
                  // image={require("")
                  <div className={classNames(classes.main)} style={{display: "inline"}}>
                    <Parallax image={require('../hackbackground.jpg')}>
                      <div className={classes.container} style={{width: '50%', margin: '20px'}}>
                        <div className={classes.brand} style={{color:"#573f68"}}>
                          <h1 className={classes.title} style={{fontWeight: 'bold'}}>Healing is not Linear</h1>
                          <FormControl component="fieldset" style={{left: '20px'}}>
                            <FormLabel component="legend">How do you feel today?</FormLabel>
                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                              <FormControlLabel style={{color:"#573f68"}} value="female" control={<StyledRadio />} label="Confused" />
                              <FormControlLabel style={{color:"#573f68"}} value="male" control={<StyledRadio />} label="Okay, I guess" />
                              <FormControlLabel style={{color:"#573f68"}} value="other" control={<StyledRadio />} label="Energized" />
                            </RadioGroup>
                          </FormControl>
                          <h2></h2>
                        </div>

                      </div>
                      
                    <Create />
                    </Parallax>
                  </div>
                )
              },
              {
                tabName: "Journal",
                tabIcon: "personPinIcon",
                tabContent:(
                  <div>
                    <div style={{fontSize: "2em", padding: "70px 0", textAlign: "center"}}>
                      <h2>“What happens when people open their hearts?"</h2>
                      <h1>"They get better.” -Haruki Murakami</h1>
                    </div>
                    <div style={{fontSize: "1.25em", padding: "50px 0", textAlign: "center", borderWidth: "5px"}}>
                      <Link  to="/journal-log">Look back and reflect at what makes you happy!</Link>
                    </div>
                    <div>
                      <div style={{fontSize: "2em", padding: "70px 0", textAlign: "center"}}>
                        <h2>“The emotion that can break your heart is sometimes the very one that heals it...”</h2>
                        <h3>-Nicholas Sparks</h3>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                tabName: "Counselors",
                tabIcon: "favoriteIcon",
                tabContent: (
                  <div>
                    <div>
                      <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor1} alt= "doctorA" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Mary Jones
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            Specialty: Marriage
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              When asked what they want to change when they come to counselling, many people say they just want to be happy. However, when asked how they would know they were happy, most of them are completely stumped. Happiness seems to be something people...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">



                            <Button onClick={handleClickOpen}>Contact</Button>
                            <Dialog aria-labelledby="alert-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth} className="1" disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                              <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>{"Contact No"}</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>6755678945</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>mary.jonas@gmail.com</h5>

                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>

                      <div>
                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor2} alt= "doctorB" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Miachel Kamphff
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            Specialty: Mental Health
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              What is happiness? It’s a huge question, isn’t it? Many clients will say to their counsellors "I just want to be happy", yet when asked what that might look like, they have no idea. They often know that it is not 'this'; this feeling of...
    
                          </Typography>
                          
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen2}>Contact</Button>
                            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} className="2" disableBackdropClick disableEscapeKeyDown open={open2} onClose={handleClose2}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>7645626363</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>miachel.kamphff@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose2} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                      <div>
                      <Card className={classes.root}>
                        <CardActionArea>
                          < CardMedia
                            className={classes.media}
                            image="bg3.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <img style={{ height: "200px", width: "280px" }} src={doctor3} alt="doctorC" />
                            <Typography gutterBottom variant="h5" component="h2">
                              Patric Star
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            Specialty: Substance
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Often, people ask me how I am in polite conversation; my stock response is "I'm OK thanks". But, when I stop to think about how I am, often I have a lot of things going on. Things ranging from day to day mundane stuff to things that may be causing...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen3}>Contact</Button>
                            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} className="3" disableBackdropClick disableEscapeKeyDown open={open3} onClose={handleClose3}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>5436467488</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>patric.star@gmail.com</h5>

                              <DialogActions>
                                <Button onClick={handleClose3} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                      <div>
                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "150px"}} src= {doctor4} alt= "doctorD" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Joseph Clain
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            Specialty: Mental Health
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              When you come for cognitive behaviour therapy, the anxiety and depression that you come forward to work on is addressed by looking at two main aspects - cognitions first, then the behaviours. What are cognitions? The definition of cognition is "the...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen4}>Contact</Button>
                            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} className="4" disableBackdropClick disableEscapeKeyDown open={open4} onClose={handleClose4}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>4467747478</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>joseph.clain@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose4} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>


                    <div>
                      <Card className={classes.root}>
                        <CardActionArea>
                          < CardMedia
                            className={classes.media}
                            image="bg3.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <img style={{ height: "200px", width: "200px" }} src={doctor5} alt="doctorE" />
                            <Typography gutterBottom variant="h5" component="h2">
                              Mira Kathy
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h2">
                            Specialty: Substance Abuse
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Anxiety can affect all our lives in so many ways, and it's certainly an issue that is being explored more frequently in the therapy room. All of us can feel anxious, and we can often effectively manage these complex emotions, but sometimes our...
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                        </Button>
                          <Button size="small" color="primary">
                            <Button onClick={handleClickOpen5}>Contact</Button>
                            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} className="5" disableBackdropClick disableEscapeKeyDown open={open5} onClose={handleClose5}>
                              <DialogTitle style={{ textAlign: "center" }}>Contact No</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>6476545660</h5>
                              <DialogTitle style={{ textAlign: "center" }}>Email ID</DialogTitle>
                              <h5 style={{ textAlign: "center", fontWeight: "bold" }}>mira.kathy@gmail.com</h5>
                              <DialogActions>
                                <Button onClick={handleClose5} color="primary">
                                  Ok
          </Button>
                              </DialogActions>
                            </Dialog>
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </div>

                ),
              },
              {
                tabName: "About Us",
                tabIcon: "phoneIcon",
                tabContent: (
                  <div>
                    <h3>At Journaly, we care about our community. We were on a mission to help our fellows realize their own potential. We focus on collecting data to better serve them. We analyze and process the data and then connect them to counselors to better support them.</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>Mahnoor Bibi</h3>
                    <h3>Divya Sri Thala</h3>
                    <h3>Kang Choon Kiat</h3>
                    <h3>Xiangmin Mo</h3>
                  </div>
                )
              }

            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
