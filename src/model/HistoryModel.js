const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

const historyRef = db.collection('predicts');

const getAllHistories = async (user_id, page) => {

    const perPage = 10
    try {


        const getDocs = await historyRef.where('user_id', '==', user_id).get();

        const allDocs = []

        getDocs.forEach(item => {
            const id = item.data().user_id;
            const data = item.data().prediction;
            const timestamp = item.createTime.seconds;

            const datas = {
                user_id: id,
                timestamp,
                data
            }
            allDocs.push(datas);
        });
        
        const sortedHistory = allDocs.sort((a, b) => b.timestamp - a.timestamp);
        const freshData = sortedHistory.map(data => ({
            user_id: data.user_id,
            prediction: data.data

        }))

        const start = (page - 1) * perPage
        const end = start + perPage

        const appear = freshData.slice(start, end);
        
        return appear;
    } catch (error) {
        throw new Error('Internal server error!');
    }

}

module.exports = { getAllHistories }