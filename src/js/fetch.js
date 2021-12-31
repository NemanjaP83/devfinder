const input = document.querySelector('.user__input');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('#result');
const userName = document.querySelector('#user_name');
const date = document.querySelector('#date');
const login = document.querySelector('#login');
const profile_bio = document.querySelector('#profile_bio');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const location = document.querySelector('#location');
const twitter = document.querySelector('#twitter');
const blog = document.querySelector('#blog');
const company = document.querySelector('#company');
let query = 'octocat';

async function getGithubUser(query) {
  const baseUrl = `https://api.github.com/users/`;
  try {
    let user = '';
    let res = await fetch(baseUrl + `${query}`);
    user = await res.json();
    showData(user);
    if (user.message) {
      errorMsg.innerText = user.message;
    } else {
      errorMsg.innerText = '';
    }
    return user;
  } catch (error) {
    errorMsg.innerText = error.message;
  }
}

const showData = (user = '') => {
  userName.innerText = user.name || 'Unknown';
  date.innerText = user.created_at
    ? (user.created_at =
        'Joined ' +
        new Date(user.created_at).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }))
    : '';
  login.innerText = '@' + user.login;
  profile_bio.innerText = user.bio || 'This profile has no bio';
  repos.innerText = user.public_repos || '0';
  followers.innerText = user.followers || '0';
  following.innerText = user.following || '0';
  location.innerText = user.location || 'Not Available';
  twitter.innerText = user.twitter_username || 'Not Available';
  blog.innerText = user.blog || 'Not Available';
  blog.href = user.blog ? user.blog : '';
  blog.target = '_blank';
  company.innerText = user.company || 'Not Available';
};

btn.addEventListener('click', () => {
  query = input.value.trim();
  getGithubUser(query);
});

(() => {
  getGithubUser(query);
  showData();
})();
