import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Car,
  Train,
  Shield,
  Moon,
  Waves,
  Lock,
  Trees,
  Church,
  Route,
  CheckCircle,
  Home,
  Zap,
  Star,
  PlayCircle,
  Users,
  MessageSquare
} from 'lucide-react'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const advantages = [
    { icon: Car, title: "Dekat Tol Gabus", desc: "Akses tol cepat dan mudah" },
    { icon: Train, title: "Dekat Stasiun Cibitung", desc: "Transportasi umum terjangkau" },
    { icon: Shield, title: "SHM", desc: "Sertifikat Hak Milik" },
    { icon: Moon, title: "Lingkungan Islami", desc: "Nuansa islami dan nyaman" },
    { icon: Waves, title: "Bebas Banjir", desc: "Lokasi aman dari banjir" },
    { icon: Lock, title: "One Gate System", desc: "Keamanan terjamin" },
    { icon: Trees, title: "Taman & Playground", desc: "Area bermain anak" },
    { icon: Church, title: "Masjid Modern", desc: "Tempat ibadah terdekat" },
    { icon: Route, title: "Jogging Track", desc: "Sarana olahraga sehat" },
    { icon: CheckCircle, title: "Cicilan Ringan", desc: "Angsuran terjangkau" }
  ]

  const houseType = {
    name: "Type Topaz 36/60",
    specs: [
      "2 Kamar Tidur",
      "1 Kamar Mandi",
      "Carport",
      "Listrik 1300 Watt"
    ],
    price: "Harga mulai 185 jutaan"
  }

  const specifications = [
    "Rangka atap baja ringan",
    "Genteng beton",
    "Dinding batako double finishing",
    "Keramik 40x40",
    "Pondasi batu kali dan cakar ayam",
    "Plafon hollow + GRC",
    "Pintu kayu",
    "Septictank besar"
  ]

  const facilities = [
    "Masjid Jami",
    "Playground",
    "Gazebo",
    "Kolam pemancingan",
    "Lapangan olahraga",
    "Gedung serbaguna",
    "Area hijau",
    "Jalan lebar",
    "Keamanan 24 jam"
  ]

  const locations = [
    "Dekat akses Tol Gabus",
    "Dekat Stasiun Cibitung",
    "Dekat sekolah",
    "Dekat rumah sakit",
    "Dekat pasar",
    "Dekat Summarecon Bekasi"
  ]

  const gallery = [
    { src: "/images/gallery-gate.jpg", alt: "Gerbang perumahan", title: "Gerbang Perumahan" },
    { src: "/images/gallery-house.jpg", alt: "Rumah contoh", title: "Rumah Contoh" },
    { src: "/images/gallery-street.jpg", alt: "Jalan utama", title: "Jalan Utama" },
    { src: "/images/gallery-mosque.jpg", alt: "Fasilitas umum", title: "Masjid Modern" },
    { src: "/images/gallery-siteplan.jpg", alt: "Siteplan", title: "Siteplan" }
  ]

  const testimonials = [
    {
      name: "Pak Ahmad",
      text: "Alhamdulillah sudah 2 tahun tinggal di Griya Family 4. Lingkungannya sangat nyaman dan islami. Fasilitas lengkap dan aman untuk keluarga.",
      rating: 5
    },
    {
      name: "Bu Siti",
      text: "Rumahnya bagus, harga terjangkau, cicilan ringan. Dekat dengan tol dan stasiun, sangat strategis untuk bekerja.",
      rating: 5
    },
    {
      name: "Pak Rahman",
      text: "Komunitasnya sangat baik, banyak kegiatan islami. Anak-anak senang main di playground dan taman yang ada.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Griya Family 4</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#keunggulan" className="text-gray-700 hover:text-green-600 transition-colors">Keunggulan</a>
              <a href="#tipe" className="text-gray-700 hover:text-green-600 transition-colors">Tipe Rumah</a>
              <a href="#lokasi" className="text-gray-700 hover:text-green-600 transition-colors">Lokasi</a>
              <a href="#galeri" className="text-gray-700 hover:text-green-600 transition-colors">Galeri</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Griya Family 4 Cibitung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hunian Subsidi Modern<br />
            <span className="text-yellow-400">Bernuansa Islami</span> di Cibitung
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Rumah nyaman, strategis, dan berkualitas dengan cicilan terjangkau.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Survey Lokasi
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Hubungi Marketing
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Perumahan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            {...fadeInUp}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Griya Family 4 Cibitung</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Griya Family 4 adalah kawasan hunian subsidi modern di Cibitung Bekasi yang dikembangkan oleh PT Bangun Famili Sejahtera.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mengusung konsep hunian nyaman, islami, dan ramah keluarga dengan fasilitas lengkap dan lokasi strategis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sudah ribuan unit terbangun dan dihuni oleh keluarga yang bahagia.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Unit Terbangun</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600">Keamanan</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Kepuasan</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="keunggulan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Keunggulan Griya Family 4</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <advantage.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* House Type Section */}
      <section id="tipe" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tipe Rumah</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="max-w-2xl mx-auto"
            {...fadeInUp}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{houseType.name}</h3>
                <p className="text-green-600 font-semibold text-lg">{houseType.price}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {houseType.specs.map((spec, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                Dapatkan Brosur
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Spesifikasi Rumah</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                variants={fadeInUp}
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{spec}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fasilitas Kawasan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-gray-900">{facility}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lokasi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lokasi Strategis</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            {...fadeInUp}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dekat dengan Segala Kemudahan</h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Google Maps Integration</p>
                <p className="text-sm">Jl. Raya Cibitung, Cibitung, Bekasi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Galeri</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                variants={fadeInUp}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testimoni Pelanggan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Miliki Rumah Impian Anda Sekarang</h2>
            <p className="text-xl mb-8 text-green-100">
              Jangan lewatkan kesempatan memiliki hunian modern dengan cicilan terjangkau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Hubungi WhatsApp Marketing
              </button>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
                Survey Lokasi Sekarang
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Griya Family 4</h3>
              <p className="text-gray-300 mb-4">
                Hunian subsidi modern bernuansa islami di Cibitung Bekasi
              </p>
              <p className="text-gray-300">
                Dikembangkan oleh PT Bangun Famili Sejahtera
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">Jl. Raya Cibitung, Cibitung, Bekasi</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">(021) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">info@griyafamily4.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Link</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">Tentang Kami</a>
                <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">Tipe Rumah</a>
                <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">Lokasi</a>
                <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">Galeri</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sosial Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-4">
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  www.griyafamily4.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Griya Family 4. All rights reserved. | PT Bangun Famili Sejahtera
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
