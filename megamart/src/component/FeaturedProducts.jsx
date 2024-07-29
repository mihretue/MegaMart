import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import {Avatar, Card} from 'antd'

const {Meta} = Card;
export default function FeaturedProducts() {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
<Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  </div>
  )
}
