const githubApi = `https://api.github.com/search/users?q=`;

async function getUsers(userName) {
  const response = await fetch(`${githubApi}${userName}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.statusText;
  }
}

export {getUsers};