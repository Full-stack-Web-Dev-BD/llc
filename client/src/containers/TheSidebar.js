import React, { useState } from 'react'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import *  as atomState from '../recoil/atom'
import * as recoil from 'recoil'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const isShow = recoil.useRecoilValue(atomState.navShow)
  return (
    <CSidebar
      show={isShow}
    >
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
