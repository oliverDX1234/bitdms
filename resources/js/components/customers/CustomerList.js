import React, {Fragment} from 'react';
import CustomerItem from "./CustomerItem";

const CustomerList = (props) => {
    const itemClickedHandler = (id) => {
        props.itemClicked(id)
    }

    return (<Fragment>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    UUID
                </th>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
            </tr>
            </thead>
            <tbody>
            {props.customers.map(customer => <CustomerItem key={customer.id} customer={customer} itemClicked={itemClickedHandler}/>)}
            </tbody>
        </table>
    </Fragment>)
}

export default CustomerList
