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
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import AdminFooter from '../../../components/Footers/AdminFooter'
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";


import Header from "components/Headers/Header.js";
import {
     
      Form,
      FormGroup,
      InputGroupAddon,
      InputGroupText,
      Input,
      InputGroup,
    } from "reactstrap";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Hulosa
                    </h6>
                    <h2 className="text-white mb-0">Hisob kitoblar</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Oylik</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Haftalik</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center d-flex">
                  <div className="col">
                    <h3 className="mb-0">Loyihalar</h3>
                  </div>
                  <div style={{display:'flex',flexDirection:"row"}}>
                  <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative" style={{backgroundColor:'green'}}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                   
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="URL" type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative" style={{backgroundColor:'green'}}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                   
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Loyiha Nome" type="text" />
              </InputGroup>
            </FormGroup>
          </Form></div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     Loyiha yaratish
                    </Button>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive style={{marginBottom:'20px'}}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Sana</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Mudati</th>
                    <th scope="col">Ko'rish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/12/12</td>
                    <td>Agro</td>
                    <td>
                      12/12/13
                    </td>
                    <td style={{listStyle:'none'}}>
                    <NavItem>
					<NavLink
						to={'/app/index/workplace'}
						tag={NavLinkRRD}
						activeClassName="active"
					>
				<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
					</NavLink>
				</NavItem>
      
                    </td>
                  </tr>

                </tbody>
              </Table>
            </Card>
          </Col>
          
        </Row>
        <AdminFooter/>
      </Container>
     
    </>
  );
};

export default Index;
