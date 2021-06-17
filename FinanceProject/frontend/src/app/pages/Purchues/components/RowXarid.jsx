import React from 'react';
const Row = ({ row }) => {
	const { accountnumber, monthtwo, comment, counterparty, employes, expense, income, monthone, origin } = row;
	return (
		<tr>
			<td>{new Date().toLocaleDateString()}</td>
			<td>{income}</td>
			<td>{expense}</td>
			<td>{accountnumber}</td>
			<td>{counterparty}</td>
			<td>{origin}</td>
			<td>{comment}</td>
			<td>{employes}</td>
			<td>{monthone}</td>
			<td>{monthtwo}</td>
		</tr>
	);
};

export default Row;
