import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userid}=useParams()
  return (<>
    <div className='flex justify-center text-3xl text-white p-4 bg-slate-700'>
      User:{userid}
    </div>
    <p className='text-center'>Change the url to change the user</p>
    </>
  )
}

export default User
