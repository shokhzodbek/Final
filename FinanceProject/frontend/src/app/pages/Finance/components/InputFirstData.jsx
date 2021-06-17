import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Col, FormGroup, Form, Input, InputGroup } from 'reactstrap';
import axios from 'axios';
function InputFirstData() {
	const [kont, setKont] = useState('');
	const [hisob, setHisob] = useState('');
	const [hodim, setHodim] = useState('');
	const [manba, setManba] = useState('');
	const [data, setData] = useState([]);

	const postHisobot = (e) => {
		e.preventDefault();

		const dataInput = {
			dollar: hodim,
			n: kont,
			x: manba,
			p: hisob
		};

		axios.post('http://192.168.60.50:8000/endvalue/', dataInput);
	};
	useEffect(() => {}, []);
	// const lastItem = data[data.length - 1];
	return (
		<>
			<Col lg="4" md="12" style={{ marginBottom: 10 }}>
				<Card className="shadow border-0" style={{ backgroundColor: '#E5F0FF' }}>
					<CardBody className="px-lg-5 py-lg-3">
						<div className="text-center text-muted mb-4">
							<small
								style={{
									fontSize: '16px',
									color: 'gray',
									fontWeight: '500',
									textAlign: 'center',
									marginTop: '10px'
								}}
							>
								Kunlik kassani taqoslash
							</small>
						</div>
						<Form role="form">
							<FormGroup>
								<InputGroup className="input-group-alternative mb-3">
									<Input
										placeholder="Naqd"
										type="text"
										value={kont}
										onChange={(e) => setKont(e.target.value)}
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className="input-group-alternative mb-3">
									<Input
										placeholder="Dollar"
										type="text"
										autoComplete="new-hisob"
										value={hisob}
										onChange={(e) => setHisob(e.target.value)}
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className="input-group-alternative">
									<Input
										placeholder="Plastic"
										type="text"
										autoComplete="manba"
										value={manba}
										onChange={(e) => setManba(e.target.value)}
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className="input-group-alternative">
									<Input
										placeholder="X/r"
										type="text"
										autoComplete="new-hodim"
										value={hodim}
										onChange={(e) => setHodim(e.target.value)}
									/>
								</InputGroup>
							</FormGroup>

							<div className="text-center">
								<Button className="mt-4" color="primary" type="button" onClick={postHisobot}>
									Taqqoslash
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</>
	);
}

export default InputFirstData;
