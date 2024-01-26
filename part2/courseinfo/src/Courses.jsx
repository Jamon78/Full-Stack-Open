function Courses({courses}) {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course  => 
        <div key ={course.id}>
          <h2>{course.name} </h2>
          {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
          <h3>total of {(course.parts.map(part => part.exercises)).reduce((acc,cur) => acc + cur, 0)} exercises</h3>
        </div>
        )}
    </div>
  )
}
export default Courses