let step = 'step1';

const step1 = document.getElementById('stepText1');
const step2 = document.getElementById('stepText2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

function next() {
  if (step === 'stepText1') {
    step = 'stepTxt2';
    step1.classList.add("ok");
    step1.classList.remove("active");
    step2.classList.add('active');

  } else if (step === 'step2') {
    step = 'step3';
    step2.classList.add("ok");
    step2.classList.remove("active");
    step3.classList.add('active');

  } else if (step === 'step3') {
    step = 'step4';
    step3.classList.add("ok");
    step3.classList.remove("active");
    step4.classList.add('active');

  } else if (step === 'step4') {
    step = 'complete';
    step4.classList.add("ok");
    step4.classList.remove("active");

    }
  }