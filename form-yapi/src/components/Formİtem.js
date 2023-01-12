function Formİtem(params) {
  const { handleChange, data, res, handleSubmit } = params;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="isim">İsim</label>

          <input
            name="isim"
            type="text"
            onChange={handleChange}
            id="isim"
            value={data.isim}
            className="test-isim"
          />
        </div>
        <div>
          <label htmlFor="email">E MAİL</label>
          <input
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className="test-email"
          />
        </div>
        <div>
          <label htmlFor="sifre">Şifre</label>
          <input
            id="sifre"
            name="sifre"
            value={data.sifre}
            onChange={handleChange}
            type="password"
            className="test-sifre"
          />
        </div>
        <p>
          <label htmlFor="check"> Kullanım şartlarını kabul ediyorum</label>
          <input
            id="check"
            name="isTrue"
            type="checkbox"
            checked={data.isTrue}
            value={!data.isTrue}
            onChange={handleChange}
            className="test-checkbox"
          />
        </p>
        <button className='test-button' disabled={res} type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}
export default Formİtem;
