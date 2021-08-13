const express = require("express");

const router = express.Router();

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
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/versi1/User");

router.get("/users", getUsers);
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
} = require("../controllers/versi1/Atist");

router.get("/artists", getArtists);
router.get("/artists-music", getArtistsHasManyMusic);
router.get("/artist/:idParam", getArtistById);
router.post("/add-artist", addArtist);
router.patch("/update-artist/:idParam", updateArtist);
router.delete("/delete-artist/:idParam", deleteArtist);
// EndArtistRoute

// ArtistRoute
const { getMusics } = require("../controllers/versi1/Music");

router.get("/musics", getMusics);
// router.get("/artist/:idParam", getArtistById);
// router.post("/add-artist", addArtist);
// router.patch("/update-artist/:idParam", updateArtist);
// router.delete("/delete-artist/:idParam", deleteArtist);
// EndArtistRoute

module.exports = router;
