import React from 'react';
import {render} from 'ader';
import MainAction from '../../actions/MainAction';
import './index.less';
import { Button, Input } from 'antd';

export default render({
    actions: {
        main: MainAction
    }
})(({props, state, action}) => {
    const {main} = props;

    return (
        <div className="page-wrapper">
            <div className="input-bar">
                键：
                <span className="input-wrapper">
                    <Input 
                        value={main.inputKey}
                        onChange={action.main.changeVale('inputKey')}    
                    />
                </span>
                值：
                <span className="input-wrapper">
                    <Input 
                        value={main.inputValue}
                        onChange={action.main.changeVale('inputValue')}
                    />
                </span>
                <Button
                    type="primary"
                    onClick={action.main.saveData}
                >
                    保存
                </Button>
            </div>
            <div className="data-show-list">
                {Object.keys(main.dataMap).map((key) => {
                    return (
                        <div 
                            className="show-bar"
                            key={key}
                        >
                            <span className="show-item">{key}:</span>
                            <span className="show-item">{main.dataMap[key]}</span>
                            <Button
                                size="small"
                                className="del-button"
                                onClick={action.main.delDataItem(key)}
                            >
                                删除
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

});