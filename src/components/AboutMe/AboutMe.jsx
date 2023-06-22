
import './AboutMe.css'
const AboutMe = () => {
  return (
      <div className='About_me' id='About_me'>
          <h1 className='reveal'>About me</h1>
      <p className='reveal'> &quot; Hello, I &apos; m Pranav Vinayak Jadhav, a 26-year-old Frontend Developer who has recently completed a BSc in Computer Science. As a fresher in the industry, I am eager to apply my skills and knowledge to develop user-friendly interfaces that improve the user experience.</p>
      <div className='Contact_info'>
        <h1 className='reveal'>Contact Info</h1>
        <div className="email reveal">
          <p>Email Id :</p>
          <p>pj8841466@gmail.com</p>
        </div>
        <div className="Phone_number reveal">
          <p>Contact Info :</p>
          <p>8104756489</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe