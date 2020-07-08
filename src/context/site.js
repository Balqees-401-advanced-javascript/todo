import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [pageNum, setPageNum] = useState(2);
  const [sort, setSort] = useState('DailyDoseOfCode');
  
  // packaging all of state and state methods in one obj
  const state = {
    pageNum,
    sort,
    changepageNum: setPageNum,
    changeSort: setSort
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;