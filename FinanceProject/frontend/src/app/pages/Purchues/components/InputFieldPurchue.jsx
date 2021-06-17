import React, { useState, useEffect } from 'react';
import {
	Button,
	Card,
	CardBody,
	Col,
	FormGroup,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label
} from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import { addContact } from '../../../../redux/action/kassaAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
const createOption = (label, value) => ({
	label,
	value
});
function InputSecondData() {
	const dispatch = useDispatch();
	const [kirim, setKirim] = useState('');
	const [chiqim, setChiqim] = useState('');
	const [izoh, setIzoh] = useState('');
	const [disable, setDisable] = useState(false);
	const [dataKont, setDataKont] = useState([]);
	const [dataOrigin, setOrigin] = useState([]);
	const [dataEmploye, setEmploye] = useState([]);
	const [dataMonth, setMonth] = useState([]);
	const [dataAccount, setAcount] = useState([]);

	useEffect(() => {
		axios
			.get('http://192.168.60.50:8000/counter/')
			.then((resp) => {
				setDataKont(resp.data);
				console.log(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
		axios
			.get('http://192.168.60.50:8000/origin/')
			.then((resp) => {
				setOrigin(resp.data);
				console.log(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
		axios
			.get('http://192.168.60.50:8000/employes/')
			.then((resp) => {
				setEmploye(resp.data);
				console.log(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
			});
		axios
			.get('http://192.168.60.50:8000/accountnumber/')
			.then((resp) => {
				setAcount(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
			});
		axios
			.get('http://192.168.60.50:8000/month/')
			.then((resp) => {
				setMonth(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	}, []);
	const craeteContact = async (e) => {
		e.preventDefault();
		const new_contact = {
			income: kirim ? kirim : 0,
			expense: chiqim ? chiqim : 0,
			accountnumber: data.value?.label,
			counterparty: kont.value1?.label,
			origin: manba.value2?.label,
			comment: izoh,
			employes: hodim.value3?.value,
			monthone: oy.value4?.value
			// monthtwo: oy.value4?.value
		};
		const { ddd } = await axios.post(`http://192.168.60.50:8000/table/`, new_contact);
		let date = new Date();
		console.log('time', date.toLocaleDateString());
		const fetchData = [
			date.toLocaleDateString(),
			kirim ? kirim : 0,
			chiqim ? chiqim : 0,
			data.value?.label,
			kont.value1?.label,
			manba.value2?.label,
			izoh,
			hodim.value3?.label,
			oy.value4?.label,
			oy.value4?.value
		];
		dispatch(addContact(new_contact));
		setManba({ value2: '' });
		setKirim('');
		setHodim({ value3: '' });
		setChiqim('');
		setKont({ value1: '' });
		setData({ value: '' });
		setIzoh('');
		setOy({ value4: '' });
		// try {
		// 	const responce = await fetch(
		// 		'https://v1.nocodeapi.com/shokhzod/google_sheets/rahbqSKgUNezGPIU?tabId=moliya',

		// 		{
		// 			method: 'POST',
		// 			headers: {
		// 				'Content-Type': 'application/json'
		// 			},

		// 			body: JSON.stringify([fetchData])
		// 		}
		// 	);
		// 	console.log('responce', responce);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const defaultOption2 = dataOrigin.map((e) => createOption(e.name, e.id));
	const defaultOptions = dataAccount.map((e) => createOption(e.name, e.id));
	const defaultOptions1 = dataKont.map((e) => createOption(e.name, e.id));
	const defaultOption3 = dataEmploye.map((e) => createOption(e.name, e.id));
	const defaultOption4 = dataMonth.map((e) => createOption(e.name, e.id));
	const [data, setData] = useState({
		isLoading: false,
		options: [...defaultOptions],
		value: undefined
	});
	const { isLoading, value } = data;
	// -------------------kirim----------------------------

	const [kont, setKont] = useState({
		isLoading1: false,
		options1: [...defaultOptions1],
		value1: undefined
	});

	const { isLoading1, value1 } = kont;
	// --------------------------------------------------------
	const [manba, setManba] = useState({
		isLoading2: false,
		options2: [...defaultOption2],
		value2: undefined
	});
	const { isLoading2, options2, value2 } = manba;
	// -------------------------------------------------------------
	//  ------------------------------hodim-------------------------

	const [hodim, setHodim] = useState({
		isLoading3: false,
		options3: [...defaultOption3],
		value3: undefined
	});
	const { isLoading3, options3, value3 } = hodim;
	// ----------------------oy-----------------------------------

	const [oy, setOy] = useState({
		isLoading4: false,
		options4: [...defaultOption4],
		value4: undefined
	});
	const { isLoading4, value4 } = oy;
	useEffect(() => {
		if (kirim) {
			setChiqim(0);
		}
		if (chiqim) {
			setKirim(0);
		}
	}, [kirim, chiqim]);
	useEffect(() => {
		if (manba.value2?.label == '14101') {
			setDisable(false);
		} else {
			setDisable(true);
		}
	}, [manba.value2?.label]);
	return (
		<>
			<Col lg="12" md="12">
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
								Qator qo'shish
							</small>
						</div>
						<Form role="form" name="google-sheet" method="POST">
							<FormGroup>
								<InputGroup className="mb-3">
									<TextField
										id="outlined-full-width"
										label="Harid nomeri"
										style={{
											margin: 0,
											backgroundColor: 'white',
											borderColor: '#fff',
											outlineColor: '#fff'
										}}
										placeholder=""
										fullWidth
										margin="normal"
										variant="outlined"
									/>
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<CreatableSelect
									placeholder={'Kontragent'}
									isClearable
									isDisabled={isLoading1}
									isLoading={isLoading1}
									onChange={(e) => setKont({ value1: e })}
									onCreateOption={(inputValue) => {
										setKont({ isLoading1: true });
										setTimeout(() => {
											const newOption = createOption(inputValue, defaultOptions.length);
											setKont({
												isLoading1: false,
												options1: [...defaultOptions, newOption],
												value1: newOption
											});
										}, 1000);
									}}
									options={defaultOptions1}
									value={value1}
								/>
							</FormGroup>
							<FormGroup>
								<CreatableSelect
									placeholder={'Mahsulot nomi'}
									isClearable
									isDisabled={isLoading2}
									isLoading={isLoading2}
									onChange={(e) => setManba({ value2: e })}
									onCreateOption={(inputValue) => {
										setManba({ isLoading2: true });
										setTimeout(() => {
											const newOption = createOption(inputValue, defaultOptions.length);
											setManba({
												isLoading2: false,
												options2: [...defaultOptions, newOption],
												value2: newOption
											});
										}, 1000);
									}}
									options={defaultOption2}
									value={value2}
								/>
							</FormGroup>

							<FormGroup>
								{' '}
								<TextField
									id="outlined-full-width"
									label="So'yilgan mol soni"
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									placeholder=""
									fullWidth
									type="number"
									margin="normal"
									variant="outlined"
									isNumericString
								/>
							</FormGroup>
							<FormGroup>
								<TextField
									id="outlined-full-width"
									label="Miqdori"
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									type="number"
									isNumericString
									placeholder=""
									fullWidth
									margin="normal"
									variant="outlined"
								/>
							</FormGroup>
							<FormGroup>
								<TextField
									id="outlined-full-width"
									label="Go'sht yo'qotilish"
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									placeholder=""
									fullWidth
									type="number"
									margin="normal"
									variant="outlined"
									isNumericString
								/>
							</FormGroup>
							<FormGroup>
								<TextField
									id="outlined-full-width"
									label="Narx"
									isNumericString
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									placeholder=""
									fullWidth
									type="number"
									margin="normal"
									variant="outlined"
								/>
							</FormGroup>
							<FormGroup>
								<TextField
									id="outlined-textarea"
									label="Jami so'mma"
									isNumericString
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									placeholder=""
									type="number"
									fullWidth
									margin="normal"
									variant="outlined"
								/>
							</FormGroup>
							<FormGroup>
								<CreatableSelect
									placeholder={"To'lov turi"}
									isClearable
									isDisabled={isLoading}
									isLoading={isLoading}
									onChange={(e) => setData({ value: e })}
									// onCreateOption={(inputValue) => {
									// 	setData({ isLoading: true });
									// 	setTimeout(() => {
									// 		const newOption = createOption(inputValue, defaultOptions.length);
									// 		setData({
									// 			isLoading: false,
									// 			options: [...defaultOptions, newOption],
									// 			value: newOption
									// 		});
									// 	}, 1000);
									// }}
									options={defaultOptions}
									value={value}
								/>
							</FormGroup>
							<FormGroup>
								<TextField
									id="outlined-textarea"
									isNumericString
									style={{
										margin: 0,
										backgroundColor: 'white',
										borderColor: '#fff',
										outlineColor: '#fff'
									}}
									placeholder=""
									type="date"
									fullWidth
									margin="normal"
									variant="outlined"
									required
									helperText="Pulni to'lash sanasi (yozish shart)"
								/>
							</FormGroup>

							<FormGroup>
								<textarea
									type="text"
									className="form-control"
									placeholder="Izoh"
									value={izoh}
									onChange={(e) => setIzoh(e.target.value)}
								/>
							</FormGroup>
							<div className="text-center">
								<Button className="mt-4" color="primary" onClick={(e) => craeteContact(e)}>
									Jadvalga qo'shish
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</>
	);
}

export default InputSecondData;
