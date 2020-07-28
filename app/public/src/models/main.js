import axios from 'axios';

export default class {
    name = 'main'

    data = {
        inputKey: '',
        inputValue: '',
        dataMap: {}
    }

    delItem(key) {
        return axios.post(
            '/delItem',
            {
                key: key
            }
        );
    }

    saveData(key, value) {
        return axios.post(
            '/saveData',
            {
                [key]: value
            }
        );
    }

    getDataList() {
        return axios.get(
            '/getDataList'
        )
            .then((res) => {
                return res.data;
            });
    }
}