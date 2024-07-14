'use client'

import React, { useEffect } from 'react'
import { authenticateClient } from './lib/auth'

const Page = () => {

  useEffect(() => {
    authenticateClient()
  }, [])

  return (
    <div>
      homepage
    </div>
  )
}

export default Page
