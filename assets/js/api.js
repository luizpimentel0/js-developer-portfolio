async function fetchProfileData() {
  const url = 'data/profile.json';
  const response = await fetch(url);
  console.log(response);
  return await response.json();
}
