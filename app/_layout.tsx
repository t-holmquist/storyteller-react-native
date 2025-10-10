import '../global.css';

import { Tabs } from 'expo-router';


export default function RootLayout() {

  // Returning the tabs component so that all routes
  // on same level as layoutfile have tabs shown always
  return (

    <Tabs/>

  );
}
