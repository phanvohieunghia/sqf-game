import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'layout'
import Dashboard from 'feature/dashborad'
import MarketplacePage from 'feature/marketplace'
import VestingPage from 'feature/vesting'
import PublicSale from 'feature/vesting/publicsale'
import ComingSoonVesting from 'feature/vesting/comingsoon'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="marketplace" element={<MarketplacePage />} />
        <Route path="egg-baskets" element={<MarketplacePage />} />
        <Route path="my-assets" element={<MarketplacePage />} />
        <Route path="staking" element={<MarketplacePage />} />
        <Route path="vesting" element={<VestingPage />}>
          <Route index element={<PublicSale />} />
          <Route path="public-sale" element={<PublicSale />} />
          <Route path="private-sale" element={<ComingSoonVesting />} />
          <Route path="airdrop" element={<ComingSoonVesting />} />
          <Route path="airdrop-2" element={<ComingSoonVesting />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
