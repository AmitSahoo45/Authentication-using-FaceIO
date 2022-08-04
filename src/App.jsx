import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioafd55");
  }, []);

  const handleSignIn = async () => {
    const { email, password } = credentials
    try {
      if (email && password) {
        let response = await faceio.enroll({
          locale: "auto",
          payload: {
            email: email,
            pin: password
          }
        });
        localStorage.setItem('FaceIO', JSON.stringify(response))
        console.log(response)
      } else {
        alert('Please fill in all fields')
      }
    } catch (error) {
      alert(error.message)
      console.log(error)
    }
  }

  const handleLogin = async () => {
    try {
      let response = await faceio.
    } catch (error) {

    }
  }

  return (
    <section>
      <h1>Face Recognition by FaceIO</h1>
      <div>
        <div className="inputHandler">
          <input
            type="email"
            name="email"
            placeholder='Enter the email'
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
        </div>
        <div className="inputHandler">
          <input
            type="password"
            name="password"
            placeholder='Enter the password'
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <button onClick={() => handleSignIn()}>Sign up</button>
        <button>Log In</button>
      </div>
    </section>
  )
}

export default App
