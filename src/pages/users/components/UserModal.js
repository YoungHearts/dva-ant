import { Component } from 'react';
import { Modal, Form, Input,Select} from 'antd';
const Option = Select.Option;

const FormItem = Form.Item;

class UserEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk,isCreate } = this.props;
    this.props.form.validateFields((err, values) => {
      let createDate=new Date();
      isCreate&&(values = Object.assign(values, {createDate}));
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children,isCreate } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { userName, prizeName,isConvert,createDate} = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="Edit"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="会员姓名"
            >
              {
                getFieldDecorator('userName', {
                  initialValue: userName,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="奖品名称"
            >
              {
                getFieldDecorator('prizeName', {
                  initialValue: prizeName,
                })(<Input />)
              }
            </FormItem>
            
            <FormItem
              {...formItemLayout}
              label="是否使用"
        >
          {getFieldDecorator('isConvert', {
                  initialValue: isConvert,
                  rules: [
                    { required: false, message: 'Please select your country!' },
                  ],
          })(
            <Select placeholder="请选择"
              // onChange={this.handleSelectChange}
            >
              <Option value='1'>1</Option>
              <Option value='0'>0</Option>
            </Select>
          )}
        </FormItem>
        {!isCreate&&<FormItem
              {...formItemLayout}
              label="中奖时间"
            >
              {
                getFieldDecorator('createDate', {
                  initialValue: createDate,
                })(<Input disabled/>)
              }
            </FormItem>}
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);