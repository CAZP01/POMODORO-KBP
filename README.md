#Guild Manajemen Waktu

Selamat datang di aplikasi guild manajemen waktu.
Di sini petualang sekalian akan diubah menjadi manusia yang lebih disiplin dalam menjalani kehidupan.
Guild ini menunjang para petualang untuk menambah, menghapus, dan menandai misi (to-do list) yang telah selesai serta mengatur jumlah interval penaklukan (pomodoro) dan durasi tiap interval.

#Sistem Interval

Saat melakukan penaklukan, para petualang dapat mengatur jumlah interval yang diperlukan. Satu interval penaklukan terdiri dari:
- Satu durasi penaklukan
- Satu durasi break
- Durasi break secara otomatis dihitung sebanyak 20% dari durasi penaklukan, sehingga petualang tidak memaksakan diri ataupun bermalas-malasan ketika penaklukan dimulai
- Mengulang lagi jika interval masih berlanjut
  
#Fitur
- Mengatur durasi penaklukan
- Memulai penaklukan
- Menambahkan misi baru
- Menandai misi yang telah selesai
- Menghapus misi yang sudah tidak diperlukan

#Penggunaan

Pastikan petualang sudah menginstal file html, js, css, dan font basketball yang telah disediakan. Petualang bisa masuk ke guild dengan membuka file bernama index.html dan terhubung ke internet.
Petualang bisa mulai melakukan persiapan sebelum memulai penaklukan dengan mengatur durasi penaklukan dan misi.
Durasi penaklukan bisa diatur dengan menekan tombol "ATUR DURASI" dan menyimpan pengaturannya dengan menekan tombol "SIMPAN PENGATURAN" di dalam pop up.
Sedangkan misi bisa diatur dengan menambahkan misi baru di kolom "NEW QUEST..." dengan menekan tombol "TAMBAH MISI" untuk menyimpannya di PAPAN MISI.
Misi yang tersedia di PAPAN MISI bisa dihapus jika sudah tidak diperlukan dengan menekan tombol "DROP" di lembar misi yang diinginkan.
Menekan kolom kotak yang ada di sebelah kiri lembar misi akan menandai misi tersebut sebagai misi yang telah selesai.
Jika semua persiapan selesai, penaklukan bisa dimulai dengan menekan tombol "MULAI PENAKLUKAN" yang ditandai dengan berkurangnya durasi penaklukan.
Setelah durasi penaklukan habis, durasi break akan muncul di bawahnya yang menandai jika break telah dimulai dan petualang diharuskan untuk istirahat, jangan sampai memaksakan diri untuk melanjutkan penaklukan. Penaklukan akan dimulai lagi jika interval belum habis.

#Sistem Aplikasi

Guild ini hanya menerapkan event listener dan bahasa pemrograman murni tanpa tambahan library eksternal. Sehingga guild ini menggunakan local storage untuk membuat data yang dimasukan tidak terhapus saat guild di refresh atau saat keluar dari guild.
Sebagian besar isi kode di javascript mengandalkan DOM, function built-in, function custom, dan beberapa event listener.
Pada bagian html menampilkan timer, tombol mulai penaklukan dan atur durasi, pengaturan durasi yang meanfaatkan pop-up yang ada di event listener javascript, dan papan misi.
Khusus pada bagian papan misi, pembuatan lembar misi dibantu oleh javascript.
Sedangkan bagian css hanya menggunakan pengaturan sederhana dengan tambahan font custom bernama basketball.
