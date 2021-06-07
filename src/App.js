
import {useEffect, useState} from 'react'
import './App.css';

import {fabric} from 'fabric';

function App() {
const [image, setImage] = useState('');
const [canvas, setCanvas] = useState('');
const [rangeval, setRangeval] = useState("0.5");
const [gamma1, setGamma] = useState('1');
const [gamma2, setGamma2] = useState('1');
const [gamma3, setGamma3] = useState('1');

useEffect(() => {
  setImage();
}, []);

useEffect(() => {
    setCanvas(initCanvas());
  }, []);
const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 600
      
    })
  )


const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {  
        const uploadedImg = URL.createObjectURL(event.target.files[0]);
        setImage(uploadedImg)
       


        fabric.Image.fromURL(image, function(img){
          canvas.add(img)
        })
  }
  else{
    setImage('')
    const uploadedImg = URL.createObjectURL(event.target.files[0]);
    setImage(uploadedImg)
   


    fabric.Image.fromURL(image, function(img){
     
      canvas.add(img)
    })
  }
     

     
    
};
const imageFilter = () => {
  try {
   fabric.Image.fromURL(image, function (img) {

     
      img.filters.push(
          new fabric.Image.filters.Sepia(),
          new fabric.Image.filters.Resize()

          )

      img.applyFilters()      
      canvas.add(img)
      
    })
 
  } catch (error) {
    
  }
 

}
const imageFilter2 = () => {
  try {
   fabric.Image.fromURL(image, function (img) {


      img.filters.push(
        
          new fabric.Image.filters.Contrast()
          )

      img.applyFilters()
    
      canvas.add(img)
    })
  } catch (error) {
    
  }


}
const imageFilter3 = () => {
 try {
  fabric.Image.fromURL(image, function (img) {


    img.filters.push(

        new fabric.Image.filters.Vintage()
        )

    img.applyFilters()
    canvas.add(img)
  })
 } catch (error) {
   
 }

}
const imageFilter4 = () => {
  try {
    fabric.Image.fromURL(image, function (img) {


      img.filters.push(
          
          new fabric.Image.filters.Grayscale()

          )

      img.applyFilters()
      canvas.add(img)
    })

  } catch (error) {
    
  }
}
const imageFilter5 = () => {
 try {
  fabric.Image.fromURL(image, function (img) {


    img.filters.push(
        
        new fabric.Image.filters.Grayscale({mode:'luminosity'}),
   

        )

    img.applyFilters()
    canvas.add(img)
  })
 } catch (error) {
   
 }

}
const imageFilter6 = () => {
 try {
  fabric.Image.fromURL(image, function (img) {


    img.filters.push(
        
        new fabric.Image.filters.Grayscale({mode:'lightness'}),
   

        )

    img.applyFilters()
    canvas.add(img)
  })
 } catch (error) {
   
 }

}
const imageFilter7 = (event) => {
  try {
    setRangeval(event.target.value)

    fabric.Image.fromURL(image, function (img) {


        img.filters.push(
            
            new fabric.Image.filters.Brightness({brightness: rangeval}),
      

            )

        img.applyFilters()
        canvas.add(img)
    })

  } catch (error) {
    
  }
  
}
const imageFilter8 = (event) => {
  
  try {
    setGamma(event.target.value)
 

    fabric.Image.fromURL(image, function (img) {


        img.filters.push(
            
            new fabric.Image.filters.Gamma({gamma: [gamma1, gamma2, gamma3]}),
              

            )

        img.applyFilters()
        canvas.add(img)
    })

  } catch (error) {
    
  }
}
const imageFilter9 = (event) => {
try {
  
  setGamma2(event.target.value)


  fabric.Image.fromURL(image, function (img) {


      img.filters.push(
          
          new fabric.Image.filters.Gamma({gamma: [gamma1, gamma2, gamma3]}),
            

          )

      img.applyFilters()
      canvas.add(img)
  })

} catch (error) {
  
}  

}
const imageFilter10 = (event) => {
  try {
    setGamma3(event.target.value)

    fabric.Image.fromURL(image, function (img) {
  
  
        img.filters.push(
            
            new fabric.Image.filters.Gamma({gamma: [gamma1, gamma2, gamma3]}),
              
  
            )
  
        img.applyFilters()
        canvas.add(img)
        
    })
  } catch (error) {
    
  }
}



  return (
    <div class="grid-container">
       <div class="grid-item">
        <input type="file" name="myImage" className="custom-file-input" onChange={onImageChange} /> 
      </div>
      <div class="grid-item">
        <div class="dropdown">
          <button >Grayscale</button>
          <div class="dropdown-content">
            <button onClick={imageFilter4}>Average</button>
            <button onClick={imageFilter5}>Luminosity</button>
            <button onClick={imageFilter6}>Lightness</button>

          </div>

        </div>
        <button  onClick={imageFilter}>Sepia</button>
        <button onClick={imageFilter2}>Contrast</button>            
        <button onClick={imageFilter3}>Vintage</button>
        <button onClick={imageFilter4}>Grayscale</button>
        <div class="dropdown">
          <button >Brightness</button>
          <div class="dropdown-content">
            

            <a href="#4"><input type="range" className="custom-range" min="0" max="1" step="0.1" defaultValue="0.5" onChange={imageFilter7} />{rangeval}</a>

          </div>
        </div>
        <div class="dropdown">
          <button >Gamma</button>
          <div class="dropdown-content">
            

            <a href="#3"><input type="range" className="custom-rangeR" min="0" max="2.2" step="0.01"  value={gamma1} onChange={imageFilter8} />{gamma1}</a>
            <br/>
            <a href="#2"><input type="range" className="custom-rangeG" min="0" max="2.2" step="0.01"  value={gamma2} onChange={imageFilter9} />{gamma2}</a>
            <a href="#1"><input type="range" className="custom-rangeB" min="0" max="2.2" step="0.01"  value={gamma3} onChange={imageFilter10} />{gamma3}</a>

          </div>
        </div>
       
      </div>
     
      <div class="grid-item">
        <div class="grid-container-img">
          <div class="grid-item-images">
            <h1>Original</h1>
           
            <div class="imgSize">
              <img src={image}  alt={''} style={{width: 'fit-content', height: 'fit-content'}}/>
            </div>
            
            
          </div>
          <div class="grid-item-images">
            <h1>Edited</h1>
            <canvas id="canvas"></canvas>     
         
            
            
          </div>
        </div>
      </div>
  
     
    </div>
  );
}

export default App;
