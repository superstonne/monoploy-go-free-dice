// pages/api/fetchLinks.js

import { getCachedData } from '../../lib/cache';

export default async function fetchLinks(req, res) {
  console.log("Fetch link request....")
  try {
    // 获取缓存数据
    const data = await getCachedData();
    
    // 返回缓存数据
    res.status(200).json({ links: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
