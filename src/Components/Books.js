import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/thunk/fetchUser";

function Books() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const books = useSelector((state) => {
    console.log(state.users.users);
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="books grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 lg:mx-16">
      {books.users.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-xs m-4 border rounded overflow-hidden"
          >
            <img
              className="productimage"
              src={item.imageLink}
              alt="Book cover"
            />
            <div className="p-4">
              {console.log(item)}
              <p className="font-bold">Author: {item.author}</p>
              <strong className="text-sm">{item.rating}</strong>
              <br />
              <strong className="text-sm">${item.price}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
