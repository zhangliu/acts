import { Card, Tag, Button } from 'antd-mobile'
import { UserOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate()

  const getDesc = () => {
    return (
      <div>
        <div>
          <span>
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
  }

  return (
    <div>
      <Card title='这里是标题' onClick={() => {}}>
        {getDesc()}
        卡片内容
      </Card>
    </div>
  );
}
