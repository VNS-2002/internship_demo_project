
import { useContext } from 'react';
import DashboardContext from '../Context/DashboardContext';

function Profile() {
  const {userData} =useContext(DashboardContext)
  if (!userData) return <div>Please Login </div>
  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
  <img
    className="w-32 h-32 rounded-full mx-auto"
    src="https://picsum.photos/200"
    alt="Profile picture"
  />
  <h2 className="text-center text-2xl font-semibold mt-3">{userData.userName}</h2>
  <p className="text-center text-gray-600 mt-1">Software Engineer</p>
  <div className="flex justify-center mt-5">
    <a href="https://twitter.com/i/flow/login" className="text-blue-500 hover:text-blue-700 mx-3">
      Twitter
    </a>
    <a href="https://www.linkedin.com/in/vinayak-sanvake/" className="text-blue-500 hover:text-blue-700 mx-3">
      LinkedIn
    </a>
    <a href="https://github.com/VNS-2002" className="text-blue-500 hover:text-blue-700 mx-3">
      GitHub
    </a>
  </div>
  <div className="mt-5">
    <h3 className="text-xl font-semibold">Bio</h3>
    <p className="text-gray-600 mt-2">
      {userData.userName} is a software engineer with over 10 years of experience in developing
      web and mobile applications. He is skilled in JavaScript, React, and
      Node.js.His password is<strong> {userData.password}</strong>
    </p>
  </div>
</div>

  )
}

export default Profile