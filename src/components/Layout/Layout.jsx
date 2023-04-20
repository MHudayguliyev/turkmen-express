import React from 'react'
import { useQuery } from 'react-query';

// styles
import styles from './Layout.module.scss'
import { GetCategories } from '../../api/queries/Getters';
import TopFilter from '../TopFilter/TopFilter';

export const Layout = ({sidebars, children}) => {
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
            {
              sidebars?.map((sidebar, index) => {
                return (
                  <div className={styles.sideBarItems}  key={index}>
                    {sidebar.component}
                  </div>
                )
              })
            }
          </div>
            <div className={styles.childrenContent}>
              <TopFilter />
                {children}
            </div>
        </div>
    </div>
  )
}
