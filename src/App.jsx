import { useEffect, useState } from "react";

function App() {
  const [findText, setfindText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
   
      let wordSet = new Set();
      const containerString = document.getElementById("textContainer");
      let stringArray = containerString.textContent;
      stringArray = stringArray
        .split("\n")
        .map((line) =>
          line
            .split(" ")
            .map((word) => {
              wordSet.add(word);
              if (word.indexOf(findText) > -1) {
                word = word.replace(
                  new RegExp(findText, "gi"),
                  `<span class="span-custom">$&</span>`
                );
              }
              return word;
            })
            .join(" ")
        )
        .join("\n");
      containerString.innerHTML = stringArray;
      setCount(document.getElementsByClassName("span-custom").length);
      if(findText=="") setCount(0)
    
  }, [findText]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="container" style={{ textAlign: "center" }}>
          <label htmlFor="findText">enter text to find</label>
        </div>
        <div id="inputRow" className="container">
          <input
            className="form-control"
            type="text"
            name="findText"
            id="findText"
            onChange={(e) => setfindText(e.target.value)}
            value={findText}
          />
          <p id="count">{count}</p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div id="textContainer" className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, alias
        consequatur cumque quibusdam reiciendis quis molestias officia ullam
        aliquam minus exercitationem praesentium? Fuga accusantium, molestiae
        expedita facere voluptas repudiandae rem. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Iste perferendis quae nostrum enim odio
        repudiandae itaque aspernatur magnam amet vero hic, voluptatibus saepe
        earum, assumenda consectetur natus at. Reiciendis, laudantium? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Minima debitis itaque
        laboriosam? At obcaecati officia esse odit enim nulla asperiores
        voluptatibus saepe error? Perferendis sequi, doloribus recusandae
        veritatis rem vel! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Repellat vel repudiandae doloribus asperiores, deleniti a
        accusamus quidem dignissimos. Illum aliquam facilis reprehenderit
        perferendis repellat expedita neque similique, commodi incidunt debitis?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
        eligendi voluptas ducimus temporibus numquam, repellendus esse natus
        molestias officiis ipsa, necessitatibus unde ullam eius commodi quo amet
        provident iusto at. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem accusamus excepturi temporibus explicabo! Sit, nobis
        facere necessitatibus repellendus recusandae eligendi architecto
        corporis culpa repellat sed commodi minus libero voluptates. Neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic
        dolores nam minima vero officiis ad, tempore distinctio molestiae
        repellat cumque est fuga architecto quos eum voluptatum ullam reiciendis
        nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur adipisci nam vitae beatae architecto molestias fugiat, quas
        laborum, impedit, nostrum quis et quibusdam ab nulla consequuntur
        temporibus at praesentium labore. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Architecto sint doloremque quae dolore
        ducimus aspernatur magnam, magni animi quod possimus beatae hic vero
        quaerat, laudantium dolor, molestias aliquid minima laborum?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Adipisci, alias consequatur
        cumque quibusdam reiciendis quis molestias officia ullam aliquam minus
        exercitationem praesentium? Fuga accusantium, molestiae expedita facere
        voluptas repudiandae rem. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Iste perferendis quae nostrum enim odio repudiandae
        itaque aspernatur magnam amet vero hic, voluptatibus saepe earum,
        assumenda consectetur natus at. Reiciendis, laudantium? Lorem ipsum
        dolor sit amet consectetur adipi sicing elit. Minima debitis itaque
        laboriosam? At obcaecati officia esse odit enim nulla asperiores
        voluptatibus saepe error? Perferendis sequi, doloribus recusandae
        veritatis rem vel! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Repellat vel repudiandae doloribus asperiores, deleniti a
        accusamus quidem dignissimos. Illum aliquam facilis reprehenderit
        perferendis repellat expedita neque similique, commodi incidunt debitis?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
        eligendi voluptas ducimus temporibus numquam, repellendus esse natus
        molestias officiis ipsa, necessitatibus unde ullam eius commodi quo amet
        provident iusto at. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem accusamus excepturi temporibus explicabo! Sit, nobis
        facere necessitatibus repellendus recusandae eligendi architecto
        corporis culpa repellat sed commodi minus libero voluptates. Neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic
        dolores nam minima vero officiis ad, tempore distinctio molestiae
        repellat cumque est fuga architecto quos eum voluptatum ullam reiciendis
        nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur adipisci nam vitae beatae architecto molestias fugiat, quas
        laborum, impedit, nostrum quis et quibusdam ab nulla consequuntur
        temporibus at praesentium labore. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Architecto sint doloremque quae dolore
        ducimus aspernatur magnam, magni animi quod possimus beatae hic vero
        quaerat, laudantium dolor, molestias aliquid minima laborum? Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Est modi alias
        facilis accusantium enim consequatur magnam magni, molestias rem
        molestiae, voluptate iusto explicabo incidunt voluptatibus assumenda
        tempora ipsa ratione? Esse.
      </div>
    </>
  );
}

export default App;
