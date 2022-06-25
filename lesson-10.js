// function User(name) {
//     this.name = name
//     let password = ''

//     this.getName = function() {
//         return this.name
//     }

//     this.getPassword = function () {
//         return password
//     }

//     this.setPassword = function (newPassword) {
//         password = newPassword
//     }
// }

// User.prototype.setName = function(name) {
//     this.name = name
// }

// function AdminUser(name) {
//     User.call(this, name)

//     this.isAdmin = true
// }

// const user1 = new User('Denis')
// const user2 = new User('Max')
// console.log(user1)

// const admin = new AdminUser('Dima')

// console.log(admin)
// console.log(admin.getName())

// const admin = AdminUser('Dima')

// console.log(admin)

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }

//     setName(newName) {
//         this.name = newName
//     }
// }

// const user = new User('Denis')

// class AdminUser extends User {
//     constructor(name) {
//         super(name)
//         this.isAdmin = true
//     }
// }

// const admin = new AdminUser('Dima')
// console.log(admin)

// Example 1

// class User {
//     constructor(config) {
//         const { email, age, blog} = config
//         const { numberOfPosts, topics } = blog

//         this.email = email
//         this.age = age
//         this.numberOfPosts = numberOfPosts
//         this.topics = topics
//     }

//     getInfo() {
//         const {email, age, numberOfPosts} = this
//         return `User ${email} is ${age} 
//         years old and has ${numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts = value
//     }
// }

// const mango = new User({
//     email: 'mango@mail.com',
//     age: 24,
//     blog: {
//         numberOfPosts: 20,
//         topics: ['tech', 'cooking'],
//     }
// });

// console.log(mango.getInfo())

class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
        // const index = this.items.indexOf(item)
        // console.log(index)
        // this.items.splice(index, 1)
        // console.log(this.items)
        this.items = this.items.filter((el) => el !== item)
        console.log(this.items)
    }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage)

// storage.removeItem('🍇')

// Example 3
class User {
    #login
    #email

    constructor({login, email}) {
        this.#email = email
        this.#login = login
        this._isAdmin = true
        this.lastChanges = [email]
    }

    get email() {
        return this.#email
    }

    set email(value) {
        if (!value) throw new Error('Some message')
        this.lastChanges.push(value)
        this.#email = value
    }

    get login() {
        return this.#login
    }

    set login(value) {
        this.#login = value
    }
}

const mango = new User({
    login: 'Mango',
    email: 'mango@dog.woof',
});

// mango.email = 'new@new.com'
// mango.login = 'newLogin'
// mango.email = 'new@new.com'
// mango._isAdmin = 'asdasdas'


// mango.email = 'new2@new2.com'

// console.log(mango)

// console.log(mango.#login)
// mango.#login = ''


class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    }

    constructor(items) {
        this.items = items
    }

    addNote({ text, priority = Notes.Priority.LOW }) {
        this.items.push({ text, priority })
    }

    removeNote(text) {
        const index = this.items.findIndex((note) => note.text === text)
        if (index === -1) return
        this.items.splice(index, 1)
    }

    updateNote(text, priority) {
        const index = this.items.findIndex((note) => note.text === text)
        if (index === -1) return

        this.items[index] = {text, priority}
    }
}

const myNotes = new Notes([]);



// myNotes.addNote({ 
//     text: 'Моя первая заметка',
//     priority: Notes.Priority.NORMAL
//  });

// myNotes.updateNote('Моя первая заметка', Notes.Priority.HIGH) 
// console.log(myNotes.items);
