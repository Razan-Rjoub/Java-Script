fetch( 'test.json')
  .then(response => response.json())
  .then(data => {
    for(let i=0;i<4;i++)
    console.log(data[i].name); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });