import React, {useState} from 'react'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post('http://localhost:8001/books', data).then((res) => {
      setLoading(false);
      navigate('/');
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4 font-bold">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Titre</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Auteur</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          <div className='my-4'>
            <label htmlFor="" className='text-xl mr-4 text-gray-500'>Année de Publication</label>
            <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Enregistrer</button>
        </div> 
      )}
    </div>
  )
}

export default CreateBook
