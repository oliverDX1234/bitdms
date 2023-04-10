import React from "react"

const AddCustomer = (props) => {
    return (
        <div className='block justify-content-end mb-5'>
            <button type="submit"
                    onClick={props.buttonClicked}
                    className="px-4 py-2 bg-primary text-white rounded">+ Add Customer
            </button>
        </div>
    )
}

export default AddCustomer
