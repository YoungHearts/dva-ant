import { connect } from "dva";
import React from "react";
import { Table, Pagination, Popconfirm } from "antd";
import { routerRedux } from "dva/router";
import styles from "./Users.css";
import { PAGE_SIZE } from "../constants";
import UserModal from "./UserModal";
import Filter from "./Filter";

class Users extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  deleteHandler(id) {
    const { dispatch } = this.props;
    dispatch({
      type: "users/remove",
      payload: id
    });
  }
  pageChangeHandler(page) {
    const { dispatch } = this.props;
    const values = "";
    dispatch(
      routerRedux.push({
        pathname: "/users",
        query: { page, values }
      })
    );
  }
  editHandler(id, values) {
    const { dispatch } = this.props;
    //编辑
    dispatch({
      type: "users/patch",
      payload: { id, values }
    });
  }
  render() {
    const columns = [
      {
        title: "会员姓名",
        dataIndex: "userName",
        key: "userName",
        render: text => <a href="">{text}</a>
      },
      {
        title: "奖品名称",
        dataIndex: "prizeName",
        key: "prizeName"
      },
      {
        title: "是否使用",
        dataIndex: "isConvert",
        key: "isConvert"
      },
      {
        title: "中奖时间",
        dataIndex: "createDate",
        key: "createDate"
      },
      {
        title: "Operation",
        key: "operation",
        render: (text, record) => (
          <span className={styles.operation}>
            <UserModal
              record={record}
              onOk={this.editHandler.bind(null, record.id)}
            >
              <a>Edit</a>
            </UserModal>
            <Popconfirm
              title="Confirm to delete?"
              onConfirm={this.deleteHandler.bind(null, record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </span>
        )
      }
    ];
    const filterProps = {
      createHandler(values) {
        dispatch({
          type: "users/create",
          payload: values
        });
      },
      onFilterChange(values) {
        const page = 1;
        dispatch({
          type: "users/search",
          payload: { page, values }
        });
      }
    };
    const {
      dispatch,
      list: dataSource,
      loading,
      total,
      page: current
    } = this.props;
    return (
      <div className={styles.normal}>
        <div>
          <div className={styles.create}>
            <Filter {...filterProps} />
          </div>
          <Table
            loading={loading}
            bordered={true}
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
          />
          <Pagination
            className="ant-table-pagination"
            total={total}
            current={current}
            pageSize={PAGE_SIZE}
            onChange={this.pageChangeHandler}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page,
    loading: state.loading.models.users
  };
}

export default connect(mapStateToProps)(Users);
