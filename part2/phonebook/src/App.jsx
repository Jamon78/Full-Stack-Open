import { useState,useEffect } from 'react'
import SearchFilter from './SearchFilter'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import numberService from './services/numbers'
import Notification from './Notification'

const App = () => {

  const handleNewName = event => setNewName(event.target.value)
  const handleNewNumber = event => setNewNumber(event.target.value)
  const handleNewFilter = event => setNewFilter(event.target.value)

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageColor, setMessageColor] = useState('green')

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  const addPerson = event => {
    event.preventDefault()
    //check if the new name is found in persons
    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson()
      }  
    } else {
      const newPersonObject = {
        name: newName,
        number: newNumber,
      }
        numberService
          .create(newPersonObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessageColor('green')
            setMessage(`Added ${newPersonObject.name}`)
            setTimeout(() => {
              setMessage(null)
            },3000)
            
          })
    }
  }

  const updatePerson = () => {
    const personToUpdate = persons.find(({name}) => name.toLowerCase() === newName.toLowerCase())
        const newPersonObject = { ...personToUpdate, number: newNumber}
        numberService
          .update(personToUpdate.id, newPersonObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setMessageColor('red')
            setMessage(`Information of ${newPersonObject.name} has already been removed from server`)
            setTimeout(() => {
              setMessage(null)
            },3000)
            setPersons(persons.filter(person => person.name !== newName))
          })
  }

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      numberService
      .deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} noteColor={messageColor}/>
      <SearchFilter handleNewFilter={handleNewFilter} persons={persons}/>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber}/>
      <Numbers persons={persons} filter={newFilter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App