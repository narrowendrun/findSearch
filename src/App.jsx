import { useEffect, useState } from "react";
import editIcon from "./images/edit.svg";
function App() {
  const [findText, setfindText] = useState("");
  const [count, setCount] = useState(0);

  // Modi was born and raised in Vadnagar in northeastern Gujarat, where he completed his secondary education. He was introduced to the RSS at the age of eight. His account of helping his father sell tea at the Vadnagar railway station has not been reliably corroborated. At age 18, he was married to Jashodaben Modi, whom he abandoned soon after, only publicly acknowledging her four decades later when legally required to do so. Modi became a full-time worker for the RSS in Gujarat in 1971. The RSS assigned him to the BJP in 1985 and he held several positions within the party hierarchy until 2001, rising to the rank of general secretary.[c]

  // In 2001, Modi was appointed Chief Minister of Gujarat and elected to the legislative assembly soon after. His administration is considered complicit in the 2002 Gujarat riots,[d] and has been criticised for its management of the crisis. A little over 1,000 people were killed, according to official records, three-quarters of whom were Muslim; independent sources estimated 2,000 deaths, mostly Muslim.[11] A Special Investigation Team appointed by the Supreme Court of India in 2012 found no evidence to initiate prosecution proceedings against him.[e] While his policies as chief minister, which were credited for encouraging economic growth, were praised, Modi's administration was criticised for failing to significantly improve health, poverty and education indices in the state.[f] In the 2014 Indian general election, Modi led the BJP to a parliamentary majority, the first for a party since 1984. His administration increased direct foreign investment, and it reduced spending on healthcare, education, and social-welfare programmes. Modi began a high-profile sanitation campaign, controversially initiated the 2016 demonetisation of high-denomination banknotes and introduced the Goods and Services Tax, and weakened or abolished environmental and labour laws.

  // Modi's administration launched the 2019 Balakot airstrike against an alleged terrorist training camp in Pakistan. The airstrike failed,[14][15] and the deaths of six Indian personnel to friendly fire was later revealed: but the action had nationalist appeal.[16] Modi's party won the 2019 general election which followed.[17] In its second term, his administration revoked the special status of Jammu and Kashmir, an Indian-administered portion of the disputed Kashmir region,[18][19] and introduced the Citizenship Amendment Act, prompting widespread protests, and spurring the 2020 Delhi riots in which Muslims were brutalised and killed by Hindu mobs,[20][21][22] sometimes with the complicity of police forces controlled by the Modi administration.[23][24] Three controversial farm laws led to sit-ins by farmers across the country, eventually causing their formal repeal. Modi oversaw India's response to the COVID-19 pandemic, during which 4.7 million out of 1.4 billion Indians died, according to the World Health Organization's estimates.[25][26]

  // Under Modi's tenure, India has experienced democratic backsliding, or the weakening of democratic institutions, individual rights, and freedom of expression.[27][28][g] As prime minister, he has received consistently high approval ratings.[34][35][36] Modi has been described as engineering a political realignment towards right-wing politics. He remains a controversial figure domestically and internationally, over his Hindu nationalist beliefs and handling of the Gujarat riots, which have been cited as evidence of a majoritarian and exclusionary social agenda.[h]`;
  const placeholder = "sample text here";
  const [textVal, setTextVal] = useState(placeholder);
  function edit(x) {
    //if x then edit mode else find mode
    if (x) {
      document.getElementById("textWallEditor").style.opacity = "1";
      document.getElementById("textWallDiv").style.opacity = "0";
      document.getElementById("textWallEditor").style.zIndex = "5";
      document.getElementById("textWallDiv").style.zIndex = "-1";
    } else {
      document.getElementById("textWallEditor").style.opacity = "0";
      document.getElementById("textWallDiv").style.opacity = "1";
      document.getElementById("textWallEditor").style.zIndex = "-1";
      document.getElementById("textWallDiv").style.zIndex = "0";
    }
  }
  useEffect(() => {
    if (findText !== "") {
      edit(0);
      let stringArray = textVal.split("\n");
      stringArray = stringArray
        .map((line) => {
          return line.replace(
            new RegExp(findText, "gi"),
            `<span class="span-custom">$&</span>`
          );
        })
        .join(" ");
      document.getElementById("textWallDiv").innerHTML = stringArray;
    }
  }, [findText]);
  return (
    <>
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
            onClick={() => edit(0)}
          />
          <p id="count">{count}</p>
        </div>
      </div>
      <div id="mainContainer-text" className="container">
        <textarea
          className="container textWall"
          id="textWallEditor"
          value={textVal}
          onChange={(e) => setTextVal(e.target.value)}
        ></textarea>
        <div
          id="textWallDiv"
          className="container textWall"
          onClick={() => edit(1)}
        >
          {textVal}
        </div>
      </div>
    </>
  );
}

export default App;
