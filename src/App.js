import React, { useState, useEffect} from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faImage, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'

function App() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [invoices, setInvoices] = useState([])
	// CONNECTING DATA FROM API TO STATE USING USE EFFECT AND ASYNC FUNCTIONS
	useEffect(() => {
		Mount();
	}, [])

	async function Mount() {
		const response = await fetch(
			'https://oj7ml8xy66.execute-api.us-east-2.amazonaws.com/Dev'
		);
		const body = await response.json();
		await setInvoices(body);
		setIsLoading(false);
		}

  if (isLoading)
    return (<div>Loading...</div>)

// UPDATING STATE EVERYTIME AN INVOICE IS REMOVED	
  const remove = (id) => {
    const updatedInvoices = invoices.filter((i) => id !== i.ID )
    setInvoices(updatedInvoices)
  }
  
  
  // MAPPING THROUGH INVOICE DATA AND PLACING BUTTON LAYOUTS FOR INVOICES
  let allInvoices = invoices.map((invoice) => {
    return (
			<tr key={invoice.ID}>
				<td>{invoice.Vendor}</td>
				<td>{invoice.Amount}</td>
				<td>{invoice.Invoice}</td>
				<td>{invoice.Date}</td>
				<td>
					<Button
						className='btn btn-lg btn-success'
						onClick={() => remove(invoice.ID)}>
						<FontAwesomeIcon icon={faThumbsUp} />
						OK
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-danger'
						onClick={() => remove(invoice.ID)}>
						<FontAwesomeIcon icon={faThumbsDown} />
						NOT OK
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-info'
						onClick={() => remove(invoice.ID)}>
						<FontAwesomeIcon icon={faMoneyCheckAlt} />
						50%
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-warning'
						onClick={() => remove(invoice.ID)}>
						<FontAwesomeIcon icon={faSearchDollar} />
						??
					</Button>
				</td>
				<td>
					<Button
						className='btn btn-lg btn-info'
						onClick={() => remove(invoice.ID)}>
						<FontAwesomeIcon icon={faImage} />
						Image
					</Button>
				</td>
			</tr>
		);
  }
    )

  // CREATING FRONTEND LAYOUT USING BOOTSTRAP
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
							<tr>
								<th>Vendor</th>
								<th>Amount</th>
								<th>Invoice #</th>
								<th>Date</th>
								<th colSpan='4'>Actions</th>
								<th>Image</th>
							</tr>
						</thead>
						<tbody>
							{invoices.length === 0 ? (
								<tr>
									<td colSpan='4'>All caught up!</td>
								</tr>
							) : (
								allInvoices
							)}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);

}

export default App;
