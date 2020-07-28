
import axios from 'axios';
import message from 'antd/lib/message';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class {
    constructor() {}

    didMount = () => {
        this.getDataList();
    }
    
    getDataList() {
        this.models.main.getDataList()
            .then((res) => {
                this.models.main.set({
                    dataMap: res.data
                });
            });
    }

    delDataItem = (key) => {
        return () => {
            this.models.main.delItem(key)
                .then(() => {
                    message.success('删除成功');
                    this.getDataList();
                });
        }
    }

    saveData = () => {
        const state = this.models.main.get();

        if(!state.inputKey || !state.inputValue) {
            message.error('键值不能为空');
        }
        else {
            this.models.main.saveData(state.inputKey, state.inputValue)
                .then((res) => {
                    message.success('保存成功');
                    this.models.main.set({
                        inputKey: '',
                        inputValue: ''
                    });
                    this.getDataList();
                });
        }
    }

    changeVale = (key) => {
        return (e) => {
            this.models.main.set({
                [key]: e.target.value
            });
        }
    }
}