function Numbers({persons, filter, deletePerson}) {

  const personsToShow = persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <p key={person.id}> {person.name} {person.number} <button onClick={() => deletePerson(person.name, person.id)}>delete</button></p>
        )}
      </div>
    </div>
  )
}
export default Numbers