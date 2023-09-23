
import P from './p'
const getRandomColor = () => {
    const colors = ['bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100', 'bg-gray-100']
    return colors[Math.floor(Math.random() * colors.length)]
  }


const Wish = ({ name, wish }) => {
    return (
        <div className={`p-4 rounded-md ${getRandomColor()} border-4 border-white rotating-wish`}   >
            <p className='text-xl font-sans'>
                {wish}
            </p>
            <p className='text-right font-["Inconsolata"] font-semibold'>-- {name}</p>
        </div>
    )
}

export default Wish