import React from 'react';
import styles from '../stylesheets/ErrorPage.module.css';


function ErrorPage() {

  return(
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <img src={process.env.PUBLIC_URL + '/bean-lost.gif'} alt="An image of Mr. Bean lost in a field."/>
        <p>
          Oops! We couldn't find what you're looking for.
        </p>
      </div>
    </main>
  )
}

export default ErrorPage;
