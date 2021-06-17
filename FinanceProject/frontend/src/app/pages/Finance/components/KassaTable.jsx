import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardHeader, Table, Row, Col } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Rowf from './row';
import axios from 'axios';
const KassaTable = () => {
	// const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const rows = useSelector((state) => state.kassa.rows);
	useEffect(() => {
		axios
			.get('http://192.168.60.50:8000/table/')
			.then((resp) => {
				setData(resp.data);
				console.log('Respdata', resp.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	}, [data]);
	useEffect(() => {
		setData([...rows]);
	}, [rows]);

	return (
		<Row className="mt-5">
			<Col xl="12">
				<Card className="shadow" style={{ height: '100vh', padding: 10 }}>
					<CardHeader className="border-0">
						<Row className="align-items-center">
							<div className="col">
								<h3 className="mb-0">Jadval</h3>
							</div>
							<div className="col text-right">
								<ReactHTMLTableToExcel
									id="test-table-xls-button"
									className="download-table-xls-button excel"
									table="table-to-xls"
									filename="Xarid"
									sheet="tablexls"
									buttonText="Excelga saqlash"
								/>
							</div>
						</Row>
					</CardHeader>
					<Table
						id="table-to-xls"
						className="align-items-center table-flush"
						responsive
						// style={{ overflowY: 'scroll' }}
					>
						<thead className="thead-light">
							<tr>
								<th>Sana</th>
								<th>Kirim</th>
								<th>Chiqim</th>
								<th>Hisob raqam</th>
								<th>Kontragent</th>
								<th>Manba</th>
								<th>Izoh</th>
								<th>Hodim</th>
								<th>Oy</th>
								<th>Oy(mm)</th>
								<th>Naqd(Kassa)</th>
								<th>Dollar(Kassa)</th>
								<th>Plastik(Kassa)</th>
								<th>X/R(Kassa)</th>
							</tr>
						</thead>
						<tbody>
							{data.map((row, index) => (
								<Rowf row={row} key={index} />
							))}
						</tbody>
					</Table>
				</Card>
			</Col>
		</Row>
	);
};

export default KassaTable;
