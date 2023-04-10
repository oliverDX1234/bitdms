import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "../components/layout/Header";
import CustomerListModal from "../components/modals/CustomerListModal";
import CustomerAddEditModal from "../components/modals/CustomerAddEditModal";
import CustomerSearch from "../components/customers/CustomerSearch"
import AddCustomer from "../components/customers/AddCustomer";
import "../../assets/css/app.css"
import axios from '../axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function Customer() {
    const [customers, setCustomers] = useState([])
    const [modalTitle, setModalTitle] = useState("")
    const [isListModalOpen, setIsListModalOpen] = useState(false);
    const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null)

    const searchHandler = (value) => {

        axios.get("api/customers", {
            params:{
                search: value
            }
        }).then(res => {
            setCustomers(res.data.payload)
            setModalTitle(value)
            setIsListModalOpen(true);
        })
    }

    const hideListModalHandler = () => {
        closeModal("list")
    }

    const hideAddEditModalHandler = () => {
        closeModal("addEdit")
    }

    const itemClickedHandler = (id) => {
        if(!id){
            return
        }

        axios.get(`api/customers/${id}`).then(res => {
            setSelectedCustomer(res.data.payload)
            closeModal("list")
            setIsAddEditModalOpen(true)
        })
    }

    const closeModal = (modal) => {
        if(modal === "list"){
            setModalTitle("")
            setIsListModalOpen(false)
        }else{
            setIsAddEditModalOpen(false)
        }

    }

    const addEditCustomerHandler = (customer) => {
        let method, url;
        if(selectedCustomer){
            method = "put"
            url = `api/customers/${customer.id}`
        }else{
            method = "post"
            url = "api/customers"
        }

        axios({
            method: method,
            url: url,
            data: customer
        }).then((res) => {
            toast.success(res.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false
            });
        }).catch(error => {
            toast.error(error.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false
            });
        }).finally(() => {
            setIsAddEditModalOpen(false)
            setSelectedCustomer(null)
        })
    }

    const addNewCustomerHandler = () => {
        setIsAddEditModalOpen(true)
    }

    return (
        <Fragment>
            <Header/>
            <div className="container mx-auto px-4">
                <AddCustomer buttonClicked={addNewCustomerHandler}/>
                <CustomerSearch searchHandler={searchHandler}/>
            </div>
            {isListModalOpen && <CustomerListModal customers={customers} title={modalTitle} hideModal={hideListModalHandler} itemClicked={itemClickedHandler}/>}
            {isAddEditModalOpen && <CustomerAddEditModal customer={selectedCustomer} hideModal={hideAddEditModalHandler} addEditCustomer={addEditCustomerHandler}/>}
            <ToastContainer />
        </Fragment>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Customer/>, document.getElementById('app'));
}
