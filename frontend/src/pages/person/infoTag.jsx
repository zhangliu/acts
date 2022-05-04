import { Tag } from 'antd-mobile'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ person }) => {
  if (!person.from) return <Tag className='mr:4' color="success">个人</Tag>
  return  <Tag className='mr:4' color="warning">婚介</Tag>
}