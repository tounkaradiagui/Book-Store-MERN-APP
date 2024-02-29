import React, {useState} from 'react'
import BackButton from './../../components/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading,  setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:8001/books/${id}`).then(()=> {
      setLoading(false);
      navigate('/');
    }).catch((err)=>{
      setLoading(false);
      console.log(err)
    });
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h2 className="text-3xl font-bold">Delete this book?</h2>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3>Are you sure you want to delete this book ? This action cannot be undone.</h3>
          <button onClick={handleDelete} className='p-4 bg-red-600 text-white m-8 w-full'>Yes Delete it</button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook
