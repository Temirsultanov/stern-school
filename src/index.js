import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { getRouter } from './router'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={getRouter()} />)
