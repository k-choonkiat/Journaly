import React from "react";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
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
                    <Parallax image={require("../hackbackground.jpg")}>
                      <div className={classes.container}>
                        <div className={classes.brand}>
                          <h4 style={{ paddingLeft: "100px",marginRight:"220px"}} className={classes.title}>Healing is not Linear</h4>
                          
                          {/* <FormControl component="fieldset">
                              <FormLabel component="legend">How Are You Feel Today?</FormLabel>
                               <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                                 <FormControlLabel value="female" control={<StyledRadio />} label="Confused" />
                                  <FormControlLabel value="male" control={<StyledRadio />} label="Okay, I guess" />
                                   <FormControlLabel value="other" control={<StyledRadio />} label="Energized" />
                                 <Button variant="outlined" color="primary"> Submit</Button>
                                        </RadioGroup>
                                            </FormControl>
                          
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">How Are You Feel Today?</FormLabel>
                                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                                              <FormControlLabel value="female" control={<StyledRadio />} label="Confused" />
                                              <FormControlLabel value="male" control={<StyledRadio />} label="Okay, I guess" />
                                              <FormControlLabel value="other" control={<StyledRadio />} label="Energized" />
                                              <Button variant="outlined" color="primary">
                                              Submit
                                            </Button>
                                            </RadioGroup>
                                            </FormControl> */}

                                            <FormControl style={{marginLeft:"500px",marginBottom:"110px",marginTop:"20px"}} component="fieldset">
                                            <FormLabel style ={{Color:"purple"}}component="legend">How Are You Feel Today?</FormLabel>
                                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                                              <FormControlLabel value="female" control={<StyledRadio />} label="Confused" />
                                              <FormControlLabel value="male" control={<StyledRadio />} label="Okay, I guess" />
                                              <FormControlLabel value="other" control={<StyledRadio />} label="Energized" />
                                              <Button variant="outlined" color="primary">
                                              Submit
                                            </Button>
                                            </RadioGroup>
                                            </FormControl>
                                            
              }</div>

                      </div>
                              
                    </Parallax>
                  </div>
                )
              },
              {
                tabName: "Counselors",
                tabIcon: Chat,
                tabContent: (
                  <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. I will be the leader of a company
                    that ends up being worth billions of dollars, because I
                    got the answers. I understand culture. I am the nucleus.
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at.
                      </p>
                )
              },
              {
                tabName: "Settings",
                tabIcon: Build,
                tabContent: (
                  <p className={classes.textCenter}>
                    think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. So when you get something that has
                    the name Kanye West on it, it’s supposed to be pushing
                    the furthest possibilities. I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am
                    the nucleus.
                      </p>
                )
              }
            ]}
          />
        </GridItem>

      </GridContainer>

      <Footer />
    </div>
  );
}
