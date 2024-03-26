const OrderNote = () => {
  return (
    <>
      <h3>Sipariş Notu Giriniz</h3>
      <textarea
        id="noteid"
        name="ordernote"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      ></textarea>
    </>
  );
};

export default OrderNote;
