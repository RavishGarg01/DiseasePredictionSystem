

const options = {
  method: 'GET',
  url: 'https://medical-articles-live.p.rapidapi.com/journals/diabetes',
  headers: {
    'X-RapidAPI-Key': '6a7eb4c3f4msh583c34f62116f9dp108641jsn0bc72eca352b',
    'X-RapidAPI-Host': 'medical-articles-live.p.rapidapi.com'
  }
};


	const response = await axios.request(options);
	console.log(response.data);
 
