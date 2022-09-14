import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col px-24 py-8'>
      <h1 className='self-center text-3xl border-b-2 border-black pb-3'>Contact Us</h1>
      <p className='self-center my-10'>
        Get in touch with us by filling out the form or using the contact details below.
      </p>
      <div className='flex justify-between'>
        <div>
          <p>Shelcom Ltd</p>
        </div>
        <div className='flex flex-col'>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <h2>Name <span className='text-red-600'>*</span></h2>
              <input
              className='h-10 w-72 border-2'
              >
              </input>
            </div>
            <div>
              <h2>Phone Number</h2>
              <input
              className='h-10 w-72 border-2'
              >
              </input>
            </div>
            <div>
              <h2>Email <span className='text-red-600'>*</span></h2>
              <input
              className='h-10 w-72 border-2'
              >
              </input>
            </div>
            <div>
              <h2>Subject <span className='text-red-600'>*</span></h2>
              <input
              className='h-10 w-72 border-2'
              >
              </input>
            </div>
          </div>
          <h2 className='mt-4'>Message</h2> 
          <input
          className='h-36 w-auto border-2'
          type='text'
          placeholder='Enter Message...'
          >
          </input>
          <button className='w-20 h-12 bg-blue-600 text-white mt-8'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App;