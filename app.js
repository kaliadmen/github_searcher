
//Init GitHub
const github = new GitHub();
//Init UI
const ui = new UI();


//search input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup', (e) => {
//    get input text
    userText = e.target.value;
    if(userText !== ''){
//        make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message !== 'Not Found'){
//                show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                
                
            }else{
//                show alert
                ui.showAlert('User not Found', 'alert alert-danger');
            }
        });
    }else{
//        clear profile
        ui.clearProfile();
        
    }
});