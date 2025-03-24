let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

icon1.addEventListener("click", toggleIcons);
icon2.addEventListener("click", toggleIcons);

function toggleIcons() {
    icon1.classList.toggle("open");
    icon1.classList.toggle("close");
    icon2.classList.toggle("open");
    icon2.classList.toggle("close");
}




// handel active 

let words = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

words.forEach(element => {
    element.addEventListener("click" , ()=>{
        words.forEach(e=>{
            e.classList.remove("active");
        })
        element.classList.add("active");
    })
    
});




// typewrite 
const text = "اجود انواع العسل و الزيوت الفاخرة";
const speed = 100; 
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
        // if(index==text.length){
        //     document.getElementById("typewriter").innerHTML = "|"
        //     index=0;
        // }
    }
}

typeWriter()













// //////////////////////handel product details

let xClose = document.querySelector(".x-close");
xClose.addEventListener("click",()=>{
    document.querySelector(".product-section").style.display = "none";
    document.querySelector(".main-section").style.display = "block";
});



// handel click on the more button////////////////////////

let mores = document.querySelectorAll(".more");
let fillSectino = document.querySelector(".product-section .details");
console.log(mores);

mores.forEach(m=>{
    m.addEventListener("click" , ()=>{
        document.querySelector(".product-section").style.display = "block";
        document.querySelector(".main-section").style.display = "none";
        if(m.id == 2){
            fillSectino.innerHTML = `<img src="./images/moaleh.jpg" class="rounded-4 col-12 col-md-4" alt="">
      <div class="product-desc col-12 col-md-7">
      <div class="first-line mt-5">
        <h3>عسل  الموالح</h3>
        <p>عسل الموالح هو نوع من العسل الطبيعي يُنتج من رحيق زهور أشجار الموالح (الحمضيات) مثل البرتقال، الليمون، اليوسفي، والجريب فروت. يتميز برائحته العطرية الخفيفة وطعمه اللذيذ، وهو غني بالفوائد الصحية.   😊</p>
      </div>
        <div class="ingrediants">
          <h3>المواصفات</h3>
          <ul>
            <li>االلون: يميل إلى اللون الذهبي الفاتح أو الكهرماني</li>
            <li>النكهة: حلوة وخفيفة مع نكهة حمضية منعشة.</li>
            <li>القوام: متوسط الكثافة، ليس كثيفًا جدًا.</li>
            <li>التبلور: يتبلور بسرعة نسبية مقارنة بأنواع أخرى مثل عسل السدر.</li>
          </ul>
        </div>
        <div class="benefits">
          <h3>الفوائد الصحية</h3>
          <ul>
            <li>تعزيز المناعة 🛡️: يحتوي على نسبة عالية من فيتامين C ومضادات الأكسدة التي تقوي الجهاز المناعي.</li>
            <li>مضاد للبكتيريا والفيروسات 🦠: يمتلك خصائص طبيعية تحارب العدوى وتساعد في تهدئة التهابات الحلق.</li>
            <li>تحسين الهضم 🍽️: يعمل على تهدئة المعدة وتحسين عملية الهضم.</li>
            <li>مفيد لصحة البشرة ✨: يساعد في ترطيب البشرة وتخفيف الالتهابات الجلدية.</li>
          </ul>
        </div>
      </div>`
        }else if (m.id == 1){
            fillSectino.innerHTML = `<img src="./images/noarahBarsim.jpg" class="rounded-4 col-12 col-md-4" alt="">
            <div class="product-desc col-12 col-md-7">
            <div class="first-line mt-5">
              <h3>عسل نوارة البرسيم</h3>
              <p>عسل نوارة البرسيم هو نوع من العسل الطبيعي المستخرج من رحيق زهور البرسيم، وهو أحد أكثر أنواع العسل انتشارًا بسبب طعمه اللذيذ وفوائده الصحية. إليك أهم المعلومات عنه: إذا كنت تفكر في شراء عسل نوارة البرسيم، فمن الأفضل الحصول عليه من مصادر موثوقة لضمان جودته ونقائه   😊</p>
            </div>
              <div class="ingrediants">
                <h3>المواصفات</h3>
                <ul>
                  <li>اللون: يتراوح بين الأصفر الفاتح والذهبي.</li>
                  <li>النكهة: خفيفة وحلوة مع مذاق ناعم</li>
                  <li>القوام: سائل وخفيف مقارنة ببعض أنواع العسل الأخرى.</li>
                  <li>التبلور: يتبلور ببطء وقد يصبح قوامه أكثر سمكًا بمرور الوقت.</li>
                </ul>
              </div>
              <div class="benefits">
                <h3>الفوائد الصحية</h3>
                <ul>
                  <li>مصدر طبيعي للطاقة: يحتوي على سكريات طبيعية مثل الفركتوز والجلوكوز التي تمد الجسم بالطاقة.</li>
                  <li>تعزيز المناعة: يحتوي على مضادات أكسدة تساعد في تقوية جهاز المناعة.</li>
                  <li>تحسين الهضم: يعمل كمهدئ طبيعي للجهاز الهضمي ويساعد في علاج اضطرابات المعدة.</li>
                  <li>مفيد لصحة القلب: قد يساهم في تقليل مستويات الكوليسترول الضار.</li>
                </ul>
              </div>
            </div>`
        }else {
            fillSectino.innerHTML = `<img src="./images/ziton.jpg" class="rounded-4 col-12 col-md-4" alt="">
      <div class="product-desc col-12 col-md-7">
      <div class="first-line mt-5">
        <h3>زيت الزيتون</h3>
        <p>زيت الزيتون هو زيت طبيعي يُستخرج من ثمار الزيتون، وهو أحد أكثر الزيوت الصحية والمفيدة للجسم. يتميز بنكهته الغنية وفوائده العديدة للصحة والبشرة والشعر، ويُستخدم في الطهي والعلاجات الطبيعية. 🫒</p>
      </div>
        <div class="ingrediants">
          <h3>المواصفات</h3>
          <ul>
            <li>اللون: يتراوح بين الأصفر الذهبي والأخضر حسب نوع الزيتون وطريقة العصر.</li>
            <li>النكهة: غنية ومميزة، وقد تكون خفيفة أو حادة حسب نوع الزيت.</li>
            <li>القوام: متوسط الكثافة، غير لزج وسهل الامتصاص.</li>
            <li>الجودة: يتوفر بدرجات مختلفة، مثل البكر الممتاز والبكر والعادي.</li>
          </ul>
        </div>
        <div class="benefits">
          <h3>الفوائد الصحية</h3>
          <ul>
            <li>تعزيز صحة القلب ❤️: يحتوي على دهون صحية تقلل من الكوليسترول الضار وتدعم صحة القلب.</li>
            <li>مضاد للأكسدة 🛡️: غني بمضادات الأكسدة التي تحارب الشيخوخة وتحمي الجسم من الأمراض.</li>
            <li>تحسين الهضم 🍽️: يساعد في تحسين عملية الهضم وتقليل مشاكل المعدة.</li>
            <li>مفيد للبشرة والشعر ✨: يرطب البشرة ويعزز صحة الشعر ويمنحه لمعانًا طبيعيًا.</li>
          </ul>
        </div>
      </div>`;

        }
        
    })
})

























let selectbox = document.querySelector(".form-select");
let radiobuttons = document.querySelector(".radiobuttons");

function updateRadioButtons(selectedValue) {
    if (selectedValue === "نوارة برسيم") {
        radiobuttons.innerHTML = `
        <div class="mb-3 custom-checkbox">
            <input id="checkbox1" type="checkbox" name="honeyOption" value="واحد كيلو عسل نوارة برسيم بسعر ١٤٠ جنية + مصاريف الشحن">
            <label for="checkbox1">واحد كيلو عسل نوارة برسيم بسعر ١٤٠ جنية + مصاريف الشحن</label>
        </div>
        <div class="mb-3 custom-checkbox">
            <input id="checkbox2" type="checkbox" name="honeyOption" value="٣ك عسل نوارة برسيم بسعر ٤٠٠ جنية + مصاريف الشحن">
            <label for="checkbox2">٣ك عسل نوارة برسيم بسعر ٤٠٠ جنية + مصاريف الشحن</label>
        </div>
        <div class="mb-3 custom-checkbox">
            <input id="checkbox3" type="checkbox" name="honeyOption" value="٦ك عسل نوارة برسيم بسعر الاكثر مبيعآ بسعر ٨٢٥ جنية وشحن مجاني">
            <label for="checkbox3">٦ك عسل نوارة برسيم بسعر الاكثر مبيعآ بسعر ٨٢٥ جنية وشحن مجاني</label>
        </div>`;
    } 
    else if (selectedValue === "موالح") {
        radiobuttons.innerHTML = `
        <div class="mb-3 custom-checkbox">
            <input id="checkbox4" type="checkbox" name="honeyOption" value="واحد كيلو عسل موالح بسعر 170 جنية + مصاريف الشحن">
            <label for="checkbox4">واحد كيلو عسل موالح بسعر 170 جنية + مصاريف الشحن</label>
        </div>
        <div class="mb-3 custom-checkbox">
            <input id="checkbox5" type="checkbox" name="honeyOption" value="٣ك عسل موالح بسعر 500 جنية + مصاريف الشحن">
            <label for="checkbox5">٣ك عسل موالح بسعر 500 جنية + مصاريف الشحن</label>
        </div>
        <div class="mb-3 custom-checkbox">
            <input id="checkbox6" type="checkbox" name="honeyOption" value="٦ك عسل موالح بسعر 1000 جنية وشحن مجاني">
            <label for="checkbox6">٦ك عسل موالح بسعر 1000 جنية وشحن مجاني</label>
        </div>`;
    } 
    else if (selectedValue === "زيت زيتون") {
        radiobuttons.innerHTML = `
        <div class="mb-3 custom-checkbox">
            <input id="checkbox7" type="checkbox" name="honeyOption" value="١ لتر بسعر ٣٧٥ جنية + مصاريف الشحن">
            <label for="checkbox7">١ لتر بسعر ٣٧٥ جنية + مصاريف الشحن</label>
        </div>
        <div class="mb-3 custom-checkbox">
            <input id="checkbox8" type="checkbox" name="honeyOption" value="٢ لتر بسعر ٧٥٠ جنية وشحن مجاني">
            <label for="checkbox8">٢ لتر بسعر ٧٥٠ جنية + وشحن مجاني</label>
        </div>`;
    }
}

selectbox.addEventListener("change", (event) => {
    updateRadioButtons(event.target.value);
});

let defaultValue = selectbox.value || "نوارة برسيم";
updateRadioButtons(defaultValue);




// handel order 

let arr = [];


let radiobuttonss = document.getElementById("radiobuttons");
let alertPrimary = document.querySelector(".alert-primary");
let cartona = "";

radiobuttonss.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      if(event.target.checked == true){
        arr.push(event.target.value)
      }else {
        let index = arr.indexOf(event.target.value);
        if (index !== -1) {
            arr.splice(index, 1); 
        }
      }
      
        console.log(arr);
        alertPrimary.innerHTML =`<h4 class="fw-bold text-center">الاوردر</h4>`
        for(let i = 0 ; i<arr.length ; i++){
          cartona = `<p class="order-p">${arr[i]}</p>`
          alertPrimary.innerHTML += cartona
        }
        alertPrimary.style.display = arr.length > 0 ? "block" : "none";

    }
});



// send to watsapp

let sendButton = document.querySelector(".sub");

sendButton.addEventListener("click" , function(e){
e.preventDefault();
let name = document.getElementById("exampleInputPassword1").value;
let phone = document.getElementById("exampleInputEmail1").value;
let product = document.querySelector(".form-select").value;
let selectedRadio = document.querySelector("input[name='honeyOption']:checked");


if(!name || !phone || !selectedRadio){
    alert("ادخل جميع البيانات بشكل صحيح")
    return;
}


let container = ""
// for(let i = 0 ; i< arr.length ; i++){
// container += arr[i];
// container+='\n';
// }
// console.log(container);
 container = arr.map(item => `- ${item}`).join("%0A");


let msg =  `الاسم: ${name}%0Aرقم الهاتف: ${phone}%0Aالكمية: ${container}`;
console.log(msg);

let whatsappUrl = `https://wa.me/201002669123?text=${msg}`;

window.open(whatsappUrl, "_blank");
})











