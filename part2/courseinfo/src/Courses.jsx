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

// const CountryProfile = ({ country }) => {
//   const langs = Array.isArray(country.languages)
//       ? country.languages
//       : Object.values(country.languages)

//   return (
//       <>
//           <h1>{country.name.common}</h1>
//           <div>capital {country.capital}</div>
//           <div>area {country.area}</div>
//           <h4>languages:</h4>
//           <ul>
//               {langs.map(lang =>
//                   <li key={lang}>{lang}</li>
//               )}
//           </ul>
//           <img src={country.flags.png} width="150px" />
//       </>
//   )
// }

// export default CountryProfile