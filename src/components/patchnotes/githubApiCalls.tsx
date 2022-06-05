export const getGithubUser = async(user: string): Promise<any> => {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {return data});
}