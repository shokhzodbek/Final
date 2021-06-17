import React, {  } from "react";
const Row = ({ row }) => {
     const {accountnumber,accountnumbermoney,cashmoney,comment,counterparty,dollar,employes,expense,income,monthone,origin,plasticmoney} = row
  return (
    <tr>
      <td>{new Date().toLocaleDateString()}</td>
        <td>{income}</td>
      <td>{expense}</td>
      <td>{accountnumber?.name}</td>
      <td>{counterparty?.name}</td>
      <td>{origin.name}</td>
      <td>{comment}</td>
      <td>{employes?.name}</td>
      <td>{monthone?.name}</td>
      <td>{monthone?.id}</td>
      <td>{cashmoney}</td>
      <td>{dollar}</td>
      <td>{plasticmoney}</td>
      <td>{accountnumbermoney}</td>
    </tr>
  );
};

export default Row;
