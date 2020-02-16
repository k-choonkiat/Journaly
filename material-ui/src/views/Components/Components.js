import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Switch from '@material-ui/core/Switch';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import doctor1 from "../../assets/img/faces/a.jpg"
import doctor2 from "../../assets/img/faces/b.jpg"
import doctor3 from "../../assets/img/faces/c.jpg"
import doctor4 from "../../assets/img/faces/d.jpg"
import doctor5 from "../../assets/img/faces/e.jpg"

import styles from "assets/jss/material-kit-react/views/components.js";

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
  return (
    <div>
      {/* <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      <GridContainer>
        <GridItem>
        <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Client",
                    tabIcon: Face,
                    tabContent: (
                      // image={require("")
                      <div className={classNames(classes.main)}>
                        <Parallax >
         <div className={classes.container}>
             <div className={classes.brand}>
                 <h1 className={classes.title}>Healing is not Linear</h1>
                 {/* <h9 className={classes.subtitle}>
                 How Are You Feel Today?
                 </h9> */}
                 <FormControl component="fieldset">
      <FormLabel component="legend">How Are You Feel Today?</FormLabel>
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
        <FormControlLabel value="female" control={<StyledRadio />} label="Confused" />
        <FormControlLabel value="male" control={<StyledRadio />} label="Okay, I guess" />
        <FormControlLabel value="other" control={<StyledRadio />} label="Energized" />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<StyledRadio />}
          label="(Disabled option)"
        /> */}
      </RadioGroup>
    </FormControl>
                 <h2></h2>
               </div>
          
         </div>
       </Parallax>
                      {/* <SectionBasics /> */}
                      {/* <SectionNavbars /> */}
                      {/* <SectionTabs />
                      {/* <SectionNavbars />
                      <SectionTabs />
                      <SectionPills />
                      <SectionNotifications />
                      <SectionTypography />
                      <SectionJavascript />
                      <SectionCarousel />
                      <SectionCompletedExamples />
                      <SectionLogin />
                      <GridItem md={12} className={classes.textCenter}>
                        <Link to={"/login-page"} className={classes.link}>
                          <Button color="primary" size="lg" simple>
                            View Login Page
                          </Button>
                        </Link>
                      </GridItem>
                      <SectionExamples />
                      <SectionDownload /> */}
                    </div>
                    )
                  },
                  {
                    tabName: "Counselors",
                    tabIcon: "personPinIcon",
                    tabContent: (
                      <div>
                      <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "280px"}} src= {doctor1} alt= "doctorA" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Mary Jones
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
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                    
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
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>



                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor3} alt= "doctorC" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Patric Star
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
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>



                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "250px"}} src= {doctor4} alt= "doctorD" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Mira klein
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
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>




                    <Card className={classes.root}>
                      <CardActionArea>
                        < CardMedia
                          className={classes.media}
                          image= "bg3.jpg"
                          title=  "Contemplative Reptile"
                        />
                        <CardContent>
                          <img style= {{height: "200px", width: "180px"}} src= {doctor5} alt= "doctorE" />
                          <Typography gutterBottom variant="h5" component="h2">
                            Mariam sen
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
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                    </div>

                    ),
                  }            
                  //  {
                  //   tabName: "Settings",
                  //   tabIcon: Build,
                  //   tabContent: (
                  //     <p className={classes.textCenter}>
                  //       think that’s a responsibility that I have, to push
                  //       possibilities, to show people, this is the level that
                  //       things could be at. So when you get something that has
                  //       the name Kanye West on it, it’s supposed to be pushing
                  //       the furthest possibilities. I will be the leader of a
                  //       company that ends up being worth billions of dollars,
                  //       because I got the answers. I understand culture. I am
                  //       the nucleus.
                  //     </p>
                  //   )
                  //  }
                ]}
              />
            </GridItem>
            
        </GridContainer>
      

      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div> */}
      <Footer />
    </div>
  );
}