const router = require('express').Router();
const CategoryPhotos = require('../views/Category');
const FormCategory = require('../views/FormCategory');
const Home = require('../views/Home');
const Login = require('../views/Login');
const Portfolio = require('../views/Portfolio');
const Registration = require('../views/Registration');
const { Category, Photo, Like } = require('../../db/models');
const FormPhoto = require('../views/FormPhoto');
const FormCategoryEdit = require('../views/FormCategoryEdit');
const PhotoPage = require('../views/PhotoPage');
const EditPhoto = require('../views/EditPhoto');
const isNotAuth = require('../middleware/isNotAuth');
const isAdmin = require('../middleware/isAdmin');
const Error = require('../views/Error');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.user?.id || 0;
    const categories = await Category.findAll({
      include: [
        {
          model: Photo,
          separate: true,
          limit: 12,
          include: [
            {
              model: Like,
              where: { userId },
              required: false,
            },
          ],
        },
      ],
    });
    res.render(Home, { categories });
  } catch (error) {
    console.log(error);
    res.render(Error, { message: 'Something went wrong...', error: { error } });
  }
});

router.get('/auth/registration', isNotAuth, (req, res) => {
  res.render(Registration);
});

router.get('/auth/login', isNotAuth, (req, res) => {
  res.render(Login);
});

router.get('/portfolio', async (req, res) => {
  try {
    const userId = req?.session.user?.id || 0;
    const categories = await Category.findAll({
      include: [
        {
          model: Photo,
          separate: true,
          limit: 12,
          include: [
            {
              model: Like,
              where: { userId },
              required: false,
            },
          ],
        },
      ],
    });
    res.render(Portfolio, { categories });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});

router.get('/portfolio/new-category', isAdmin, (req, res) => {
  res.render(FormCategory);
});

router.get('/portfolio/:categoryName/edit', isAdmin, async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { categoryName: req.params.categoryName },
    });
    res.render(FormCategoryEdit, { category });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});

router.get('/portfolio/:categoryName', async (req, res) => {
  try {
    const userId = req?.session.user?.id || 0;
    const category = await Category.findOne({
      where: { categoryName: req.params.categoryName },
      include: [
        {
          model: Photo,
          include: [
            {
              model: Like,
              where: { userId },
              required: false,
            },
          ],
        },
      ],
    });
    res.render(CategoryPhotos, { category });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});

router.get('/portfolio/:categoryName/new-photo', isAdmin, async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { categoryName: req.params.categoryName },
    });
    res.render(FormPhoto, { category });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});

router.get('/portfolio/:categoryName/:id', async (req, res) => {
  try {
    const photo = await Photo.findOne({ where: { id: req.params.id } });
    const category = await Category.findOne({
      where: { categoryName: req.params.categoryName },
    });
    res.render(PhotoPage, { photo, category });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});

router.get('/portfolio/:categoryName/:id/edit', isAdmin, async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { categoryName: req.params.categoryName },
    });
    const photo = await Photo.findOne({ where: { id: req.params.id } });
    res.render(EditPhoto, { category, photo });
  } catch (error) {
    res.render(Error, { message: 'Something went wrong...', error: {} });
  }
});
module.exports = router;
