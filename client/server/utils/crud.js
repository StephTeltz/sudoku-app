// Generalized implementation of controllers

export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.create();
    if (!doc) {
      return res.status(400).end();
    }
    return res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const updatedDoc = await model.update(req.body);

    if (!updatedDoc) {
      return res.status(400).end();
    }
    return res.status(200).json(updatedDoc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  getOne: getOne(model),
  updateOne: updateOne(model),
});
