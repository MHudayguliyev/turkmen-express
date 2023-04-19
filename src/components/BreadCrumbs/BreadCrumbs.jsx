import React, { useState } from 'react'
import styles from './BreadCrumbs.module.scss'
import { Link, useMatch, useNavigate } from "@tanstack/react-location";
import classNames from 'classnames'


const cx = classNames.bind(styles)

const BreadCrumbs = ({crumbs}) => {
  const [lastIndex, setLastIndex] = useState(false)
  return (
    <div className={styles.breadCrumbs}>
        <nav>
            <ol className={styles.breadCrumb}>
                <li>
                    <Link to='/brans'>{'Home'}</Link>
                    <i className='bx bx-chevron-right'></i>
                </li>
               
                {
                    crumbs.map((crumb,index) => {
                        return (
                          <li aria-current={lastIndex} key={index}  className={(cx({active: lastIndex}))} onClick={() => setLastIndex(index === crumbs.length - 1)} >
                              <Link to={crumb.link}>{crumb.name}</Link>
                              <i className='bx bx-chevron-right' />
                          </li>
                        )
                    })
                }
            </ol>
        </nav>
    </div>
  )
}

export default BreadCrumbs


{/* <template>
  <section>
    <nav>
      <ol class="bread-crumb">
        <li class="">
          <nuxt-link to="/">
            {{ home[$i18n.locale] }}
          </nuxt-link>
          <b-icon-chevron-right scale="0.8" class="separator" />
        </li>
        <li v-for="(item, index) in crumbs" :key="index" class="" :class="{active: isLast(index)}" :aria-current="isLast(index) ? 'page' : '' ">
          <nuxt-link v-if="!isLast(index) && (item.slug || item.link)" :to="item.link || item.slug">
            {{ item.name[$i18n.locale] }}
          </nuxt-link>
          <span v-else>
            {{ item.name[$i18n.locale] }}
          </span>
          <b-icon-chevron-right v-if="!isLast(index)" scale="1" class="separator" />
        </li>
      </ol>
    </nav>
  </section>
</template> */}