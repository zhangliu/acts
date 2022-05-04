import { List, Tag } from 'antd-mobile'
import { UserOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import persons from '../../personData'
import DiffTime from './diffTime'
import InfoTag from './infoTag'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate()
  const goDetail = (id) => navigate(`/person/detail/${id}`)

  const renderPerson = (person, key) => {
    return (
      <List.Item
        key={key}
        onClick={() => goDetail(person.id)}
        // prefix={<Tag color='success'>空</Tag>}
        description={renderDesc(person)}
        // extra={<Button size='mini' color='primary'>报名</Button>}
      >
        <div className='d:f ai:c'>
          <InfoTag person={person} />
          <div className='of:h ws:n tof:e maw:320'>{person.title}</div>
        </div>
      </List.Item>
    )
  }

  const renderDesc = (person) => (
    <div>
      <div>
        <span className='d:ib mt:2'>
          <UserOutline fontSize={14} className='mr:2' />
          <span>群昵称：{person.nickName}</span>
        </span>
        <span className='o:.8 ml:10 mr:10'>|</span>
        <DiffTime person={person} />
      </div>
      <div className='mt:10 of:h ws:n tof:e maw:320'>{person.detail}</div>
    </div>
  )

  return (
    <div>
      <List header='征友列表'>
        {persons.map(renderPerson)}
      </List>
    </div>
  );
}
