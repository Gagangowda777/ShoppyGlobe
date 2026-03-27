
function CheckOut() {
  return (
    <div className='flex justify-center items-center p-4 bg-gray-50'>
        <form className='flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md w-full max-w-md'>
            <div>
                <label className="p-4 w-full" htmlFor="name">Name : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="text" placeholder='Name' id='name'/>
            </div>
            <div>
                <label className="p-4 w-full" htmlFor="email">Email : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="email" placeholder='Email' id='email'/>
            </div>
            <div>
                <label className="p-4 w-full" htmlFor="address">Address : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="text" placeholder='Address' id='address'/>
            </div>
            <div>
                <label className="p-4 w-full" htmlFor="city">City : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="text" placeholder='City' id='city'/>
            </div>
            <div>
                <label className="p-4 w-full" htmlFor="state">State : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="text" placeholder='State' id='state'/>
            </div>
            <div>
                <label className="p-4 w-full" htmlFor="zip">Zip Code : </label>
                <input className="border border-gray-600 rounded-xl p-1" type="text" placeholder='Zip' id='zip'/>
            </div> 
            <button className="border border-gray-600 rounded-xl p-2 hover:bg-black hover:text-white" type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CheckOut