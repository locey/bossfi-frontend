'use server'

import dynamic from 'next/dynamic'

const Profile = dynamic(() => import('./profile'), {
  ssr: true,
})
const mockUser = {
  name: 'Userofil',
  desc: '区块链技术爱好者，Web3开发者',
  avatar: '',
  joinDate: '2024年7月2日',
  postCount: 4,
  commentCount: 48,
  joinTime: '2024年7月2日',
}

const mockPosts = [
  {
    id: 0,
    title: '用户 ofil 的帖子 0',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年4月15日',
    tag: '招聘',
    likes: 26,
    comments: 6,
  },
  {
    id: 1,
    title: '用户 ofil 的帖子 1',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年6月2日',
    tag: '讨论',
    likes: 45,
    comments: 0,
  },
  {
    id: 2,
    title: '用户 ofil 的帖子 2',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年3月19日',
    tag: '招聘',
    likes: 2,
    comments: 8,
  },
  {
    id: 3,
    title: '用户 ofil 的帖子 3',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年5月31日',
    tag: '讨论',
    likes: 43,
    comments: 5,
  },
  {
    id: 4,
    title: '用户 ofil 的帖子 4',
    content: '这是用户 ofil 发布的关于区块链的帖子...',
    date: '2025年5月10日',
    tag: '招聘',
    likes: 26,
    comments: 2,
  },
]

const mockComments = [
  {
    id: 1,
    author: 'ofil',
    date: '2025年6月2日',
    content: '这是我在某个帖子下的评论内容...',
  },
  {
    id: 2,
    author: 'ofil',
    date: '2025年5月10日',
    content: '另一个参与讨论的评论...',
  },
]
export default async function Page() {
  console.log('Page start')
  await new Promise(resolve => setTimeout(resolve, 10000))
  console.log('Page end')
  return <Profile user={mockUser} posts={mockPosts} comments={mockComments} />
}
