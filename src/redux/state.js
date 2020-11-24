import { renderPage } from './../render';
let state = {
    profilePage: {
        posts: [{
            id: 1,
            message: 'Hello how are you',
            likesCount: 12
        },
        {
            id: 2,
            message: 'Hello whot uoy are doing',
            likesCount: 515
        },
        {
            id: 3,
            message: 'Fuck you',
            likesCount: 10
        }

        ],
        newPostText: 'it kamassutra'
    },
    messagesPage: {
        message: [{
            id: 1,
            message: 'Fuck you'
        },
        {
            id: 2,
            message: 'Ivan fddf'
        },
        {
            id: 3,
            message: 'Stapanfdfdfdfd'
        },
        {
            id: 4,
            message: 'Tarasfdfdfdfdfd'
        }

        ],
        dialog: [{
            id: 1,
            name: 'Roman'
        },
        {
            id: 2,
            name: 'Ivan'
        },
        {
            id: 3,
            name: 'Stapan'
        },
        {
            id: 4,
            name: 'Taras'
        }

        ]
    }
};


export let addPost = (postMessage) => {
    let post = {
        id: 5, 
        message: postMessage,
        likesCount: 25
    }
    console.log(state.profilePage.posts);
state.profilePage.posts.push(post);
renderPage(state);
}


export default state;