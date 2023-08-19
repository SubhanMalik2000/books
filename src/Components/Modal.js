import { AiOutlineClose } from "react-icons/ai";
import Star from "./Star";

function Modal({ modalData, postion, showModal, isAbsolute }) {
  console.log("modal comp Data", modalData);

  const closeModal = () => {
    showModal(!true);
    isAbsolute(true);
    // console.log("working");
    document.body.classList.remove("overflow-hidden");
  };
  // const [getData, SetGetData] = useState("");
  // useEffect(() => {
  //   console.log("Received modalData:", modalData);
  //   SetGetData(modalData);
  // }, [modalData]);

  return (
    <div
      className={`flex  rounded  ${postion} inset-0 items-center justify-center bg-black bg-opacity-70 `}
    >
      <div className="flex bg-white rounded-md handlewidth">
        <img className="imgwidth" src={modalData?.imageLink} />

        <div>
          <h2 className="font mt-14 ml-3">{modalData?.title}</h2>
          <div className="flex mt-6 justify-between justify-items-start">
            <div className="ml-3">
              <h2>
                <b>Rating</b>
              </h2>
              <Star stars={modalData?.rating} />
            </div>
            <div>
              <h2>
                <b>Reviews</b>
              </h2>
              <p>{modalData?.reviews}</p>
            </div>
            <div>
              <h2>
                <b>Price</b>
              </h2>
              <p>{modalData?.price}</p>
            </div>
          </div>
          <div className="mt-6 ml-3 fontp">
            <p className="mb-1">
              <b>Author:</b> {modalData?.author}
            </p>
            <p className="mb-1">
              <b>Country:</b> {modalData?.country}
            </p>
            <p className="mb-1">
              <b>Language:</b> {modalData?.language}
            </p>
            <p className="mb-1">
              <b>Year:</b> {modalData?.year}
            </p>
            <p className="mb-3">
              <b>Pages:</b> {modalData?.pages}
            </p>
            <button className="buttoning">View Details</button>
          </div>
        </div>
        <AiOutlineClose className="text-xl" onClick={closeModal} />
        {/* <FaRegWindowClose onClick={closeModal} className="text-lg" /> */}
      </div>
    </div>
  );
}

export default Modal;
