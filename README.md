# Personal portfolio

## Notes:

For now the API Tester, in the request field, the data needs to be written in JSON format (with double quotes and without trailing commas).

### Examples of requests:

#### POST:

URI: http://localhost:3001/api/notes
{
"content": "new note",
"important": true,
"userId": "61d3875c555ed6bdfaa4f978"
}

#### PUT:

URI: http://localhost:3001/api/notes/:id
{
"content": "new content",
"important": true
}
