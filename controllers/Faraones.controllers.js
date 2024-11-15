const Faraon = require('../models/Faraones.models');

const getFaraones = async (req, res) => {
  try {
    const faraon = await Faraon.find({})
    res.status(200).json(faraon)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

const getFaraon = async (req, res) => {
  try {
    const { id } = req.params
    const faraon = await Faraon.findById(id)
    res.status(200).json(faraon)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createFaraon = async (req, res) => {
  try {
    const faraon = await Faraon.create(req.body)

    res.status(200).json(faraon)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateFaraon = async (req, res) => {
  try {
    const { id } = req.params;

    const faraon = await Faraon.findByIdAndUpdate(id, req.body);

    if (!faraon) {
      return res.status(404).json({ message: 'Fauna no encontrada' });
    }

    const updateFaraon = await Faraon.findById(id);

    res.status(200).json(updateFaraon);



  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Eliminar un animal
const deleteFaraon = async (req, res) => {
  try {
    const { id } = req.params;
    const faraon = await Faraon.findByIdAndDelete(id);

    if (!faraon) {
      return res.status(404).json({ message: 'Faraon no encontrada' });
    }


    res.status(200).json({ message: "Faraon borrado con exito" })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFaraones,
  getFaraon,
  createFaraon,
  updateFaraon,
  deleteFaraon
};