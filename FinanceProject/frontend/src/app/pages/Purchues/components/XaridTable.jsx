import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardHeader, Table, Row, Col } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const KassaTable = () => {
	// const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const rows = useSelector((state) => state.kassa.rows);

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
									filename="Xarid table"
									sheet="tablexls"
									buttonText={'Excelga saqlash'}
								/>
							</div>
						</Row>
					</CardHeader>
					<Table id="table-to-xls" className="align-items-center table-flush" responsive>
						<thead className="thead-light">
							<tr>
								<th>Xarid nomeri</th>
								<th>Sana</th>
								<th>Kontragent</th>
								<th>Mahsulot nomi</th>
								<th>So'yilgan mollar soni</th>
								<th>Miqdori</th>
								<th>Go'sht yo'qotish</th>
								<th>Narx</th>
								<th>Jami so'mmasi</th>
								<th>To'lov turi</th>
								<th>Pulni to'lash sanasi</th>
								<th>To'landi</th>
								<th>Qoldiq</th>
								<th>Oy</th>
								<th>Izoh</th>
							</tr>
						</thead>
						<tbody></tbody>
					</Table>
				</Card>
			</Col>
		</Row>
	);
};

export default KassaTable;
