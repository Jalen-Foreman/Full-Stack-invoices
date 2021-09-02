import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faImage, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'

function App() {
  
  const [isLoading, setIsLoading] = useState()
  const [invoices, setInvoices] = useState([
	{
		id: '100',
		Vendor: 'Hankook',
		Amount: '18,000',
		Invoice: '1123',
		Date: '08/21/2020',
	},
	{
		id: '100',
		Vendor: 'Hankook',
		Amount: '18,000',
		Invoice: '1123',
		Date: '08/21/2020',
	},
	{
		id: '100',
		Vendor: 'Hankook',
		Amount: '18,000',
		Invoice: '1123',
		Date: '08/21/2020',
	},
	{
		id: '100',
		Vendor: 'Hankook',
		Amount: '18,000',
		Invoice: '1123',
		Date: '08/21/2020',
	},
])

  if (isLoading)
    return (<div>Loading...</div>)

  const remove = (id) => {
    const updatedInvoices = invoices.filter((i) => id !== i.id )
    setInvoices(updatedInvoices)
  }

  invoices.map((invoice) => {
    return (
			<tr key={invoice.id}>
				<td>{invoice.Vendor}</td>
				<td>{invoice.Amount}</td>
				<td>{invoice.Invoice}</td>
				<td>{invoice.Date}</td>
				<td>
					<Button
						className='btn btn-lg btn-success'
						onClick={() => remove(invoices.id)}>
						<FontAwesomeIcon icon={faThumbsUp} />
						OK
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-danger'
						onClick={() => remove(invoices.id)}>
						<FontAwesomeIcon icon={faThumbsDown} />
						NOT OK
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-info'
						onClick={() => remove(invoices.id)}>
						<FontAwesomeIcon icon={faMoneyCheckAlt} />
						50%
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-warning'
						onClick={() => remove(invoices.id)}>
						<FontAwesomeIcon icon={faSearchDollar} />
						??
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-info'
						onClick={() => remove(invoices.id)}>
						<FontAwesomeIcon icon={faImage} />
						Image
					</Button>
				</td>
			</tr>
		);
  }
    )

  return (
		<div className='container border border-secondary rouded center'>
			
			<div className='row'>
				<div className='col-12'>			
					<h4>Pending invoices - The Test Company</h4>
				</div>
			</div>

			<div className='row'>
				<div className='.col-xs-12 center text-center'>
					<Table dark responsive striped bordered hover>
						<thead>
							<th>Vendor</th>
							<th>Amount</th>
							<th>Invoice #</th>
							<th>Date</th>
							<th colSpan="4">Actions</th>
							<th>Image</th>
						</thead>
					</Table>
				</div>
			</div>

		</div>
	);

}

export default App;