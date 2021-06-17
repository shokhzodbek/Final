import React from 'react';
import { Alert } from 'reactstrap';

function Message({ variant, children }) {
	return <Alert style={{ backgroundColor: '#E13A0C' }}>{children}</Alert>;
}

export default Message;
