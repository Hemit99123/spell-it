'use client'

import React, { useEffect } from 'react'
import { getSession } from 'next-auth/react';
import { options } from '../api/auth/[...nextauth]/options';
import {authenticateClient}  from '../lib/auth'

const about = () => {

  useEffect(() => {
    authenticateClient()
  }, [])


  const handleSession = async () => {
    const session = await getSession();
    console.log(session || 'not found')
  }
  return (
    <div>
      <button onClick={handleSession}>get session :)</button>
    </div>
  )
}

export default about