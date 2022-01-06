# Personal portfolio

## Notes:

For now the API Tester, in the request field, the data needs to be written in JSON format (with double quotes and without trailing commas).

### Examples of requests:

#### GET all:

URI: http://localhost:3001/api/notes

#### GET one:

URI: http://localhost:3001/api/notes/id

#### POST:

URI: http://localhost:3001/api/notes

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509%2522content%2522%253A%2520%2522new%2520note%2522%252C%250A%2509%2522important%2522%253A%2520true%252C%250A%2509%2522userId%2522%253A%2520%252261d3875c555ed6bdfaa4f978%2522%250A%257D"
  style="width: 487px; height: 249px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

#### PUT:

URI: http://localhost:3001/api/notes/id

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509%2522content%2522%253A%2520%2522updated%2520content%2522%252C%250A%2509%2522important%2522%253A%2520true%250A%257D"
  style="width: 428px; height: 230px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

#### DELETE:

URI: http://localhost:3001/api/notes/id
