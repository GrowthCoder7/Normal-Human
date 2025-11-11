"use client"
import React from 'react'
import { Button } from './button' // Assuming './button' is correct
import { getAurinkoAuthUrl } from '@/lib/aurinko'

const LinkAccButton = () => {
  return (
    <Button onClick={async()=>{
        const authUrl = await getAurinkoAuthUrl('Google')
        console.log(authUrl) // Good for debugging

        window.location.href = authUrl;
    }}>
        Link Account
    </Button>
  )
}

export default LinkAccButton