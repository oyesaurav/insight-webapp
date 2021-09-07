import React, { useRef, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { Link } from "react-router-dom";

import { useAuth} from "contexts/AuthContext"
import { AuthProvider } from "contexts/AuthContext";

const useStyles = makeStyles(styles);

export default function Signup(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [passconfirm,setPassconfirm] = useState('')
  const {signup, currentUser} ={ useAuth }
  const [error, setError ] = useState('')
  const [loading, setLoading ] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    if(pass !== passconfirm)
    {
      return setError("Passwords do not match buddy")
    }
    

    try {
      setError('')
      setLoading(true)
      await signup(email, pass)
    } catch {
      return setError("Failed to create the account")
    }  
    setLoading(false)
  }

  return (
    <AuthProvider>
      <Header
        absolute
        color="transparent"
        brand="INSIGHT"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form  className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Signup</h4>
                    {/* <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div> */}
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <p>{currentUser && currentUser.email}</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      onInput={ e => setEmail(e.target.value) }
                      value = {email}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      onInput={ e => setPass(e.target.value) }
                      value = {pass}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Confirm Password"
                      id="passconfirm"
                      onInput={ e => setPassconfirm(e.target.value) }
                      value ={passconfirm}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <p>{email}</p>
                  { error && <h4>{error}</h4> }
                  {/* {JSON.stringify(currentUser)} */}
                  <CardFooter className={classes.cardFooter}>
                    <Button disabled={loading} simple color="primary" size="lg" type="submit" onClick={handleSubmit} >
                      Get started
                    </Button>
                  
                  <Button simple color="warning" >
                      <Link to="Login">Already have an account ?</Link>
                  </Button>
                </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
      </div>
    </AuthProvider>
  );
}
