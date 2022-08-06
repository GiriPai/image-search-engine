import axios from 'axios'
import { useEffect, useState } from 'react'
import { TImage } from '../global/types'

const API_KEY = process.env.REACT_APP_API_KEY

export default function useImageSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [images, setImages] = useState<TImage[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setImages([])
  }, [query])

  useEffect(() => {
    if (!query) return
    setLoading(true)
    setError(false)

    let cancel: Function
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api`, {
      params: { key: API_KEY, q: query.replace(" ", "+"), page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setImages(prevImgs =>
        [
          ...new Map([...prevImgs, ...res.data.hits]
            .map((item) => [item["id"], item])).values()
        ],
      )
      setHasMore(res.data.totalHits > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })

    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, images, hasMore }
}