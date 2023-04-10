import React, {Fragment, useState} from "react"
import classes from "./CustomerModal.modules.css"

const CustomerAddEditModal = (props) => {
    const [localCustomer, setLocalCustomer] = useState(props.customer ? {...props.customer} : {
        first_name: "",
        last_name : "",
        phone_number: ""
    })

    const [formErrors, setFormErrors] = useState({
        first_name: false,
        last_name: false,
        phone_number: false,
        phone_number_format: false,
        hasErrors: false
    });

    const updateFirstNameHandler = (event) => {
        setLocalCustomer(prevState => {
            return {...prevState, first_name: event.target.value}
        })

        if(event.target.value.trim().length){
            setFormErrors(prevState => {
                return {...prevState, first_name: false}
            })
        }
    }

    const updateLastNameHandler = (event) => {
        setLocalCustomer(prevState => {
            return {...prevState, last_name: event.target.value}
        })

        if(event.target.value.trim().length){
            setFormErrors(prevState => {
                return {...prevState, last_name: false}
            })
        }
    }

    const updatePhoneNumberNameHandler = (event) => {
        setLocalCustomer(prevState => {
            return {...prevState, phone_number: event.target.value}
        })

        if(event.target.value.trim().length){
            setFormErrors(prevState => {
                return {...prevState, phone_number: false}
            })

            const regex = /^\d{3}-\d{3}-\d{4}$/;

            if(regex.test(event.target.value)){
                setFormErrors(prevState => {
                    return {...prevState, phone_number_format: false}
                })
            }
        }
    }

    const validate = () => {
        const validation = {
            hasErrors: false
        };

        if (!localCustomer.first_name.trim().length) {
            validation.first_name = true;
            validation.hasErrors = true
        }
        if (!localCustomer.last_name.trim().length) {
            validation.last_name = true;
            validation.hasErrors = true
        }
        if (!localCustomer.phone_number.trim().length) {
            validation.phone_number = true;
            validation.hasErrors = true
        }else{
            const regex = /^\d{3}-\d{3}-\d{4}$/;

            if (!regex.test(localCustomer.phone_number)) {
                validation.phone_number_format = true;
                validation.hasErrors = true
            }
        }


        return validation;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validation = validate();

        setFormErrors(prevState => ({ ...prevState, ...validation }));

        if (!validation.hasErrors) {
            props.addEditCustomer(localCustomer)
        }
    }

    return (<Fragment>
        <div
            className={`justify-center items-center overflow-y-auto z-50 outline-none focus:outline-none ${classes['customer-edit-modal']}`}
        >
            <div>
                {/*content*/}
                <div
                    className="border-0 rounded-lg shadow-lg relative table w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div
                        className="flex items-start justify-between pl-5 pt-5 pb-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            {props.customer ? "Edit Customer " + props.customer.first_name + " " + props.customer.last_name : "New Customer"}
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={props.hideModal}
                        >
                            <span
                                className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none relative bottom-3">
                              ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div>
                        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                                    First Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.first_name ? 'border-red-500' : ''}`}
                                    id="first_name" type="text" placeholder="Enter First Name"
                                    value={localCustomer.first_name}
                                    onInput={updateFirstNameHandler}
                                />
                                {formErrors.first_name && <p className="text-red-500 text-xs italic">The First Name field is required</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
                                    Last Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.last_name ? 'border-red-500' : ''}`}
                                    id="last_name" placeholder="Enter Last Name"
                                    value={localCustomer.last_name}
                                    onInput={updateLastNameHandler}
                                />
                                {formErrors.last_name && <p className="text-red-500 text-xs italic">The Last Name field is required</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
                                    Phone Number
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.phone_number ? 'border-red-500' : ''}`}
                                    id="phone_number" placeholder="format: ###-###-####"
                                    value={localCustomer.phone_number}
                                    onInput={updatePhoneNumberNameHandler}
                                />
                                {formErrors.phone_number && <p className="text-red-500 text-xs italic">The Phone Number field is required</p>}
                                {formErrors.phone_number_format && <p className="text-red-500 text-xs italic">The Phone Number format is invalid</p>}
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    {props.customer ? "Update" : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div onClick={props.hideModal} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>)
}

export default CustomerAddEditModal
