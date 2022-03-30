import React,{useState} from 'react'
import './Case.css'
function UploadCase() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='case'>
      <form className='image-upload'>

      <div className='formdata'>
        <div className='data'>
        <label htmlFor="Name">
        <input type="text"
        placeholder='Enter name'
        className='name'
        />
        </label>

        <label htmlFor="Name">
        <input type="text"
        placeholder='Father name'
        className='fname'
        />
        </label>
        </div>

        <label htmlFor="Name">
        <input type="number"
        placeholder='age'
        className='age'
        />
        </label>

        <label htmlFor="Name">
        <input type="text"
        placeholder='Enter number'
        className='number'
        />
        </label>

        <label htmlFor="Name">
        <input type="text"
        placeholder='Location'
        className='location'
        />
        </label>

      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
        />
        {selectedImage && (
          <div className='preview'>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
<button className='btn-save'>Save</button>
</div>

        </form>
    </div>
  )
}

export default UploadCase