/* ***** Selection Pages ***** */
function SelectionPages(hidShow) {
  if (hidShow == "HomePage") {
    document.getElementById("HomePageSection").style.display = "inline-block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
  } else {
    document.getElementById("HomePageSection").style.display = "none";
    document.getElementById("section1").style.display = "inline-block";
    document.getElementById("section2").style.display = "inline-block";
    if (hidShow == "Tables") {
      document.getElementById("FurnSection").style.display = "inline-block";
      SelectFurnCategory("na");
      document.getElementById("tableIntro").style.display = "grid";
      document.getElementById("FurnituresDiv").style.display = "none";
    }
  }
}
/* ***** END of Selection Pages ***** */
/*=======================================================================================================*/
/* ***** FURNITURE DISPLAY Selection ******/
function SelectFurnCategory(tableSelect) {
  document.getElementById("tableIntro").style.display = "none";
  document.getElementById("FurnituresDiv").style.display = "block";
  let Tables_Img = [
    [
      "https://live.staticflickr.com/65535/52836297535_69e4f0ba07_o.png",
      "https://live.staticflickr.com/65535/52835315912_a3c0055d68_o.png",
      "https://live.staticflickr.com/65535/52835316452_52de8846f2_o.png",
      "https://live.staticflickr.com/65535/52836337283_3b3956da21_o.png",
      "https://live.staticflickr.com/65535/52835316502_08744895da_o.png",
      "https://live.staticflickr.com/65535/52836337058_04ec761c8a_o.jpg",
      "https://live.staticflickr.com/65535/52836297370_d1c12a13fe_o.png",
      "https://live.staticflickr.com/65535/52836073179_4e9ae9749c_o.png",
      "https://live.staticflickr.com/65535/52835888901_566600b901_o.png",
      "https://live.staticflickr.com/65535/52836072824_077a740cd6_o.png",
    ],
    [
      "https://live.staticflickr.com/65535/52836317085_c718321dbf_c.jpg",
      "https://live.staticflickr.com/65535/52836317075_f0e1f440f1_c.jpg",
      "https://live.staticflickr.com/65535/52835910181_b11f156a07_c.jpg",
      "https://live.staticflickr.com/65535/52836358653_e18d3b6f93_c.jpg",
      "https://live.staticflickr.com/65535/52835910606_aaf7541757_c.jpg",
      "https://live.staticflickr.com/65535/52836094179_2a93bfbeeb_c.jpg",
      "https://live.staticflickr.com/65535/52836316440_a63afb594a_c.jpg",
      "https://live.staticflickr.com/65535/52835910056_c12d73f633_c.jpg",
      "https://live.staticflickr.com/65535/52836316395_1bac09440a_c.jpg",
      "https://live.staticflickr.com/65535/52836358233_1b7a0399cf_c.jpg",
    ],
    [
      "https://live.staticflickr.com/65535/52835341752_6995c13070_c.jpg",
      "https://live.staticflickr.com/65535/52835915736_49d6023f72_c.jpg",
      "https://live.staticflickr.com/65535/52836322195_64960243b4_z.jpg",
      "https://live.staticflickr.com/65535/52835915931_96cfa186c7_c.jpg",
      "https://live.staticflickr.com/65535/52836363728_57190b63c9_c.jpg",
      "https://live.staticflickr.com/65535/52835915636_e46f1fc5ea_c.jpg",
      "https://live.staticflickr.com/65535/52836363663_a0a12db096_c.jpg",
      "https://live.staticflickr.com/65535/52835915626_b503cf8174_c.jpg",
      "https://live.staticflickr.com/65535/52835341472_b9668967e3_c.jpg",
      "https://live.staticflickr.com/65535/52835341597_f5e4486577_c.jpg",
    ],
    [
      "https://live.staticflickr.com/65535/52835357777_2446ea8fb2_c.jpg",
      "https://live.staticflickr.com/65535/52836380288_182c38dddc_c.jpg",
      "https://live.staticflickr.com/65535/52836379898_0b147292a7_c.jpg",
      "https://live.staticflickr.com/65535/52836116114_5898b76071_c.jpg",
      "https://live.staticflickr.com/65535/52835928081_286617b0d1_c.jpg",
      "https://live.staticflickr.com/65535/52835369152_696b0c8d8e_c.jpg",
      "https://live.staticflickr.com/65535/52836390993_1c53590211_c.jpg",
      "https://live.staticflickr.com/65535/52835942326_47868495e5_c.jpg",
      "https://live.staticflickr.com/65535/52836126714_4e0577cba4_c.jpg",
      "https://live.staticflickr.com/65535/52836105949_5d3dedb88a_c.jpg",
    ],
    [
      "https://live.staticflickr.com/65535/52836495035_f0b732b89e_c.jpg",
      "https://live.staticflickr.com/65535/52836092116_c749f48743_c.jpg",
      "https://live.staticflickr.com/65535/52835518377_a31fc6b4c5_c.jpg",
      "https://live.staticflickr.com/65535/52836274714_70127afcec_c.jpg",
      "https://live.staticflickr.com/65535/52836493960_c29ee604d7_c.jpg",
      "https://live.staticflickr.com/65535/52835517017_6c31446c60_c.jpg",
      "https://live.staticflickr.com/65535/52836273254_c7076d5085_c.jpg",
      "https://live.staticflickr.com/65535/52836537658_5076d7d586_c.jpg",
      "https://live.staticflickr.com/65535/52835518042_2ee765fe98_c.jpg",
      "https://live.staticflickr.com/65535/52835515307_09a9f56f11_c.jpg",
    ]
  ];

  let x = 0;
  let temp_string_id = "";
  let SelectedSection = true;
  let Set_of_Furniture = [
    "4sitter",
    "6sitter",
    "8sitter",
    "LivingRoom",
    "Outdoor",
  ];
  let Furniture_Header = [
    "4 Sitter Dining Table Set",
    "6 Sitter Dining Table Set",
    "8 Sitter Dining Table Set",
    "Living Room Tables",
    "Outdoor Tables",
  ];
  do {
    if (tableSelect == Set_of_Furniture[x]) {
      document.getElementById("FurnSectH2").textContent = Furniture_Header[x];
      for (let y = 1; y <= 10; y++) {
        temp_string_id = "img_id_" + "" + y;

        document
          .getElementById(temp_string_id)
          .setAttribute("src", Tables_Img[x][y - 1]);
        var temp2 = x + "-" + y - 1;
      }
      SelectedSection = false;
    } else if (x > 3) {
      SelectedSection = false;
    }
    x++;
  } while (SelectedSection);
}
/* ***** END of FURNITURE DISPLAY Selection ******/
