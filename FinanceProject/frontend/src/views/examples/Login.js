/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState,useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
  Col,
} from "reactstrap";
import {login} from '../../redux/action/userAction'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import Message from "components/Messages";

const Login = () => {
  const history = useHistory()
	const dispatch = useDispatch();
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const userLogin = useSelector((state) => state.userLogin);
	const { userInfo,error } = userLogin;
  

	useEffect(() => {
		if (userInfo && userInfo?.isAdmin===false) {
			history.push('/app/index');
		}
    else if(userInfo &&userInfo?.isAdmin===true){
      history.push('/admin/index');
    }
	}, [history, userInfo,userInfo?.isAdmin]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		console.log('info', userInfo);
	};
  return (
    <>
      <Col lg="5" md="7">
        <Card className="shadow border-0" style={{backgroundColor:'#E5F0FF'}}>
          <CardHeader className="bg-transparent pb-3">
            <div className="text-muted text-center mt-2 mb-3">
              <small style={{fontSize:'20px',color:"#5E72E4",fontWeight:'600'}}>Xush kelibsiz!</small>
               
            </div>
            <div className="btn-wrapper text-center">
            {/* <span className="rounded-circle" style={{width:'120px',height:'120px',borderRadius:'50%'}}>
                    <img
                      alt="..."
                      style={{width:'120px',height:'120px',borderRadius:'50%'}}
                      src={
                        require("../../assets/img/brand/logo.png")
                          .default
                      }
                    />
                  </span> */}
            {/* <small style={{fontSize:'16px',color:"black",fontWeight:'500'}}>Email bilan kering!</small> */}

              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <small style={{fontSize:'16px',color:"gray",fontWeight:'500',textAlign:'center',marginTop:"10px"}}>Email bilan kering!</small>
          
          <CardBody className="px-lg-5 py-lg-3">
          {error && <Message variant="danger">{"Parol yoki username noto'g'ri"}</Message>}
             
            <Form role="form" onSubmit={submitHandler}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="User"
                    type="text"
                    autoComplete="new-email"
                    value={email}
							      onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    autoComplete="new-password"
                    onChange={e=>setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Islab qolish</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Kirish
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Parolni unutdizmi?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link
              className="text-light"
              to="auth/register"
              onClick={(e) => e.preventDefault()}
            >
              <small>Ro'yhatdan o'tish</small>
            </Link>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
