

export default class {
    constructor(c) {
        this.c = c;
        this.store = c.props.store;
        this.models = this.store.models;
        this.action = c.action;
    }

    toCreatePage = () => {
        this.models.
        this.c.props.history.push('/create_page');
    }
}