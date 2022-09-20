import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={ styles.home }>
      <div className={ styles.gridContainer }>
        <div className={ styles.gridItem }>1</div>
        <div className={ styles.gridItem }>2</div>
        <div className={ styles.gridItem }>3</div>  
        <div className={ styles.gridItem }>4</div>
        <div className={ styles.gridItem }>5</div>
        <div className={ styles.gridItem }>6</div>  
        <div className={ styles.gridItem }>7</div>
        <div className={ styles.gridItem }>8</div>
        <div className={ styles.gridItem }>9</div> 
      </div>
    </section>
  )
}

export default Home