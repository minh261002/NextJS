import Topbar from '@/components/topbar'
import React from 'react'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/sidebar'
import MobileSidebar from '@/components/sidebar/mobileSidebar'
import UpgradeProModal from '@/components/dashboard/upgradeProModal'

const DashboardLayout = (props: {
    children : React.ReactNode
}) => {
  const isProlan = false;
  const useLimitCount = 0;
  return (
    <div>

      <header>
        <Topbar/>
      </header>

      <main  className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7",
          { "[&:has([isNavbarMinimal])]:lg:pl-20": true }
        )}>
        <Sidebar 
        useLimitCount={useLimitCount}
        isProlan = {false}
        classname={cn(
          "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal]):w-fit",
          "lg:block"
        )}
        />

        <MobileSidebar 
          isProlan = {isProlan}
          useLimitCount={useLimitCount}
        />

        <UpgradeProModal
          isProlan ={isProlan}
        />

        <div className={cn(
          "bg-background h-[calc(100vh-56px)]",
          "lg: rounded-3xl lg:p-7"
        )}> 
          {props.children}
        </div>
      </main> 
    </div>
  )
}

export default DashboardLayout
