import React from 'react'
import { SideBar } from './../SideBar/SideBar';
import { useQuery } from 'react-query';

// styles
import styles from './Layout.module.scss'
import { GetCategories } from '../../api/queries/Getters';

export const Layout = ({children}) => {
  const {
    data, 
    isLoading, 
  } = useQuery('getData', () => GetCategories(), {
    refetchOnWindowFocus: false
  })

  console.log('cat data', data)

  return (
    <div className={styles.layout}>
        <div className={styles.layoutContent}>
            <div className={styles.sideBarContent}>
                <SideBar data={data}/>
            </div>
            <div className={styles.childrenContent}>
                {children}
            </div>
        </div>
    </div>
  )
}
