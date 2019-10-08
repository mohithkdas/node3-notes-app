const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote)//s.length === 0) {
    {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("New note Added"))
    } else {
        console.log(chalk.red.inverse("Note Title Taken!"))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []

    }

}

const removeNote = (title) => {
    //console.log("Rm Test")
    const notes = loadNotes()
    notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('Removing Failed'))
    } else {
        console.log(chalk.green.inverse('Removing Successful'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse("Your Notes:"))
    notes.forEach(element => { console.log(element.title) });

}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
        console.log(chalk.magenta.inverse(noteToRead.title) + "\n" + chalk.inverse(noteToRead.body))
    } else {
        console.log(chalk.red.inverse("Note Not Found!"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote


}





// const validator = require('validator')

//console.log(validator.isEmail('example@abc.com'))
// console.log(validator.isURL('example@abc.com'))
