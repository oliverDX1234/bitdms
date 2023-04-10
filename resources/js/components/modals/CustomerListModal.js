import React, {Fragment} from "react"
import CustomerList from "../customers/CustomerList";
import classes from "./CustomerModal.modules.css"

const CustomerListModal = (props) => {
    const itemClickedHandler = (id) => {
        props.itemClicked(id)
    }

    return (<Fragment>
        <div
            className={`justify-center items-center overflow-y-auto z-50 outline-none focus:outline-none ${classes['customer-list-modal']}`}
        >
            <div>
                {/*content*/}
                <div
                    className="border-0 rounded-lg shadow-lg relative table w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div
                        className="flex items-start justify-between pl-5 pt-5 pb-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            Search results for {props.title}
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
                    {!!props.customers.length && <CustomerList customers={props.customers} itemClicked={itemClickedHandler}/>}

                    {!props.customers.length && <div class="block py-10 text-center">
                        <h6>There are no results for your search</h6>
                    </div>}
                </div>
            </div>
        </div>
        <div onClick={props.hideModal} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>)
}

export default CustomerListModal
