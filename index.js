fetchUserData();
async function fetchUserData() {
  let usersData;
  try {
    // Fetch the data from the API endpoint
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // Check if the response is successful
    if (response.ok) {
      usersData = await response.json(); // Parse the JSON body content
      
    }

     // console.log(usersData);
      const modifiedUserData=[];
      // Create a new user object with the modified fields
      usersData.map((user)=>{
      const modifiedUser = {
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address.street,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
      }
      modifiedUserData.push(modifiedUser);
      const filterUser=modifiedUserData.filter(el=>el.email.includes(`.biz`));
      console.log(filterUser);
      const sortData=modifiedUserData.sort((a,b)=> a.name.localeCompare(b.name));
     console.log(sortData );
    }
  )
    // Return the users data
   // console.log(modifiedUserData);
    return (modifiedUserData.filter(el=>el.email.includes(`.biz`)));

  } catch (error) {
    // Handle the error
    console.log(error);
  }
}