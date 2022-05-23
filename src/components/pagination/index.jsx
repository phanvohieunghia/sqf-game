import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import './style.scss'

export default function BasicPagination() {
  return (
    <div className="container d-flex justify-content-center c-container">
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  )
}
