import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Nav/>
    <main className='flex-grow'>
      <Outlet>
        
    </Outlet>
    </main>
    <Footer/>
    </div>
    </>
  )
}