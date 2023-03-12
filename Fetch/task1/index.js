async function getUsers(names) {
    let array = []
    
    names.forEach(name => {
      let data = fetch(`https://api.github.com/users/${name}`)
      .then( res => {
            console.log(res.status)
            if (res.status != 200) {
                return null;
            } else {
                return res.json()
            }
        })
      
        array.push(data)
    })
    
    let results = await Promise.all(array);
    console.log(results)
    return results
  }
  

  
getUsers(['iliakan', 'remy', 'no.such.users']) 