const OrderNote = ({onChange}) => {
  

  return (
    <>
      <div className="order-note-container">
        <h3 className="size-font">Sipariş Notu</h3>
        <textarea
          id="noteid"
          name="ordernote"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
};

export default OrderNote;
