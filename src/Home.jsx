/* eslint-disable no-unsafe-optional-chaining */

import moment from "moment";
import {  useState } from "react";
import Invoices from "./Invoices";

function AddNew(props) {
  const { formData, handleInputChange, navigatefalse, handleSubmit } = props

  return (
    <div className="main__container-addnew">
      <div className="new__invoice">
        <div className="new__invoice-header">
          <h3>New Invoice</h3>
        </div>

        {/* ======== new invoice body ========= */}
        <div className="new__invoice-body">
          {/* ======= bill from ========== */}
          <div className="bill__from">
            <p className="bill__title">Bill from</p>
            <div className="form__group">
              <p>Street Address</p>
              <input type="text"
                name="billFrom.streetAddress"
                defaultValue={formData?.billFrom?.streetAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text"
                  name="billFrom.city"
                  defaultValue={formData?.billFrom?.streetAddress}
                  onChange={handleInputChange}

                />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text"
                  name="billFrom.postalCode"
                  defaultValue={formData?.billFrom?.postalCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Country</p>
                <input type="text"
                  name="streetAddress"
                  defaultValue={formData?.billFrom?.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* ========= bill to ========== */}
          <div className="bill__to">
            <p className="bill__title">Bill to</p>
            <div className="form__group">
              <p>Client Name</p>
              <input type="text"
                name="billTo.clientName"
                defaultValue={formData?.billTo?.clientName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group">
              <p>Client Email</p>
              <input type="text"
                name="billTo.clientEmail"
                defaultValue={formData?.billTo?.clientEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group">
              <p>Street Address</p>
              <input type="text"
                name="billTo.streetAddress"
                defaultValue={formData?.billTo?.streetAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text"
                  name="billTo.city"
                  defaultValue={formData?.billTo?.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text"
                  name="billTo.postalCode"
                  defaultValue={formData?.billTo?.postalCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Country</p>
                <input type="text"
                  name="billTo.country"
                  defaultValue={formData?.billTo?.country}
                  onChange={handleInputChange} />
              </div>
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Invoice Date</p>
                <input type="date"
                  name="invoice.invoiceDate"
                  defaultValue={formData?.invoice?.invoiceDate}
                  onChange={handleInputChange}
                />

              </div>

              <div className="inline__group">
                <p>Payment Terms</p>
                <input type="text"
                  name="invoice.paymentTerms"
                  defaultValue={formData?.invoice?.paymentTerms}
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <div className="form__group">
              <p>Project Description</p>
              <input type="text"
                name="invoice.invoiceName"
                defaultValue={formData?.invoice?.invoiceName}
                onChange={handleInputChange}
              />

            </div>
          </div>

          {/* ========= invoice product items =========*/}

          <div className="invoice__items">
            <h3>Item List</h3>

            <div className="item" >
              <div className="form__group inline__form-group">
                <div>
                  <p>Item Name</p>
                  <input
                    type="text"
                    name="invoice.invoiceName"
                    defaultValue={formData?.invoice?.invoiceName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <p>Qty</p>
                  <input
                    type="number"
                    name="invoice.quantity"
                    defaultValue={formData?.invoice?.quantity}
                    onChange={handleInputChange}

                  />
                </div>

                <div>
                  <p>Price</p>
                  <input
                    type="number"
                    name="invoice.price"
                    defaultValue={formData?.invoice?.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Total</p>
                  <h4>{
                    (formData?.invoice?.price * formData?.invoice?.quantity) || 0
                  }</h4>
                </div>
              </div>
              <div>
                <select
                  name="mySelect"
                  defaultValue=""
                  required
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="pending" className="pending__status">Pending</option>
                  <option value="paid" className="paid__status">Paid</option>
                  <option value="draft" className="draft__status">Draft</option>
                </select>
              </div>
            </div>

          </div>

          <button className="add__item-btn"
            onClick={handleSubmit}
          >
            Add New Item
          </button>

          <div className="new__invoice__btns">
            <button className="edit__btn" onClick={navigatefalse}>
              Discard
            </button>
            <div>
              <button
                className="draft__btn"

              >
                Save as Draft
              </button>

              <button
                className="mark__as-btn"
                
              >
                Send & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const defaultFormData = {
  billFrom: {
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
  },
  billTo: {
    clientName: '',
    clientEmail: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
  },
  invoice: {
    paymentTerms: '',
    invoiceDate: '',
    invoiceName: '',
    quantity: '',
    price: '',
  },
  mySelect: 'pending'

}

export default function Home() {
  const [expand, setExpand] = useState(false)
  const [bigData, setBigData] = useState(null)

  const [isVisible, SetIsvisible] = useState(false)
  const navigate = () => {
    SetIsvisible(true)
  }
  const navigatefalse = () => {
    SetIsvisible(false)
  }


  // State variables to store form data
  const [formData, setFormData] = useState(defaultFormData);



  function handleInputChange(e) {
    const { name, value } = e.target;
    const [groupName, fieldName] = name.split(".");

    setFormData(prev => {
      const newdata = fieldName ? {
        [groupName]: {
          ...prev[groupName],
          [fieldName]: value,
        }
      } : {
        [groupName]: value,
      }

      return {
        ...formData,
        ...newdata,
      }
    });

  }


  const [data, setData] = useState([])


  // Function to submit the form data
  const handleSubmit = () => {

    // You can access the complete formData object here and send it to your backend or perform any other action.
    setData(prev => [...prev, formData])
    navigatefalse()
    setFormData(defaultFormData)
  };

  if (expand && bigData) return (<Invoices data={bigData} setExpand={setExpand} />)
  return (
    <div className="main__container">
      <div className="invoice-header">
        <div className="invoice-header-logo">
          <h3>Invoices</h3>
          <p>There are total {data.length || 0} {data.length == 1 ? "invoice" : "invoices"}</p>
        </div>
        <button onClick={navigate} className="btn">Add New</button>
        {
          isVisible ? <AddNew
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            navigatefalse={navigatefalse}
          /> : null
        }


      </div>
      {/* <div className="invoice__container"> */}

      {
        !data.length ? <>No data</> :
          data?.map((item, index) => (
            <DataItem item={item} key={index} expand={setExpand} setBigData={setBigData} />
          ))
      }
      {/* <div className="invoice-item">
        <div>
          <h5 className="invoice-id">
            FT676
          </h5>
        </div>

        <div>
          <h6 className="invoice-client">Yves</h6>
        </div>

        <div>
          <p className="invoice-created">05-10-2023</p>
        </div>

        <div>
          <h3 className="invoice-total">1000FRW</h3>
        </div>

        <div>
          <button

          >
            Pending
          </button>
        </div>
      </div> */}

      {/* </div> */}
    </div>
  );
}


function DataItem({ item, expand, setBigData }) {

  return (

    <div className="invoice-item">
      <div>
        <h5 className="invoice-id">
          #{item.billFrom.postalCode}
        </h5>
      </div>

      <div>
        <h6 className="invoice-client">{item.billTo.clientName}</h6>
      </div>

      <div>
        <p className="invoice-created">{item.invoice.invoiceDate && moment(item.invoice.invoiceDate).format('LL')}</p>
      </div>

      <div>
        <h3 className="invoice-total">{
          (item?.invoice?.price * item?.invoice?.quantity) || 0
        } FRW</h3>
      </div>


      <div>
        <button className={`${item?.mySelect}__status`}>
          {item?.mySelect}
        </button>
        <button style={{
          background: '#ffffff12',
          color: 'inherit',
          border: 'none',
          padding: '0.6rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '1rem'
        }}
          onClick={() => {
           
            expand(true)
            setBigData(item)
          }}
        >{'>'}</button>
      </div>
    </div>
  )
}
function edit (props) {
  const { formData, handleInputChange, navigatefalse, handleSubmit } = props
  return (
    <div className="main__container-addnew">
      <div className="new__invoice">
        <div className="new__invoice-header">
          <h3>New Invoice</h3>
        </div>

        {/* ======== new invoice body ========= */}
        <div className="new__invoice-body">
          {/* ======= bill from ========== */}
          <div className="bill__from">
            <p className="bill__title">Bill from</p>
            <div className="form__group">
              <p>Street Address</p>
              <input type="text"
                name="billFrom.streetAddress"
                defaultValue={formData?.billFrom?.streetAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text"
                  name="billFrom.city"
                  defaultValue={formData?.billFrom?.streetAddress}
                  onChange={handleInputChange}

                />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text"
                  name="billFrom.postalCode"
                  defaultValue={formData?.billFrom?.postalCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Country</p>
                <input type="text"
                  name="streetAddress"
                  defaultValue={formData?.billFrom?.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* ========= bill to ========== */}
          <div className="bill__to">
            <p className="bill__title">Bill to</p>
            <div className="form__group">
              <p>Client Name</p>
              <input type="text"
                name="billTo.clientName"
                defaultValue={formData?.billTo?.clientName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group">
              <p>Client Email</p>
              <input type="text"
                name="billTo.clientEmail"
                defaultValue={formData?.billTo?.clientEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group">
              <p>Street Address</p>
              <input type="text"
                name="billTo.streetAddress"
                defaultValue={formData?.billTo?.streetAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text"
                  name="billTo.city"
                  defaultValue={formData?.billTo?.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text"
                  name="billTo.postalCode"
                  defaultValue={formData?.billTo?.postalCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p>Country</p>
                <input type="text"
                  name="billTo.country"
                  defaultValue={formData?.billTo?.country}
                  onChange={handleInputChange} />
              </div>
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Invoice Date</p>
                <input type="date"
                  name="invoice.invoiceDate"
                  defaultValue={formData?.invoice?.invoiceDate}
                  onChange={handleInputChange}
                />

              </div>

              <div className="inline__group">
                <p>Payment Terms</p>
                <input type="text"
                  name="invoice.paymentTerms"
                  defaultValue={formData?.invoice?.paymentTerms}
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <div className="form__group">
              <p>Project Description</p>
              <input type="text"
                name="invoice.invoiceName"
                defaultValue={formData?.invoice?.invoiceName}
                onChange={handleInputChange}
              />

            </div>
          </div>

          {/* ========= invoice product items =========*/}

          <div className="invoice__items">
            <h3>Item List</h3>

            <div className="item" >
              <div className="form__group inline__form-group">
                <div>
                  <p>Item Name</p>
                  <input
                    type="text"
                    name="invoice.invoiceName"
                    defaultValue={formData?.invoice?.invoiceName}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <p>Qty</p>
                  <input
                    type="number"
                    name="invoice.quantity"
                    defaultValue={formData?.invoice?.quantity}
                    onChange={handleInputChange}

                  />
                </div>

                <div>
                  <p>Price</p>
                  <input
                    type="number"
                    name="invoice.price"
                    defaultValue={formData?.invoice?.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Total</p>
                  <h4>{
                    (formData?.invoice?.price * formData?.invoice?.quantity) || 0
                  }</h4>
                </div>
              </div>
              <div>
                <select
                  name="mySelect"
                  defaultValue=""
                  required
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="pending" className="pending__status">Pending</option>
                  <option value="paid" className="paid__status">Paid</option>
                  <option value="draft" className="draft__status">Draft</option>
                </select>
              </div>
            </div>

          </div>

          <button className="add__item-btn"
            onClick={handleSubmit}
          >
            Add New Item
          </button>

          <div className="new__invoice__btns">
            <button className="edit__btn" onClick={navigatefalse}>
              Discard
            </button>
            <div>
              <button
                className="draft__btn"

              >
                Save as Draft
              </button>

              <button
                className="mark__as-btn"
                
              >
                Send & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}