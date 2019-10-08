const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')

//const note = getNotes()
//console.log(note)

// console.log(chalk.green("Success!"))
//console.log(process.argv[2])


yargs.version('1.1.0')

yargs.command({

    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: "Title of the Note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({

    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Title of Note to be remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("Removing Note")
        notes.removeNote(argv.title)
        
    }

})

yargs.command({

    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'Read Notes',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv) {
        console.log("Opening Note")
        notes.readNote(argv.title)

    }

})

yargs.command({

    command: 'list',
    describe: 'list all notes',
    handler(argv) {
    console.log("Listing Stored Notes")
    notes.listNotes() 
    }

})

yargs.parse()
//console.log(yargs.argv)
