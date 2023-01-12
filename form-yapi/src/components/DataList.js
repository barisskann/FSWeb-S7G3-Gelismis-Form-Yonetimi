function DataList(params) {
  const { veri } = params;
  const render = veri.map((item) => {
    return (
      <div className='list' key={item.id}>
        <div>{item.isim}</div>
        <div>{item.email}</div>
      </div>
    );
  });
  return <div>{render}</div>;
}
export default DataList;
