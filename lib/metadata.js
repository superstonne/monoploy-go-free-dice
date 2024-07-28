// lib/metadata.js
import { headers } from 'next/headers'

export function generateCanonicalUrl(params) {
  const headersList = headers()
  const host = headersList.get('host') || 'www.monopoly-go-free-dice.com'
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  
  // 尝试从 x-invoke-path 获取路径
  let path = headersList.get('x-invoke-path') || ''

  console.log('Generating canonical URL:')
  console.log('Host:', host)
  console.log('Protocol:', protocol)
  console.log('Path from headers:', path)
  console.log('Lang:', params.lang)

  // 如果 path 是空的，我们可以尝试从 params 构建路径
  if (!path && params.slug) {
    path = `category/${params.slug}`
  }

  // 确保 path 不以 '/' 开头
  path = path.startsWith('/') ? path.slice(1) : path

  // 移除路径中的语言代码（如果存在）
  path = path.replace(/^[a-z]{2}\//, '')

  // 构建 URL，确保语言代码在正确的位置
  const url = `${protocol}://${host}/${params.lang}${path ? `/${path}` : ''}`
  
  console.log('Generated URL:', url)

  return url
}