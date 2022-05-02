import { NavBar, Tabs } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className='bgc:efefef'>
        <NavBar onBack={() => navigate(-1)}>马鞍山月老</NavBar>
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
