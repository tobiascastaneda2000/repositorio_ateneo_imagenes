export const Img = ({ id, text }) => {
  return (
    <div className="card m-5 text-center" style={{ width: "13rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
        <p className="card-text">Acá iría la IMG</p>
        <a href="#" className="btn btn-warning ">
          ID de la bd {id}
        </a>
      </div>
    </div>
  );
};
