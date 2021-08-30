const express = require("express");

const router = express.Router();

// ImportMiddleware
const { AuthMiddleware } = require("../middleware/Auth");
const { UploadFiles } = require("../middleware/UploadFiles");

// TodosRouter
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
} = require("../controllers/versi1/Todos");

router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todos", addTodo);
router.patch("/updatetodo/:id", updateTodoPatch);
router.put("/updatetodo-put/:id", updateTodoPut);
router.delete("/deletetodo/:id", deleteTodo);
// EndTodosRouter

// UsersRouter
const {
  getUsers,
  getUsersHasManyTransaction,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/versi1/User");

router.get("/users", getUsers);
router.get("/users-transaction", getUsersHasManyTransaction);
router.get("/user/:id", getUserById);
router.post("/add-user", addUser);
router.patch("/update-user/:idparam", updateUser);
router.delete("/delete-user/:idparam", deleteUser);
// EndUsersRouter

// ArtistRoute
const {
  getArtists,
  getArtistsHasManyMusic,
  getArtistById,
  addArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/versi1/Artist");

router.get("/artists", getArtists);
router.get("/artists-music", getArtistsHasManyMusic);
router.get("/artist/:idParam", getArtistById);
router.post("/add-artist", addArtist);
router.patch("/update-artist/:idParam", updateArtist);
router.delete("/delete-artist/:idParam", deleteArtist);
// EndArtistRoute

// MusicRoute
const {
  getMusics,
  getMusicsBelongstoArtis,
  getMusictById,
  addMusic,
  addMusicWithFile,
  updateMusic,
  deleteMusic,
} = require("../controllers/versi1/Music");

router.get("/musicspublic", getMusics);
router.get("/musics-artist-public", getMusicsBelongstoArtis);
router.get("/musics-artist-user", AuthMiddleware, getMusicsBelongstoArtis);
router.get("/music/:idParam", getMusictById);
router.post("/add-music", addMusic);
router.post(
  "/add-music-file",
  UploadFiles("imageFile", "audioFile"),
  addMusicWithFile
);
router.patch("/update-music/:idParam", updateMusic);
router.delete("/delete-music/:idParam", deleteMusic);
// EndMusicRoute

// AuthorRoute
const {
  getAuthors,
  getAuthorsBelongsToManyBook,
} = require("../controllers/versi1/Author");

router.get("/authors", getAuthors);
router.get("/authors-book", getAuthorsBelongsToManyBook);
// router.get("/artist/:idParam", getArtistById);
// router.post("/add-artist", addArtist);
// router.patch("/update-artist/:idParam", updateArtist);
// router.delete("/delete-artist/:idParam", deleteArtist);
// EndAuthorRoute

// AuthorRoute
const {
  getBooks,
  getBooksBelongsToManyAuthor,
} = require("../controllers/versi1/Book");

router.get("/books", getBooks);
router.get("/book-author", getBooksBelongsToManyAuthor);
// router.get("/artist/:idParam", getArtistById);
// router.post("/add-artist", addArtist);
// router.patch("/update-artist/:idParam", updateArtist);
// router.delete("/delete-artist/:idParam", deleteArtist);
// EndAuthorRoute

// AuthRoute
const {
  registerAuth,
  loginAuth,
  checkAuth,
} = require("../controllers/versi1/Auth");

router.post("/register", registerAuth);
router.post("/login", loginAuth);
router.get("/check-auth", AuthMiddleware, checkAuth);
// EndAuthRoute

// TransactionRoute
const {
  getTransactionsHasManyUser,
  Pay,
} = require("../controllers/versi1/Transaction");

// router.post("/pay", UploadFiles("imageFile"), Pay);
router.get("/transactions-user", getTransactionsHasManyUser);
router.post("/pay", Pay);
// EndAuthRoute

module.exports = router;
