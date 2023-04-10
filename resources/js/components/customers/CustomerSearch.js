import React, {useState} from "react"

const CustomerSearch = (props) => {
    const [search, setSearch] = useState("")
    const [valid, setValid] = useState(true)

    const searchInputHandler = (event) => {
        setSearch(event.target.value)

        if(event.target.value.trim().length){
            setValid(true)
        }
    }

    const keyPressHandler = (event) => {
        if(event.key === "Enter"){
            handleSubmit(event);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!search.trim().length){
            setValid(false)

            return;
        }

        props.searchHandler(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="w-full lg:w-1/2">
                <div className="w-full">
                    <label htmlFor="customer_search" className="block mb-2 font-medium text-gray-900">Search for
                        customer here</label>
                </div>
                <div className='flex'>
                    <input type="text" id="customer_search"
                           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg ${!valid ? 'border-red-300' : ''}`}
                           placeholder="Enter search parameter here"
                           value={search}
                           onInput={searchInputHandler}
                           onKeyPress={keyPressHandler}
                           />
                    <button type="submit"
                            className="px-4 ml-2 bg-primary text-white rounded">Search
                    </button>
                </div>
                {
                   !valid && <div>
                        <p className="text-red-500 text-sm mt-1">This field is required</p>
                    </div>
                }
            </div>
        </form>
    )
}

export default CustomerSearch
