 function groupe(arr, prop) {
return arr.reduce((initialValue, value)=>{
	if(initialValue[value[prop]]){
  	initialValue[value[prop]].push(value)
  }
  else {
  initialValue[value[prop]] = [value]
  }
  return initialValue
}, {})
}

groupe([{
    name: 'Alice',
    job: 'Data Analyst',
    country: 'AU'
  },
  {
    name: 'Bob',
    job: 'Pilot',
    country: 'US'
  },
  {
    name: 'Lewis',
    job: 'Pilot',
    country: 'US'
  },
  {
    name: 'Karen',
    job: 'Software Eng',
    country: 'CA'
  },
  {
    name: 'Jona',
    job: 'Painter',
    country: 'CA'
  },
  {
    name: 'Jeremy',
    job: 'Artist',
    country: 'SP'
  },
], 'job')
