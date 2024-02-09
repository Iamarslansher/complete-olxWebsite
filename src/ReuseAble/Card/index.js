import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setToCart } from "../../store/addToCartSlice";
import Swal from "sweetalert2";

function CardItem(props) {
  const dispatch = useDispatch();
  const { item } = props;
  const navigate = useNavigate();

  const dispatchFunc = () => {
    dispatch(setToCart(item));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add to Cart Successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <>
      <Card className="card">
        <Card.Img className="cardImg" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className="cardTitle">{item.title}</Card.Title>
          <Heart />
          <Card.Text className="cardText">{item.description}</Card.Text>
          <Card.Title className="cardTitle">Rs. {item.price}/-</Card.Title>
          <div className="cardBtn-div">
            <Button
              className="cardBtn"
              variant="primary"
              onClick={() => navigate(`/carddetail/${item.id}`)}
            >
              About More
            </Button>
            <IoIosAddCircle
              className="addTo"
              title="Add to Cart"
              onClick={dispatchFunc}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardItem;
