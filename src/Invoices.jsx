/* eslint-disable react/prop-types */
// import React from 'react'
import moment from 'moment'
export const Invoices = ({ setExpand, data}) => {
  
  console.log({ data })
  return (
    <div className="main__container">
      <div className="back__btn">
        <h6 onClick={() => setExpand(false)}> Go Back</h6>
      </div>

      {/* ======= invoice details header ========== */}
      <div className="invoice__details-header">
        <div className="details__status">
          <p>Status</p>

          <button
            className={`${data?.mySelect}__status`}
          >
            {data?.mySelect}
          </button>
        </div>

        <div className="details__btns">
          <button
            className="edit__btn" 
            onClick={() => {
               
            }}
            >Edit
          </button>
          <button className="delete__btn">
            Delete
          </button>

          {
            (data?.mySelect ?? '').toLowerCase() !== 'paid' && (<button className='mark__as-btn' >
              Mark as Paid
            </button>)
          }

        </div>
      </div>

      {/* ========= invoice details =========== */}

      <div className="invoice__details">
        <div className="details__box">
          <div>
            <h4>{data?.invoice?.postalCode}</h4>
            <p>{data?.invoice?.invoiceName}</p>
          </div>
          <div>
            <p>{data?.billFrom?.streetAddress}</p>
            <p>{data?.billFrom?.city}</p>
            <p>{data?.billFrom?.country}</p>
          </div>
        </div>

        {/* =========== details box 2 =========== */}
        <div className="details__box">
          <div>
            <div className="invoice__created-date">
              <p>Invoice Date</p>
              <h4>{moment(data?.Invoices?.invoiceDate).format('LL')}</h4>
            </div>
            <div>
              <p className="invoice__payment">Payment Due</p>
              <h4>{moment(data?.Invoices?.invoiceDate).format('LL')}</h4>
            </div>
          </div>

          {/* ======= invoice client address ========== */}
          <div className="invoice__client-address">
            <p>Bill to</p>
            <h4>{data?.billTo?.clientName || 'Not defined'}</h4>
            <div>
              <p>{data?.billTo?.streetAddress}</p>
              <p>{data?.billTo?.city}</p>
              <p>{data?.billTo?.country}</p>
            </div>
          </div>

          <div>
            <p>Send to</p>
            <h4>{data?.billTo?.clientEmail || 'Not defined'}</h4>
          </div>
        </div>

        {/* ========= invoice items ============= */}
        <div className="invoice__item-box">
          <ul className="list">
            <li className="list__item">
              <p className="item__name-box">Item Name</p>
              <p className="list__item-box">Qty</p>
              <p className="list__item-box">Price</p>
              <p className="list__item-box">Total</p>
            </li>

            {/* ======== invoice item ======= */}


            <li className="list__item" >
              <div className="item__name-box">
                <h5>{data?.invoice?.invoiceName || 'Not defined'}</h5>
              </div>

              <div className="list__item-box">
                <p>{data?.invoice?.quantity || 0}</p>
              </div>
              <div className="list__item-box">
                <p>${(data?.invoice?.price) || 0}</p>
              </div>
              <div className="list__item-box">
                <h5>${(data?.invoice?.price * data?.invoice?.quantity) || 0}</h5>
              </div>
            </li>

          </ul>
        </div>

        {/* //   {/* ========== grand total ============= */}
        <div className="grand__total">
          <h5>Grand Total</h5>
          <h2>${(data?.invoice?.price * data?.invoice?.quantity) || 0}</h2>
        </div>
      </div>
    </div>
  )
}

export default Invoices