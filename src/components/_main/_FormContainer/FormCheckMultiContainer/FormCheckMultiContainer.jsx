import styles from "./FormCheckMultiContainer.module.css"

export default function FormCheckMultiContainer({form, setForm}) {

  const handleFormMulti = (e) => {
    const fa = form.favorite;
    if(e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
      // spliceの引数が２つの場合(削除位置, 削除数)となる
    }

    setForm({
      ...form,
      [e.target.name]: fa,
      // オブジェクトのkeyをブラケット記法で指定している
    });
  };

  return (
    <div>
      <p className="legendP">What is your favorite field or area of interest?</p>

      <div className={`formBlock ${styles.formBlock}`}>
        <span>
          <input
            id="music"
            name="favorite"
            type="checkbox"
            value="music"
            checked={form.favorite.includes("music")}
            onChange={handleFormMulti}
          />
          <label htmlFor="music">Music</label>
        </span>

        <span>
          <input
            id="art"
            name="favorite"
            type="checkbox"
            value="art"
            checked={form.favorite.includes("art")}
            onChange={handleFormMulti}
          />
          <label htmlFor="art">Art</label>
        </span>

        <span>
          <input
            id="design"
            name="favorite"
            type="checkbox"
            value="design"
            checked={form.favorite.includes("design")}
            onChange={handleFormMulti}
          />
          <label htmlFor="design">Design</label>
        </span>

        <span>
          <input
            id="programing"
            name="favorite"
            type="checkbox"
            value="programing"
            checked={form.favorite.includes("programing")}
            onChange={handleFormMulti}
          />
          <label htmlFor="programing">Programing</label>
        </span>
      </div>
    </div>

  );
}
