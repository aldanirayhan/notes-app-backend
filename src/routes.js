const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Mochamad Rayhan Aldani';
    },
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
];

module.exports = routes;
