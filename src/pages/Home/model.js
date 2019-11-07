
import axios from 'axios';

export default class {
    name = 'dp'
    data = {}

    methods = {
        createPage(store) {
            return axios.post('/create_page');
        }
    }
}