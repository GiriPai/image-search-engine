import { useCallback, useRef } from 'react'
import { Figure } from 'react-bootstrap'
import { TImage } from '../../global/types'
import Alert from '../common/Alert/Alert'
import Spinner from '../common/Spinner/Spinner'

type ImgListProps = {
  loading: boolean,
  error: boolean,
  images: TImage[],
  hasMore: boolean,
  setPageNumber: (value: number | ((prevPageNumber: number) => number)) => void
}

const ImgList = ({ loading, error, images, hasMore, setPageNumber }: ImgListProps) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const lastNodeElementRef = useCallback((node: HTMLImageElement) => {
    if (loading) return
    // Disconnecting old observer (if any)
    if (observer.current) observer.current.disconnect()
    // Updating page number as and when intersection observer meets
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    // Setting to observe a node when node exists
    if (node) observer.current.observe(node)
  }, [loading, hasMore, setPageNumber])

  if (error) {
    return <Alert variant='danger' >Something went wrong!  Please try again later.</Alert>
  }


  return (
    <>
      <Figure className="text-center">
        {images.map((imgData, index) => {
          if (images.length === index + 1) {
            // Adding ref to the last element of current iteration
            return <Figure.Image
              ref={lastNodeElementRef}
              key={imgData.id}
              className="m-1"
              width={240}
              height={260}
              src={imgData.userImageURL}
            />
          } else {
            // No ref
            return <Figure.Image key={imgData.id}
              className="m-1"
              width={240}
              height={260}
              src={imgData.userImageURL}
            />
          }
        })}
      </Figure>
      {loading && <Spinner />}
      {!loading && !images.length && <Alert variant="info">No results found. Try searching with different query...</Alert>}
      {images.length && !hasMore ?
        <Alert variant="info">You've reached the end.  Try searching with different query...</Alert> : ""}
    </>
  )
}

export default ImgList