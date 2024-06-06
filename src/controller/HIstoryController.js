const { getAllHistories } = require("../model/HistoryModel");

const getHistoriesController = async (req, res) => {
    const user_id = req.params.id;
    const page = parseInt(req.query.page) || 1;
    try {
        const history = await getAllHistories(user_id, page)
        if (history.length < 1) {
            return res.status(200).json({
                error: false,
                message: 'Dah Habis!',
                page,
            })
        }
       return  res.status(200).json({
            error: false,
            message: 'Riwayat prediksi',
            page,
            history
        })
    } catch (error) {
       return res.status(400).json({
            error: false,
            message: error.message,

        })
    }
}

module.exports = { getHistoriesController }