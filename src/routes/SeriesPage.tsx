import { useParams } from 'react-router-dom'
const SeriesPage = () => {
    const { id } = useParams();
  return (
    <div>
      Series Id {id} 
    </div>
  )
}

export default SeriesPage