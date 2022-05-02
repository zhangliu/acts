import { Button, NavBar, Modal } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { TeamOutline } from 'antd-mobile-icons'
import qrCode from './assert/imgs/qrCode.jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const navigate = useNavigate()

  const showModal = () => {
    Modal.alert({
      content: (
        <div>
          <div>请在群里 @群主 您的信息：</div>
          <img className="w:100%" src={qrCode} />
        </div>
      )
    })
  }

  return (
    <div>
      <div className='bgc:efefef'>
        <NavBar
          onBack={() => navigate(-1)}
          right={<Button onClick={showModal} color='primary' size='mini'>发布信息</Button>}
        >
            <div onClick={() => navigate('/person')}>马鞍山单身群</div>
        </NavBar>
      </div>
      {/* <Tabs>
        <Tabs.Tab title='征友' key='personInfo'>
          菠萝
        </Tabs.Tab>
        <Tabs.Tab title='活动' key='activities'>
          西红柿
        </Tabs.Tab>
        <Tabs.Tab title='聊吧' key='animals'>
          蚂蚁
        </Tabs.Tab>
      </Tabs> */}
      <div className='pt:16'>
        {props.children}
      </div>
    </div>
  )
}
