import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/thunk/fetchUser";
import Star from "./Star";
import Modal from "./Modal";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Books() {
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(true);
  
  // Calling State
  const books = useSelector((state) => {
    return state.users.users;
  });

  const searchBooks = useSelector((state) => state.users.searchTerm);

   //filtering 
   const filteredBooks = searchBooks.trim()  
   ? books.filter(book => book.author.toLowerCase().includes(searchBooks.toLowerCase()))
   : books;

  //fetching 
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
    setIsAbsolute(!true);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <div className="books grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-16">
      {showModal && (
        <Modal
          modalData={modalData}
          postion="fixed"
          showModal={setShowModal}
          isAbsolute={setIsAbsolute}
        />
      )}
      {filteredBooks.map((item, index) => (
        <div
          key={item.title + index}
          onClick={() => openModal(item)}
          className={`max-w-xs m-4 border rounded overflow-hidden ${
            isAbsolute ? "relative" : "static"
          }`}
        >
          <div className={`heart ${isAbsolute ? "absolute" : "static"}`}>
            {item.is_liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
          <img className="productimage" src={item.imageLink} alt="Book cover" />

          <div className="p-4">
            <p className="font-bold">Author: {item.author}</p>
            <Star stars={item.rating} />
            <strong className="text-sm">${item.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
