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
import React, { useState } from 'react';
import InputFirstData from 'app/pages/Finance/components/InputFirstData';
import { Container, Row } from 'reactstrap';
import Header from 'components/Headers/Header.js';
import KassaTable from 'app/pages/Finance/components/KassaTable';
import InputField from '../components/InputFieldPurchue';
import XaridTable from '../components/XaridTable';

const WorkFinance = (props) => {
	// const [activeNav, setActiveNav] = useState(1);
	// const [chartExample1Data, setChartExample1Data] = useState("data1");

	// if (window.Chart) {
	//   parseOptions(Chart, chartOptions());
	// }

	// const toggleNavs = (e, index) => {
	//   e.preventDefault();
	//   setActiveNav(index);
	//   setChartExample1Data("data" + index);
	// };
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<InputField />
				</Row>

				<XaridTable />
			</Container>
		</>
	);
};

export default WorkFinance;
