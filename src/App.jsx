/* eslint-disable no-unused-vars */
import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked?.includes(id)

      if (isChecked) {
        // Unchecked
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    });
  }

  const handleSubmit = () => {
    // Call API
    console.log({ids: checked});
  }

  return (
    <div style={{ padding: '32px' }}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input 
              type="checkbox"
              checked={checked?.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleSubmit}>Lấy phần thưởng</button>
    </div>
  )
}

export default App
