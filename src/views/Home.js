import React from 'react';

import { useSelector } from 'react-redux';

import { selectStyle } from '../redux/style/styleSlice';

import style from '../styles/Home.module.css'

export default function Home(props){
    const theme = useSelector(selectStyle);
    const themeClass = `home-top-${theme}`;
    return(
        <div className={`${style[themeClass]} ${style.home}`}>

        </div>
    )
}