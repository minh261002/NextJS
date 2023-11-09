import { SignIn } from "@clerk/nextjs";

import React from 'react'

const SigninPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn />
    </div>
  )
}

export default SigninPage
