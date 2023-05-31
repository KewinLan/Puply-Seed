import './App.scss';
import About from './components/About';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <>
      <Header></Header>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
//npm i react-router-dom
//npm install react-icons
//npm install firebase

// orange-mango
// OrangeMango

// apple-strawberry
// AppleStrawberry

// mango-strawberry
// MangoStrawberry

// apple-grape
// AppleGrape

// grape-strawberry
// GrapeStrawberry

//001 2:09 pm 22 Feb 2023: about to install Sass
//002 2:44 pm : background image not working, so I will leave this for now.
//003 1:29 am : the header seems to be covering the bg image, so even if I move the bg image up, it is cut off by the header. Try editing the App.css
//004 16 Mar 5:33 pm : send to prof. actually see 005
//005 16 Mar 5:52 pm : send to prof
//006 9:29 pm : try keeping the header bg a solid colour
//007 11:03 pm : don't worry about responsive design for this project going forward
//008 17 Mar 1:06 am : try dropshadow
//009 1:32 pm : dropshadow needs to go above bg (maybe put the dropshadow on the bg image instead?)
//010 4:27 pm : Header seems to work. Bg image is doing overflow or something though. 
//011 18 Mar 3:18 pm : Bg image is fixed, work on shopping cart
//012 5:17 pm : reorganized everything to have header in its own component, and I made all the functions as 'export default function <Component>(props)'
//013 19 Mar 6:20 pm : bg image is having issue, I tried some stuff but didn't work. I also then added the cart code from the tutorial, currently at 33:38, adding a 'minus' sign.
//014 9:11 pm: the cart works, now do the badge, then organize everything, although the "countCartItems={cartItems.length}" on line 51 above might be part of the badge code. I also added a now-commented-out line in Header
//015 20 Mar 1:28 am : badge works. I was not able to get the itemsPrice props to pass into the Headers, so I can't yet get the price to show up in the header. Work on re-organizing the code so that the shopping cart looks like the designs
//016 24 Mar 5:44 pm : see above, versioning up just in case
//017 30 Mar 1:33 am : 6:13 in https://www.youtube.com/watch?v=BjtxPj6jRM8&t=1s. Getting error 'Need to provide options, when not being deployed to hosting via source'
//018 11:16 am : Still getting the above error, email prof
//019 11 Apr 10:18 am: I put the prof's line of code to fix the above issue. I then removed most/all of the cart code and I am changing strategies. I will instead create an 'admin sign in' page to allow the web admin to access the database.
//020 5:53 pm : About to get prof's help on why my sign in form is not showing up
//021 13 Apr 2023 00:00 am : prof's suggestion to fix routes worked. Now continue the YouTube tutorial on making a sign in page, I forgot where I was though in the video.
//022 2 pm : error "export 'auth' (imported as 'auth') was not found in '../../../firebase' (possible exports: default)" ask prof 15 min in https://www.youtube.com/watch?v=Vv_Oi7zPPTw
//023 5:55 pm : prof responded. Just finished lining up bottles horizontally.
//024 9:11 pm : "Consider adding an error boundary to your tree" SignUp and SignIn pages are blank
//025 10:04 pm : home page works well enough. Maybe try having the footer on the App.js so it can show up automatically on each page
//026 14 Apr 12:21 am : About Us page mostly done, try Contact Us page
//027 3:12 pm : Working on privacy and terms pages
//028 5:56 pm : Sign in and Sign Out done, Firebase basically working. 
//029 6:28 pm : styling mostly done, about to put both Sign In and Sign up in the same page
//030 6:54 pm : account page is done, try to fix text on terms and privacy pages
//031 15 Apr 2023 3:51 pm : finish the terms and privacy pages, then check if fully done
//032 8:41 pm : done, clean up script then submit
//033 9:48 pm : submitted



//'where can i get personlized help on programming'

//This was in the "return" section originally, but I think it needs to be deleted:
// <div className="App">
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
// </div>