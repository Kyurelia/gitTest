let sahA = document.querySelectorAll(".modSah");
let sahB = document.getElementById("yoyo");

// sah.addEventListener('click', () => {
// 	sahSesame.classList.toggle('modSah');
// 	ups.classList.toggle('modSh');

// });

for (let i = 0; i < 4; i++) {
	sahB.addEventListener('click', () => {
		console.log(i);
		sahA.classList.toggle("modSah");
	});
};
