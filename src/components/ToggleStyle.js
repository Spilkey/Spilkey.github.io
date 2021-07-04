import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  toggle,
  selectStyleValue
} from '../redux/style/styleSlice';

import style from '../styles/ToggleInput.module.css';

export default function ToggleStyle(props) {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectStyleValue);

  return (
    <label class={style.switch}>
      <input class={style.switchinput} value={inputValue} type="checkbox" onInput={(e) => {dispatch(toggle());}} />
      <span class={style.slider}></span>
    </label>
  );
}
