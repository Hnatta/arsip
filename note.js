  const data = [

    
 {note: "Cara terbaik tuk melupakan masa lalu adalah bukan dengan menghindari atau menyesalinya, namun dengan menerima dan memaafkanya.",},

  {note:"Jika kita biarkan masa lalu mengusik hidup kita saat ini, tentu kita tak akan pernah bisa berikan yg terbaik tuk dapat masa depan yg baik.",},

{note:"Jangan menghindari sesuatu, karena kamu tak memahami hal itu. Jangan takut mencoba, jadikan dirimu lebih baik dari sebelumnya."},

  {note: "Diam bukan berarti aku lemah,aku hanya mencoba untuk lebih mengerti kamu (⌣́_⌣̀).",  },

  {note:"hanya bisa harapkan keajaiban datang hadir di pundaku dan melengkapi hayalku.",  },

  {note:"Jangan terus berharap pada dia yg telah pergi. Buktikan hidupmu lebih baik dan bahagia tanpa dirinya.",},

{note: "dalam hati tak teryakinkan segalanya akan berubah ( ° -`⌣ ´ -)ε ´ - °).",},

  {note:"Dalam kesendirianku. Bayangan dirimu masih selalu datang menghampiri. Memelukku dan menguatkanku .",},

  {note: "Jika kau melihat ke atas, jgn lupa untuk melihat ke bawah. Walaupun terpana dengan keindahan langit, jgn lupa Bumi yg memberimu kehidupan..",  },

  {note:"Berhenti menyalahkan masa lalu, cobalah untuk menerimanya dan memahami bahwa itu hanya buatmu lebih kuat dan dewasa .",  },

{note: "Kamu tak akan bisa hanya sekedar teman biasa dengan dia yg PERNAH kamu cinta, karena sebagian dirimu akan selalu mencintainya.",},

  {note:"Sesungguhnya kita  itu lebih berani, kuat & pintar dari yg kita duga. Namun terkadang itu semua tersembunyi di dalam bayang keraguan .",},

  {note: "pengalaman bukanlah apa yang terjadi kepada kita,tapi apa yang kita lakukan pada kejadian yang menimpa kita.",  },

  {note:"Sahabat bukan mereka yg berapa lama telah kamu kenal, namun mereka yg datang menemukanmu dan tak pernah meninggalkanmu .",  },

{note: "Hidup bukalah tentang menemukan dirimu sendiri.hidup adalah tentang menciptakan dirimu sendiri.",},

  {note:"Aku tidak peduli siapa yang kau cintai pertama kali... yang penting akulah cinta terakhirmu ( ° -`⌣ ´ -)ε ´ - °) .",},

  {note: "Tidak ada hal yang kebetulan diperjalanan hidup ini semuanya sudah terencana.",  },

  {note:"Taukah kau aku bisa jadi pelangi untukmu tapi aku juga bisa jadi hujan bahkan badai sekalipun jika kau sakiti .",  },
];

const showMoreBtn = document.querySelector(
  ".testimonials-container .show-more-btn"
);
const testimonials = document.querySelector(".testimonials");
let latestTestimonialIndex = 0;

const generateTestimonial = (videoUrl, review, name, designation) => {
  const htmlCode = `
<div class="testimonial">
  <div class="note"  style="position: relative;border: 1px solid #dddddd;-moz-border-radius: 4px;border-radius: 4px;padding: 15px 30px;margin: 15px 0px;font-family: &quot;Roboto&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;font-weight: 400;text-align: left;display: flex;text-decoration: none;text-transform: none;color: #666666;cursor: pointer;font-size: 24px;line-height: 140%;letter-spacing: 0.05em;justify-content: center;">
    ${review}
  </div>
  <div class="bottom">
</div>`;

  return htmlCode;
};

const showTestimonial = () => {
  let index = latestTestimonialIndex;

  for (let i = index; i < index + 4; i++) {
    if (!data[i]) {
      showMoreBtn.style.display = "none";
      return;
    }

    testimonials.innerHTML += generateTestimonial(
      data[i].videoUrl,
      data[i].note,
      data[i].name,
      data[i].designation
    );

    latestTestimonialIndex++;
  }
};

showTestimonial();

showMoreBtn.addEventListener("click", showTestimonial);
