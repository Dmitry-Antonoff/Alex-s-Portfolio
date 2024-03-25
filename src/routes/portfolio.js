const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { Category, Photo, Like } = require('../../db/models');

router.post('/new-category', async (req, res) => {
  try {
    const { categoryName } = req.body;
    await Category.create({ categoryName });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { categoryName, categoryId } = req.body;
    await Category.update({ categoryName }, { where: { id: categoryId } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const photos = await Photo.findAll({
      where: { categoryId: req.params.id },
    });

    photos.forEach((photo) => {
      fs.unlinkSync(
        path.join(__dirname, '..', '..', 'public', photo.photoPath),
      );
    });
    await Category.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'public/photos'));
  },
  filename(req, file, cb) {
    const photoName = req.body.photoName.replace(/\s/g, '-');
    const filename = photoName + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage });

router.post('/:categoryName', upload.single('photo'), async (req, res) => {
  const { photoName, description } = req.body;
  const category = await Category.findOne({
    where: { categoryName: req.params.categoryName },
  });
  try {
    await Photo.create({
      name: photoName,
      description,
      photoPath: `/photos/${req.file.filename}`,
      categoryId: category.id,
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.delete('/:categoryName/:id', async (req, res) => {
  try {
    const photo = await Photo.findOne({ where: { id: req.params.id } });

    fs.unlinkSync(path.join(__dirname, '..', '..', 'public', photo.photoPath));
    await Photo.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.put('/:categoryName/:id', async (req, res) => {
  try {
    const { photoName, description } = req.body;
    await Photo.update(
      { name: photoName, description },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.post('/:categoryName/:id/like', async (req, res) => {
  try {
    const { user } = req.session;
    await Like.create({ userId: user.id, photoId: +req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

router.delete('/:categoryName/:id/like', async (req, res) => {
  try {
    const { user } = req.session;
    await Like.destroy({ where: { userId: user.id, photoId: +req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Something went wrong...', error: { error } }, 500);
  }
});

module.exports = router;
