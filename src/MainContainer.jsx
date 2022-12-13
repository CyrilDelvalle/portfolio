import React, { useState } from 'react'
import Aside from './Aside'
import MainContent from './MainContent'

const MainContainer = () => {
    const [page, setPage] = useState('home');

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Aside page={page} setPage={setPage} />
            <MainContent page={page} />
        </div>
    )
}

export default MainContainer