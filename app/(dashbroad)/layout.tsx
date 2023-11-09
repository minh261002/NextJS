import Topbar from '@/components/topbar'
import React from 'react'

const DashboardLayout = (props: {
    children : React.ReactNode
}) => {
  return (
    <div>
      <header>
        <Topbar/>
      </header>
      {props.children}
    </div>
  )
}

export default DashboardLayout
