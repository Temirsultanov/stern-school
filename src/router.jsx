import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Go from './pages/Go'

const createRouter = () => {
	return createBrowserRouter([
		{
			element: <App />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/go',
					element: <Go />,
				},
			],
		},
	])
}

const router = createRouter()
export const getRouter = () => router
