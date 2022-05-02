import { Button, Card, Modal } from 'antd-mobile'
import { UserOutline } from 'antd-mobile-icons'
import { useParams } from 'react-router-dom'
import persons from '../../personData'
import DiffTime from './diffTime'
import qrCode from '../../assert/imgs/qrCode.jpeg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const params = useParams()
  const person = persons.find(p => p.id === +params.id)
  if (!person) throw new Error('can not find person!')

  const sex = person.sex === 'boy' ? '男' : '女'

  const getDesc = () => {
    return (
      <div>
        <div>
          <span>
            <UserOutline fontSize={14} className='mr:2' />
            <span>{person.nickName}</span>
          </span>
          <span className='o:.8 ml:10 mr:10'>|</span>
          <DiffTime person={person} />
        </div>
        <div className='mt:20'>
          {person.detail}
        </div>
      </div>
    )
  }

  const showModal = () => {
    Modal.alert({
      content: (
        <div>
          <div>请在群里根据昵称查找该{sex}士：</div>
          <img className='w:100%' src={qrCode} />
        </div>
      )
    })
  }

  return (
    <div>
      <Card title={person.title} onClick={() => {}}>
        {getDesc()}
        <div className='mt:40 d:f jc:c'>
          <Button onClick={showModal} color='primary' className='w:60%'>联系该{sex}士</Button>
        </div>
      </Card>
    </div>
  );
}
