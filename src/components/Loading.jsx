// src/components/Loading.js
import React from 'react';
import { Spin } from 'antd';
import styles from './Loading.module.css';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <Spin size="large" />
  </div>
);

export default Loading;
