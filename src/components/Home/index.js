import './Home.scss';

export default function Home() {
  return (
    <>
      <div className='main-title'>
        Healthy, sugar-free fruit blends
      </div>

      <div className='names-of-drinks'>
        <div className='orange-mango-label'>
          Orange Mango
        </div>
        <div className='apple-strawberry-label'>
          Apple Strawberry
        </div>
        <div className='mango-strawberry-label'>
          Mango Strawberry
        </div>
        <div className='apple-grape-label'>
          Apple Grape
        </div>
        <div className='grape-strawberry-label'>
          Grape Strawberry
        </div>
      </div>

      <div className='bottle-images'>
        <div className="orange-mango-img-link">
          <img src="images/BottleOrgMgoFinal2.png" className="orange-mango-img" alt="Orange Mango Bottle" width="130" height="378" />
        </div>
        <div className="apple-strawberry-img-link">
          <img src="images/BottleApStrFinal2.png" className="apple-strawberry-img" alt="Apple Strawberry Bottle" width="130" height="378" />
        </div>
        <div className="mango-strawberry-img-link">
          <img src="images/BottleMgoStrFinal2.png" className="mango-strawberry-img" alt="Mango Strawberry Bottle" width="130" height="378" />
        </div>
        <div className="apple-grape-img-link">
          <img src="images/BottleAprGrpFinal2.png" className="apple-grape-img" alt="Apple Grape Bottle" width="130" height="378" />
        </div>
        <div className="grape-strawberry-img-link">
          <img src="images/BottleGrpStrFinal2.png" className="grape-strawberry-img" alt="Grape Strawberry Bottle" width="130" height="378" />
        </div>
      </div>

      <div className='add-to-cart-btn-container'>
        <div className='add-to-cart-btn1'>
            <button>Add to Cart</button>
          </div>
        <div className='add-to-cart-btn2'>
          <button>Add to Cart</button>
        </div>
        <div className='add-to-cart-btn3'>
          <button>Add to Cart</button>
        </div>
        <div className='add-to-cart-btn4'>
          <button>Add to Cart</button>
        </div>
        <div className='add-to-cart-btn5'>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};