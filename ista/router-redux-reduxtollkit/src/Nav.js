import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
    return (
        <div>
            <Conatiner>
                <Link to="/">home</Link>
                <Link to="/product">product</Link>
                <Link to="/about">About</Link>
            </Conatiner>
        </div>
    )
}

export default Nav
const Conatiner = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`