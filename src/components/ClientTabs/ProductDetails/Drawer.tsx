import { Button, Col, Drawer, DrawerProps, Row, Space } from "antd";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";
import { closeDrawer } from "../../../store/Slices/OpenDrawerSlice";
import { useState } from "react"
import './ProductDetails.scss'
import { useNavigate } from "react-router-dom";
const DrawerComponent=()=>{
    const dispatch = useDispatch();
    const { products }: any = useAppSelector((state) => state.products);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
    const navigate=useNavigate()
  const isOpen = useAppSelector((state) => state.drawer.isOpen);
  const onClose = () => {
    dispatch(closeDrawer());
  }
  const totalPrice = products?.products?.reduce((accumulator:any, currentValue:any) => {
    // Adding the price of the current object to the accumulator
    return accumulator + currentValue.price;
  }, 0);

    return(<Drawer
        title=""
        placement={placement}
        className="drawer-details"
        autoFocus={true}
        onClose={onClose}
        open={isOpen}

        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>

          </Space>
        }
      >
        {products?.products?.map((productsDetails: any) => {
         return( <Row style={{ padding: "20px" }}>
         <Col xs={24} md={12}>
           <img src={productsDetails?.thumbnail} width={80} height={80} style={{ borderRadius: "50%" }} />

         </Col>
         <Col xs={24} md={12}>
           <p style={{ color: "#ffffff" }}>{productsDetails?.categoryName}</p>
           <p style={{ color: "#ffffff" }}> 1 × $ {productsDetails?.price}</p>
         </Col>
         <Col xs={24} md={24} style={{ textAlign: "center", marginTop: "20px" }}>
           <span style={{ color: "#ffffff", }}>---------------------------</span>
         </Col>

       </Row>)
        })}
     
     <Row style={{ padding: "20px" }}>
          <Col xs={24} md={24} style={{ marginTop: "20px" }}>

            <p style={{ color: "#ffffff", textAlign: "center", border: "1px dotted", padding: "10px" }}>Subtotal $ {Math.round(totalPrice)}</p>
          </Col>
          <Col xs={24} md={24}>
            <Button
              className="view-cart"
              style={{ width: "100%", marginTop: "20px" }}
          onClick={()=>{  dispatch(closeDrawer());navigate("/productDetails/cart-details", { state: { productDetails: products?.products } }) }
          }  >
              VIEW CART
            </Button>
            <Button style={{ width: "100%", marginTop: "20px" }} >CHECKOUT</Button>
          </Col>
        </Row>

      </Drawer>)
}
export default DrawerComponent