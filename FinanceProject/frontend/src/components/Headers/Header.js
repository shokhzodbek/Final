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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from 'axios'

const Header = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

	useEffect(() => {
		axios
			.get('http://192.168.60.50:8000/table/')
			.then((resp) => {
				setData(resp.data);
			})
			.catch((err) => {
				console.error(err);
			});
      axios
			.get('http://192.168.60.50:8000/endvalue/')
			.then((resp) => {
				setData1(resp.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [data,data1]);
  const lastElement=data[data.length-1]
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Naqd
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {lastElement?.cashmoney}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fas fa-money-bill-alt"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      <i class="fas fa-circle mr-2"></i>  0
                      </span>{" "}
                      <span className="text-nowrap">Normal</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Dollar
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{lastElement?.dollar}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i class="fas fa-dollar-sign"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                      <i class="fas fa-circle mr-2"></i> -1
                      </span>{" "}
                      <span className="text-nowrap">Past</span>
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Plastik
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{lastElement?.plasticmoney}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i class="fas fa-credit-card"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                      <i class="fas fa-circle mr-2"></i> -12
                      </span>{" "}
                      <span className="text-nowrap">Past</span>
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                         X/R
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{lastElement?.accountnumbermoney}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i class="fas fa-money-check-alt"></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      <i class="fas fa-circle mr-2"></i> 0
                      </span>{" "}
                      <span className="text-nowrap">Normal</span>
                     
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
