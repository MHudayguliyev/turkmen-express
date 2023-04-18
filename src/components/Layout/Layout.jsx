import React from 'react'
import { SideBar } from './../SideBar/SideBar';
import styles from './Layout.module.scss'

export const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
        <div className={styles.layoutContent}>
            <div className={styles.sideBarContent}>
                <SideBar />
            </div>
            <div className={styles.childrenContent}>
                {children }
            </div>
        </div>
    </div>
  )
}
