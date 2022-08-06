import TImage from "./TImage"

type TSearchApiRes = {
  total: number,
  totalHits: number,
  hits: TImage[]
}

export default TSearchApiRes