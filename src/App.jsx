

// ////assignment 007//////////////////////////////////




import './App.css'

import Banner from './component/banner/Banner'
import Header from './component/header/Header'
import Items from './component/items/Items'

function App() {
  
  return (
    <>
     
     <div className='w-[95%] mx-auto'>
     <Header></Header>
                
     <Banner></Banner>
   <div className='mt-8'>
   <Items ></Items>
   </div>


     </div>
     
      
      
      
    </>
  )
}

export default App
