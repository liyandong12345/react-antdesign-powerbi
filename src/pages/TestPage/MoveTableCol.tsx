import React from 'react';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview';

export default class MoveTableCol extends React.Component<any, any> {
    dragProps: any;
    // dragProps: { onDragEnd(fromIndex: any, toIndex: any): void; nodeSelector: string; };
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    key: "1",
                    name: "Boran",
                    gender: "male",
                    age: "12",
                    address: "New York"
                },
                {
                    key: "2",
                    name: "JayChou",
                    gender: "male",
                    age: "38",
                    address: "TaiWan"
                },
                {
                    key: "3",
                    name: "Lee",
                    gender: "female",
                    age: "22",
                    address: "BeiJing"
                },
                {
                    key: "4",
                    name: "ChouTan",
                    gender: "male",
                    age: "31",
                    address: "HangZhou"
                },
                {
                    key: "5",
                    name: "AiTing",
                    gender: "female",
                    age: "22",
                    address: "Xi’An"
                }
            ],
            columns: [
                {
                    title: "Key",
                    dataIndex: "key"
                },
                {
                    title: "Name",
                    dataIndex: "name"
                },
                {
                    title: "Gender",
                    dataIndex: "gender"
                },
                {
                    title: "Age",
                    dataIndex: "age"
                },
                {
                    title: "Address",
                    dataIndex: "address"
                }
            ]
        };
    }

    render() {

        const dragProps = {
            onDragEnd: (fromIndex: any, toIndex: any) => {
                const columns = this.state.columns;
                const item = columns.splice(fromIndex, 1)[0];
                columns.splice(toIndex, 0, item);
                this.setState({
                    columns
                });
            },
            nodeSelector: "th"
        };

        console.log(this.state.columns)

        return (
            <div style={{ margin: 20 }}>
                <h2>Table column with dragging</h2>
                <ReactDragListView.DragColumn {...dragProps}>
                    <Table
                        columns={this.state.columns}
                        pagination={false}
                        dataSource={this.state.data}
                        bordered
                        size='small'
                    />
                </ReactDragListView.DragColumn>
            </div>
        );
    }
}