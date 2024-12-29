const misibaru = document.getElementById("misibaru"); 
const tambahmisi = document.getElementById("tambahmisi");
const papanmisi = document.getElementById("papanmisi");
const mulaipenaklukan = document.getElementById("mulaipenaklukan");
const ulangpenaklukan = document.getElementById("ulangpenaklukan");
const waktupenaklukan = document.getElementById("waktupenaklukan");
const waktubreak = document.getElementById("waktubreak");
const setpenaklukan = document.getElementById("setpenaklukan");
const setbreak = document.getElementById("setbreak");
const penyimpanan = document.getElementById("penyimpanan");
const newpenaklukan = document.getElementById("newpenaklukan");
const modalPengaturan = document.getElementById("modalPengaturan");
const closeModal = document.querySelector(".close");
const saveSettings = document.getElementById("saveSettings");

let misi = JSON.parse(localStorage.getItem("misi")) || [];
let pomodoro = 25 * 60;
let breakDefault = 5 * 60;
let penyapuan = 1;
let eksplor = 0;
let pomodoroInterval;
let breakInterval;

function savePenyimpanan() {
    const pomodoroInput = parseInt(setpenaklukan.value);
    const penyapuanInput = parseInt(newpenaklukan.value);

    if (isNaN(pomodoroInput) || pomodoroInput <= 0 || isNaN(penyapuanInput) || penyapuanInput <= 0) {
        alert("Masukkan nilai yang valid untuk Pomodoro dan jumlah ulangan.");
        return;
    }

    pomodoro = pomodoroInput * 60;
    breakDefault = Math.floor(pomodoro * 0.2);
    penyapuan = penyapuanInput;

    localStorage.setItem("pomodoro", pomodoro);
    localStorage.setItem("breakDefault", breakDefault);
    localStorage.setItem("penyapuan", penyapuan);

    setbreak.value = Math.floor(breakDefault / 60);
    alert("Pengaturan Penaklukan Telah Disimpan!");
}

function loadPengaturan() {
    const tataPenaklukan = localStorage.getItem("pomodoro");
    const tataBreak = localStorage.getItem("breakDefault");
    const tataPenyapuan = localStorage.getItem("penyapuan");

    if (tataPenaklukan) {
        pomodoro = parseInt(tataPenaklukan);
        breakDefault = parseInt(tataBreak);
        penyapuan = parseInt(tataPenyapuan);

        setpenaklukan.value = pomodoro / 60;
        setbreak.value = Math.floor(breakDefault / 60);
        newpenaklukan.value = penyapuan;
    }
}

function RequestMisi() {
    localStorage.setItem("misi", JSON.stringify(misi));
}

function Penyelesaian() {
    papanmisi.innerHTML = "";
    misi.forEach((task, index) => {
        const li = document.createElement("li");
        li.id = "updatemisi";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => MisiSukses(index));

        if (task.completed) {
            li.classList.add("completed");
        }

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task.text));

        const taskgagal = document.createElement("button");
        taskgagal.textContent = "Drop";
        taskgagal.addEventListener("click", () => HapusMisi(index));
        li.appendChild(taskgagal);

        papanmisi.appendChild(li);
    });
}

tambahmisi.addEventListener("click", () => {
    if (misibaru.value.trim() !== "") {
        const tugasBaru = {
            text: misibaru.value,
            completed: false
        };
        misi.push(tugasBaru);
        misibaru.value = "";
        RequestMisi();
        Penyelesaian();
    }
});

function HapusMisi(index) {
    misi.splice(index, 1);
    RequestMisi();
    Penyelesaian();
}

function MisiSukses(index) {
    misi[index].completed = !misi[index].completed;
    RequestMisi();
    Penyelesaian();
}

window.addEventListener("load", () => {
    Penyelesaian();
    loadPengaturan();
});

function startPenaklukan() {
    mulaipenaklukan.disabled = true;
    waktubreak.style.display = 'none';
    eksplor = 0;
    SeriusMode();
}

function updatePenaklukan() {
    const minutes = Math.floor(pomodoro / 60);
    const seconds = pomodoro % 60;
    waktupenaklukan.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateBreak() {
    const menit = Math.floor(breakDefault / 60);
    const detik = breakDefault % 60;
    waktubreak.textContent = `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
}

function resetPenaklukan() {
    pomodoro = parseInt(setpenaklukan.value) * 60;
    breakDefault = Math.floor(pomodoro * 0.2);

    updatePenaklukan();
    updateBreak();

    waktubreak.style.display = "none";
    mulaipenaklukan.disabled = false;
}

function SeriusMode() {
    if (eksplor < penyapuan) {
        pomodoroInterval = setInterval(() => {
            const menit = Math.floor(pomodoro / 60);
            const detik = pomodoro % 60;
            waktupenaklukan.textContent = `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;

            if (pomodoro <= 0) {
                alert("Jangan Gegabah! Istirahat Sejenak...");
                clearInterval(pomodoroInterval);
                startBreak();
            } else {
                pomodoro--;
            }
        }, 1000);
        resetPenaklukan();
    } else {
        alert("Penaklukan Selesai!");
    }
}

function startBreak() {
    updateBreak();
    waktubreak.style.display = "block";

    breakInterval = setInterval(() => {
        const menit = Math.floor(breakDefault / 60);
        const detik = breakDefault % 60;
        waktubreak.textContent = `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;

        if (breakDefault <= 0) {
            clearInterval(breakInterval);
            eksplor++;
            SeriusMode();
            alert("Break Selesai!");
        } else {
            breakDefault--;
        }
    }, 1000);
}

penyimpanan.addEventListener("click", () => {
    modalPengaturan.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modalPengaturan.style.display = "none";
});

saveSettings.addEventListener("click", () => {
    const pomodoroInput = parseInt(document.getElementById("setpenaklukan").value);
    const penyapuanInput = parseInt(document.getElementById("newpenaklukan").value);

    if (isNaN(pomodoroInput) || pomodoroInput <= 0 || isNaN(penyapuanInput) || penyapuanInput <= 0) {
        alert("Masukkan nilai yang valid untuk Pomodoro dan jumlah ulangan.");
        return;
    }

    pomodoro = pomodoroInput * 60;
    breakDefault = Math.floor(pomodoro * 0.2);
    penyapuan = penyapuanInput;

    localStorage.setItem("pomodoro", pomodoro);
    localStorage.setItem("breakDefault", breakDefault);
    localStorage.setItem("penyapuan", penyapuan);

    document.getElementById("setbreak").value = Math.floor(breakDefault / 60);
    alert("Pengaturan Penaklukan Telah Disimpan!");

    modalPengaturan.style.display = "none";
});

mulaipenaklukan.addEventListener("click", () => {
    startPenaklukan();
});