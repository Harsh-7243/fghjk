import React, { useState } from 'react';
import { X } from 'lucide-react';

// Initial Indian books
const initialBooks = [
  {
    id: 1,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    coverImage: "https://i.ytimg.com/vi/QjcCmERmIMo/maxresdefault.jpg",
    description: "The God of Small Things, a 1997 novel by Arundhati Roy, is a powerful and complex story about twins Rahel and Estha, set against the backdrop of a tumultuous period in Kerala, India. It explores themes of family, loss, love, and the enduring impact of history, especially the legacy of colonialism and the caste system, on individual lives. The novel is known for its non-chronological narrative, which weaves together past and present events to reveal the interconnectedness of seemingly insignificant moments and their profound effects",
    rating: 4.5
  },
  {
    id: 2,
    title: "Gunahon Ka Devta",
    author: "Dharamveer Bharti",
    coverImage: "https://anuradhagoyal.com/wp-content/uploads/2020/01/gunahon-ka-devta.jpg",
    description: "Gunahon Ka Devta, meaning The God of Sins,is a Hindi novel by Dharamvir Bharati, set in Allahabad, India, in the 1940s. It is a love story about Chander, a young student, and Sudha, the daughter of his professor, exploring themes of love, passion, and societal constraints. The novel depicts the emotional turmoil and consequences of their passionate relationship, particularly when Chander persuades Sudha to marry another man, fulfilling her father's wishes",
    rating: 4.2
  },
  {
    id: 3,
    title: "Shantaram",
    author: "Gregory David Roberts",
    coverImage: "https://miro.medium.com/v2/resize:fit:1200/0*ynIAhSNvogXclKWW.jpg",
    description: "Shantaram is a semi-autobiographical novel by Gregory David Roberts, published in 2003. It tells the story of Lin, an escaped convict with a false passport, who arrives in Bombay (Mumbai) after fleeing Australian prison. The novel explores Lin's journey through the city's underworld, his search for meaning and love, and his involvement in various criminal activities",
    rating: 4.7
  },
  {
    id: 4,
    title: "The Mahabharata: A Modern Rendering",
    author: "Ramesh Menon",
    coverImage: "https://staticimg.amarujala.com/assets/images/2016/04/13/mahabharat-war-krishna-arjun_1460546984.jpeg?w=1200",
    description: "The Mahabharata: A Modern Rendering is a contemporary retelling of the ancient Indian epic, presented in accessible modern prose. It aims to bring the story's grandeur and magic to a modern audience while capturing the same excitement and themes of the original. The book details the events leading up to the Kurukshetra War, the epic battle that brought an end to the Dwapara Yuga and ushered in the present Kali Yuga, or modern times. It also highlights the Bhagavad Gita, a key part of the Mahabharata, where Krishna expounds the principles of dharma to Arjuna",
    rating: 4.3
  },
  {
    id: 5,
    title: "The White Tiger",
    author: "Aravind Adiga",
    coverImage: "https://hellofearless.com/cdn/shop/articles/white-1534797_1920-1-1.jpg?v=1712730427",
    description: "A darkly comic novel about entrepreneurship in modern India...",
    rating: 4.4
  },
  {
    id: 6,
    title: "A Fine Balance",
    author: "Rohinton Mistry",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    description: "Set during the Emergency period of 1970s India, this novel follows four unlikely companions...",
    rating: 4.6
  }
];

const moreBooks = [
  {
    id: 7,
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMECTCZm_ri2uuVfxb8cxcxv9aRyQMJ0Lqqg&s=",
    description: "Train to Pakistan is a historical novel by Khushwant Singh, published in 1956, that explores the trauma and tragedy of the Partition of India, specifically focusing on a fictional border village named Mano Majra. The story centers around the arrival of a ghost train, carrying the bodies of refugees, and the subsequent descent of the village into religious hatred and violence. It also features a love story between a Sikh boy and a Muslim girl who try to navigate the chaos and hatred",
    rating: 4.3
  },
  {
    id: 8,
    title: "Interpreter of Maladies",
    author: "Jhumpa Lahiri",
    coverImage: "https://images.penguinrandomhouse.com/cover/9780395927205",
    description: "Interpreter of Maladies is a Pulitzer Prize-winning collection of nine short stories by Jhumpa Lahiri, published in 1999. The stories explore the lives of Indian and Indian-American characters navigating cultural divides and seeking love and meaning in both their homeland and the New World. The title story follows an interpreter, Mr. Kapasi, who guides an American family on a tour of India, becoming captivated by their family dynamics.",
    rating: 4.1
  },
  {
    id: 9,
    title: "The Inheritance of Loss",
    author: "Kiran Desai",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327909065i/95186.jpg",
    description: "The Inheritance of Loss by Kiran Desai is a novel that explores themes of colonialism, globalization, and cultural identity through the intertwined lives of two characters: Sai, an orphaned girl living in India, and Biju, an illegal immigrant in New York. The story spans across India and the US, highlighting the impact of history and politics on individual lives. The novel also examines the complex relationships between these characters and their respective families and communities, including the judge, Sai's grandfather, and the cook, whose son is Biju",
    rating: 4.0
  },
  {
    id: 10,
    title: "Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    coverImage: "https://img1.wsimg.com/isteam/ip/2ad2e274-a4f3-4a49-a754-b2cc3670307b/21%20Works%20Of%20Fiction%20By%20Indian%20Authors%20That%20Eve.jpg",
    description: "A reimagining of the Mahabharata from Draupadi’s perspective...",
    rating: 4.5
  },
  {
    id: 11,
    title: "Sea of Poppies",
    author: "Amitav Ghosh",
    coverImage: "https://amitavghosh.com/wp-content/uploads/2023/04/sea_of_poppies.jpg",
    description: "An epic saga about the opium trade and colonialism in India...",
    rating: 4.2
  },
  {
    id: 12,
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33EgrcGfqIbcENLuOLteaBzCbQz0jzQvpLA&s",
    description: "The Namesake by Jhumpa Lahiri tells the story of the Ganguli family, who emigrate from Calcutta to Cambridge, Massachusetts, and the challenges they face navigating American life while clinging to their Bengali roots. The novel focuses on the life of their son, Gogol, named after the Russian writer Nikolai Gogol, and his struggle to reconcile his dual identity and heritage.",
    rating: 4.1
  }
];

// Book Card
const BookCard = ({ book, onClick }) => (
  <div
    className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
    onClick={() => onClick(book)}
  >
    <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
      <p className="text-gray-600 text-sm">by {book.author}</p>
    </div>
  </div>
);

// Modal
const BookModal = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src={book.coverImage} alt={book.title} className="w-full md:w-48 h-64 object-cover rounded-lg mx-auto md:mx-0" />
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
              <p className="text-lg text-gray-700 mb-2"><strong>Rating:</strong> ⭐ {book.rating}</p>
              <h3 className="font-semibold text-gray-800 mb-1">Description:</h3>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header
const Header = () => (
  <header className="bg-white shadow-sm border-b sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">📚 Indian Books</h1>
      <nav className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</button>
        <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Store</button>
        <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
      </nav>
    </div>
  </header>
);

// App Component
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const toggleBooks = () => {
    setShowMore(!showMore);
  };

  const displayedBooks = showMore ? [...initialBooks, ...moreBooks] : initialBooks;

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/library-bg.jpg')" }}>
      <div className="bg-white bg-opacity-80 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedBooks.map((book) => (
              <BookCard key={book.id} book={book} onClick={handleBookClick} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleBooks}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              {showMore ? "Show Less" : "More Books"}
            </button>
          </div>
        </main>
        <BookModal book={selectedBook} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default App;
