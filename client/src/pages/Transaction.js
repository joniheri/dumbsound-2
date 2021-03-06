import React, { useContext } from "react";
import { Container, Table, Dropdown, DropdownButton } from "react-bootstrap";

// import globalContext
import { AppContext } from "../contexts/GlobalContext";

// import components
import NavbarAdmin from "../components/NavbarAdmin";
import NotFound from "./NotFound";

export default function Transaction() {
  const [state] = useContext(AppContext);

  return (
    <div>
      {state.user.level != "Admin" ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          {/* <NavbarAdmin /> */}
          <Container style={{ marginTop: "100px" }}>
            <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>
              Incoming Transaction
            </h3>
            <Table striped bordered hover variant="dark">
              <thead style={{ color: "#EE4622" }}>
                <tr>
                  <th>No</th>
                  <th>Users</th>
                  <th>Bukti Transfer</th>
                  <th>Remaining Active</th>
                  <th>Status User</th>
                  <th>Status Payment</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>1</td>
                  <td style={{ verticalAlign: "middle" }}>Miao</td>
                  <td style={{ verticalAlign: "middle" }}>bca.jpg</td>
                  <td style={{ verticalAlign: "middle" }}>26/hari</td>
                  <td style={{ verticalAlign: "middle" }}>Active</td>
                  <td style={{ verticalAlign: "middle" }}>Pending</td>
                  <td style={{ textAlign: "center" }}>
                    <DropdownButton
                      style={{ background: "#43494e", borderColor: "#43494e" }}
                      variant="secondary"
                      menuAlign="right"
                      title=""
                      id="dropdown-menu-align-right"
                    >
                      <Dropdown.Item eventKey="1">Approved</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">Cancel</Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </div>
  );
}
