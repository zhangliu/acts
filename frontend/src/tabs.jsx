import { Tabs } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const activeKey = location.pathname.split('/')[1] || 'person'
  const onChange = (key) => navigate(`/${key}`)
  return (
    <Tabs activeKey={activeKey} onChange={onChange}>
      <Tabs.Tab title='征友信息' key='person'>
        {props.children}
      </Tabs.Tab>
      <Tabs.Tab title={<div className='c:999'>线下活动（建设中...)</div>} key='activity'>
        <div>开发中...</div>
      </Tabs.Tab>
    </Tabs>
  )
}
