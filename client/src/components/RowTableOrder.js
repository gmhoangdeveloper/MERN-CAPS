import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";
import { makeStyles } from "@material-ui/core";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
function RowTableOrder(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.codeorders}
        </TableCell>
        <TableCell align="right">{new Date(row.date).toDateString()}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.orderPayment}</TableCell>
        <TableCell align="right">{row.subtotalCart}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Sản Phẩm Mua
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Hình ảnh</TableCell>
                    <TableCell>Tên</TableCell>
                    <TableCell align="right">Số Lượng</TableCell>
                    <TableCell align="right">Kích Cỡ</TableCell>
                    <TableCell align="right">Giá tiền</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*Phần đổ dữ liệu ở menu con*/}
                  {row.productCart.map((orderproduct, key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        <img
                          src={orderproduct.image1}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </TableCell>
                      <TableCell>{orderproduct.title}</TableCell>
                      <TableCell align="right">
                        {orderproduct.quantity}
                      </TableCell>
                      <TableCell align="right">{orderproduct.size}</TableCell>
                      <TableCell align="right">{orderproduct.price}</TableCell>
                    </TableRow>
                  ))}

                  {/* END Phần đổ dữ liệu ở menu con*/}
                </TableBody>
              </Table>
            </Box>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Thông tin mua hàng
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Họ Tên</TableCell>
                    <TableCell>Số điệnt thoại</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Địa Chỉ</TableCell>
                    <TableCell align="right">Thành Phố</TableCell>  <TableCell align="right">Ghi Chú</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*Phần đổ dữ liệu ở menu con*/}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.lastName + row.firstName}
                    </TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>  <TableCell align="right">{row.note}</TableCell>
                  </TableRow>
                  {/* END Phần đổ dữ liệu ở menu con*/}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default RowTableOrder;
