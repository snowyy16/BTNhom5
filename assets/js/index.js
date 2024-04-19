var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("txtName");
  const phone = document.getElementById("txtPhone");
  const email = document.getElementById("txtEmail");
  const khoaHoc = document.getElementById("idKhoaHoc");
  const ngaySinh = document.getElementById("txtNgaySinh");
  const TP = document.getElementById("idTP");
  const Quan = document.getElementById("idQuan");
  const coSo = document.getElementById("idCoSo");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", ()=> {
    const khoaHocText = khoaHoc.options[khoaHoc.selectedIndex];
    const TPText = TP.options[TP.selectedIndex];
    const QuanText = Quan.options[Quan.selectedIndex];
    const coSoText = coSo.options[coSo.selectedIndex];

    const data = {
      namedata : name.value,
      phonedata : phone.value,
      emaildata : email.value,
      khoaHocdata : khoaHocText.text,
      ngaySinhdata : ngaySinh.value,
      TPdata : TPText.text,
      Quandata : QuanText.text,
      CoSodata : coSoText.text
    }

    if(data.namedata && data.phonedata && data.emaildata && data.khoaHocdata && data.ngaySinhdata && data.TPdata
      && data.Quandata && data.CoSodata ) {
      postGG(data);
    }
    else {
      alert("thieu");
    }
  });
});

async function postGG(data) {
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScsKngYGi3Qe8GFmaZK1-bgPr-sEIKQMXWLopGpH1W22cxLeQ/formResponse"

  const postName = "entry.513550977";
  const postPhone = "entry.1844296783";
  const postEmail = "entry.2045447861";
  const postKhoaHoc = "entry.2086721875";
  const postNgaySinh = "entry.1421769243";
  const postTp = "entry.189892339";
  const postQuan = "entry.1343445638";
  const postCoso = "entry.2069944678";

  const formData = new FormData();
  formData.append(postName, data.namedata);
  formData.append(postPhone, data.phonedata);
  formData.append(postEmail, data.emaildata);
  formData.append(postKhoaHoc, data.khoaHocdata);
  formData.append(postNgaySinh, data.ngaySinhdata);
  formData.append(postTp, data.TPdata);
  formData.append(postQuan, data.Quandata);
  formData.append(postCoso, data.CoSodata);

  try {
    await fetch(formURL, {
      method: "POST",
      body: formData
    })
  } catch {
    console.error("ERROR");
  }
}
