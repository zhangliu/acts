import { List, Tag, Button } from 'antd-mobile'
import { UserOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate()
  const goDetail = () => navigate('/person/detail')

  const desc = (
    <div>
      <div>
        <span className='d:ib mt:2'>
          <UserOutline fontSize={14} className='mr:2' />
          <span>一生的朋友</span>
        </span>
        <span className='o:.8 ml:10 mr:10'>|</span>
        <span>5 分钟前</span>
      </div>
      <div className='mt:10 of:h ws:n tof:e maw:320'>
      独女，马鞍山本地人，1993年，身高165，全日制大专，父母做生意，家庭条件优，市区和泰国际一套房，当涂县城一套房。寻1985年后未婚男士，身高175以上，大专以上学历，有正式工作（劳务派遣的不行），有意请私聊我。
      </div>
    </div>
  )
  return (
    <div>
      <List header='征友列表'>
        <List.Item
          onClick={() => goDetail()}
          // prefix={<Tag color='success'>空</Tag>}
          description={desc}
          // extra={<Button size='mini' color='primary'>报名</Button>}
        >
          <div>
            93 年女找男年女找男
          </div>
        </List.Item>
      </List>
    </div>
  );
}
