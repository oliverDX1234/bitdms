import React from "react";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
const CustomerItem = (props) => {

    const itemClickedHandler = () => {
        props.itemClicked(props.customer.id)
    }

    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.customer.uuid}
            </th>
            <td className="px-6 py-4">
                {props.customer.first_name}
            </td>
            <td className="px-6 py-4">
                {props.customer.last_name}
            </td>
            <td className="px-6 py-4">
                {props.customer.phone_number}
            </td>
            <td>
                <PencilSquareIcon className="h-5 w-5 text-gray-500 cursor-pointer" onClick={itemClickedHandler}/>
            </td>
        </tr>
    )
}

export default CustomerItem
