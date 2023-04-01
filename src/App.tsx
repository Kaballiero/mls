import React from 'react';
import { Routes, Route} from 'react-router-dom';


import styles from './App.module.scss';
import Main from './Page/Main/Main';
import Contacts from './Page/Contacts/Contacts';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path='главная' element={<Main/>}/>
            <Route path='Основная информация' element={<Contacts/>}/> 
          
        </Routes>
    </div>
  );
}

export default App;
