import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './components/home/HomePage'
import CalendarPage from './components/calendar/CalendarPage'
import HelloPage from './components/hello/HelloPage'

export default function App() {
    return (
            <div>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/hello" element={<HelloPage />} />
                </Routes>
            </div>
    )
}