import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'

const ShowBook = ()  => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8001/books/${id}`).then((res) => {
      setBook(res.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Infos du Livre</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>ID :</span>
            <span>{book._id}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Titre :</span>
            <span>{book.title}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Auteur :</span>
            <span>{book.author}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Année de Publication :</span>
            <span>{book.publishYear}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Date de créations :</span>
            <span>{new Date(book.createdAt).toLocaleString('fr-FR')} </span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Date de mise à jour :</span>
            <span>{new Date(book.updatedAt).toLocaleString('fr-FR')} </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook