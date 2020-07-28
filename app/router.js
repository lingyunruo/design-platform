module.exports = (app) => {

    const {router, controller} = app;

    router.get('/', controller.home.index);
    router.get('/getDataList', controller.home.getDataMap);
    router.post('/saveData', controller.home.saveData);
    router.post('/delItem', controller.home.delItem);
};