const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

const historyRef = db.collection('predicts');

const getAllHistories = async (user_id, page) => {
    // const user_id = req.params.id

    const perPage = 2
    try {


        const getDocs = await historyRef.where('user_id', '==', user_id).get();

        const allDocs = []

        // getDocs.forEach(item => allDocs.push(item.data()));
        getDocs.forEach(item => {
            const id = item.data().user_id;
            const data = item.data().prediction;
            const timestamp = item.createTime.seconds;

            const datas = {
                user_id: id,
                timestamp,
                data
            }
            // console.log(datas);
            allDocs.push(datas);
            // data.forEach(pred => console.log(pred))
        });
        // console.log('unsorted');
        // console.log(allDocs);

        // console.log(allDocs.user_id);
        // allDocs.forEach

        const sortedHistory = allDocs.sort((a, b) => b.timestamp - a.timestamp);
        // console.log('sorted');
        // console.log(sortedHistory);
        const freshData = sortedHistory.map(data => ({
            user_id: data.user_id,
            prediction: data.data

        }))
        // console.log(freshData);

        const start = (page - 1) * perPage
        const end = start + perPage

        const appear = freshData.slice(start, end);
        console.log(appear);
        return appear;
    } catch (error) {
        throw new Error('Internal server error!');
    }

}

module.exports = { getAllHistories }