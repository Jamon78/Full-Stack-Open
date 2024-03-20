function PersonForm({addPerson, newName, newNumber,handleNewName, handleNewNumber})
 {

  return (
    <form onSubmit={addPerson}>
      <h3>add a new</h3>
        <div>name: <input onChange={handleNewName} value={newName}/></div>
        <div>number: <input onChange={handleNewNumber} value={newNumber}/></div>
        <button type="submit">add</button>
    </form>
  )
}
export default PersonForm