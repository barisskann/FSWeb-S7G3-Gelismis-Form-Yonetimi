function DataList(params) {
  const { veri } = params;
  const render = veri.map((item) => {
    console.log(item);
    return (
      <div key={item.id}>
        <div>{item.isim}</div>
        <div>{item.email}</div>
      </div>
    );
  });
  return <div>{render}</div>;
}
export default DataList;
