


module.exports = {
    checkUser: async function() {

        let result = '';
        this.ctx.req.on('data', (data) => {
            result += data;
        });

        this.ctx.req.on('end', () => {
            console.log(result);
        });

        return {
            status: 'success'
        };
    }
};