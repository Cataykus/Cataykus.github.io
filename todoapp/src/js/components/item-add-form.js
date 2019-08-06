import React from "react";

export default class ItemAddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            label: ""
        }
        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            });
        };
        this.onSubmit = (e) => {
            const { onAddItem } = this.props;
            e.preventDefault();
            onAddItem(this.state.label);
            this.setState({
                label: ""
            });
        }
    }

    render() {
        return (
            <form className="form-inline item-add-form" onSubmit={this.onSubmit}>
                <input type="text" className="form-control mr-1" onChange={this.onLabelChange}
                    placeholder="What need to be done" value={this.state.label} />
                <button className="btn btn-outline-success">Add Item</button>
            </form>
        );
    }
}