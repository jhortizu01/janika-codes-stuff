export const fetchData = () => {
  return fetch('https://janika-project-data.herokuapp.com/api/v1/projects')
  .then(response => response.json())
  .catch(err => console.log(err))
}
