import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Teerayut Banjad (APex)">
          <h3>ตำแหน่ง : Graphic Designer</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("18/10/2003").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66650826105
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202043@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ผมต้องการพัฒนาความสามารถในการออกแบบ UX/UI และต้องการหาประสบการณ์การใช้ Adobe Photoshop และ Adobe Premiere Pro </p>
        </Title>

        <Title title="Work Experience">
          <p>ทำการวิจัยการทำแอพพลิเคชั่นสั่งอาหารเดริเวอรี่</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>Adobe Photoshop</p>
          <p>Adobe Premiere Rro</p>

        </Title>
      </div>
    </main>
  )
}

export default App
