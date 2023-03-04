import React from "react";

const PostCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4 text-gray-600">
      <div className="card-body">
        <h2 className="card-title">{props.post.title}</h2>
        <div className="md:flex">
          <p>
            {props.post.pokemon} <br />
            {props.post.ev_hp}-{props.post.ev_attack}-{props.post.ev_defense}-
            {props.post.ev_special_attack}-{props.post.ev_special_defense}-
            {props.post.ev_speed}
          </p>

          <div className="card-actions justify-end">
            <PostShowModal post={props.post} id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PostShowModal = (props) => {
  return (
    <>
      <label htmlFor={`post-modal-${props.id}`} className="btn btn-primary">
        詳細
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`post-modal-${props.id}`}
        className="modal-toggle"
      />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor={`post-modal-${props.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg col-span-2 justify-center">
            {props.post.title}
          </h3>

          <div className="grid grid-cols-4 gap-1">
            <p className="col-span-2">ポケモン: {props.post.pokemon}</p>
            <p className="col-span-2">性格: {props.post.nature}</p>
            <div className=" col-span-2">
              {" "}
              努力値: {props.post.ev_hp}-{props.post.ev_attack}-
              {props.post.ev_defense}-{props.post.ev_special_attack}-
              {props.post.ev_special_defense}-{props.post.ev_speed}
            </div>
            <div className=" col-span-2">
              テラスタイプ: {props.post.tera_type}
            </div>
            <p className="col-span-2">もちもの: {props.post.item}</p>
            <p className="col-span-2">とくせい: {props.post.ability}</p>
            <p className="col-span-4 pt-4">わざ:</p>
            <p className="col-span-1"> {props.post.move1}</p>
            <p className="col-span-1"> {props.post.move2}</p>
            <p className="col-span-1"> {props.post.move3}</p>
            <p className="col-span-1"> {props.post.move4}</p>
          </div>
          <p className="pt-4">
            概要　
            <br />
            {props.post.body}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
