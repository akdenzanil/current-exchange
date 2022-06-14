import styles from './table.module.css';  
const Table = () => {
 
    
  return (
    <div className={styles.currencyArea}>
    <div className={styles.currencyHeadingWrap}>
      <div className={styles.currencyHeading}> <h5>Currency</h5> </div>
      <div className={styles.currencyHeading}> <h5>Unit</h5> </div>
      <div className={styles.currencyHeading}> <h5>Buying</h5> </div>
      <div className={styles.currencyHeading}> <h5>Selling</h5> </div>
    </div>
    <div className={styles.currencyItemWrap}>
    <div className={styles.currencyItems}>
      <div className={styles.currencyItem}> <h5>USD</h5> </div>
      <div className={styles.currencyItem}> <h5>1</h5> </div>
      <div className={styles.currencyItem}> <h5>17.87 +</h5> </div>
      <div className={styles.currencyItem}> <h5>18.00 +</h5> </div>
    </div>
    <div className={styles.currencyItems}>
      <div className={styles.currencyItem}> <h5>EUR</h5> </div>
      <div className={styles.currencyItem}> <h5>1</h5> </div>
      <div className={styles.currencyItem}> <h5>17.87 +</h5> </div>
      <div className={styles.currencyItem}> <h5>18.00 +</h5> </div>
    </div>
    <div className={styles.currencyItems}>
      <div className={styles.currencyItem}> <h5>GBP</h5> </div>
      <div className={styles.currencyItem}> <h5>1</h5> </div>
      <div className={styles.currencyItem}> <h5>17.87 +</h5> </div>
      <div className={styles.currencyItem}> <h5>18.00 +</h5> </div>
    </div>
    </div> 
</div>  )
}

export default Table