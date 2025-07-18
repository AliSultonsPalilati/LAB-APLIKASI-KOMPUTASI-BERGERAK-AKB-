import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';

type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type FontConfig = { family: string; name: string; weight?: FontWeight; };
type Student = { nim: string; nama: string; };

const daftarMhs: Student[] = [
  { nim: "105841100119", nama: "Muhammad Yusuf" }, { nim: "105841100122", nama: "Siti Marwa" }, { nim: "105841100322", nama: "Fajar Eka Alamsyah" }, { nim: "105841100422", nama: "Ferdiansyah" }, { nim: "105841100622", nama: "Parwati" }, { nim: "105841100722", nama: "Nabila Ismail Matta" }, { nim: "105841100822", nama: "Nur Milani Hidayah" }, { nim: "105841100921", nama: "Arif Rahman" }, { nim: "105841101122", nama: "A. Fajar Apriliawan" }, { nim: "105841101222", nama: "Syaripuddin" }, { nim: "105841101322", nama: "Muhammad Adianto" }, { nim: "105841101522", nama: "Absarmarsal Rizwal Mahua" }, { nim: "105841101622", nama: "Syawaluddin" }, { nim: "105841101722", nama: "Andi Citra Ayu Lestari" }, { nim: "105841101822", nama: "Farisan" }, { nim: "105841101922", nama: "Erick Yusuf Kotte" }, { nim: "105841102222", nama: "Ali Sulton S Palilati" }, { nim: "105841102622", nama: "A. Ikram Mukarram" }, { nim: "105841102922", nama: "Ahmad Fathir" }, { nim: "105841103122", nama: "Nur Muhammad Ashman" }, { nim: "105841103322", nama: "Muhammad Faturrachman Iswan" }, { nim: "105841103422", nama: "Nurmisba" }, { nim: "105841103522", nama: "Alvian Syah Burhani" }, { nim: "105841103622", nama: "Majeri" }, { nim: "105841103722", nama: "Hamdani" }, { nim: "105841103822", nama: "Muliana" }, { nim: "105841109219", nama: "Muh. Asdar" }, { nim: "105841109820", nama: "Muh. Ashabul Khahfi" },
];

const fontList: FontConfig[] = [
  { family: 'LatoRegular', name: 'Lato' }, { family: 'RobotoMedium', name: 'Roboto' }, { family: 'OpenSansRegular', name: 'Open Sans' }, { family: 'PoppinsBold', name: 'Poppins' }, { family: 'MerriweatherBold', name: 'Merriweather' },
  { family: 'MulishVariable', name: 'Mulish', weight: '300' }, { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' }, { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' }, { family: 'RubikVariable', name: 'Rubik', weight: '700' }, { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

export default function Tugas4() {
  const [nim, setNim] = useState('105841102222');
  const [data, setData] = useState<{ sebelum: Student[], setelah: Student[], target: Student | null }>({ sebelum: [], setelah: [], target: null });

  const findAndSetData = () => {
    Keyboard.dismiss();
    const idx = daftarMhs.findIndex(m => m.nim === nim);
    if (idx === -1) return Alert.alert('Error', `NIM ${nim} tidak ditemukan.`);
    const total = daftarMhs.length;
    const sebelum = Array.from({ length: 5 }, (_, i) => daftarMhs[(idx - 5 + i + total) % total]);
    const setelah = Array.from({ length: 5 }, (_, i) => daftarMhs[(idx + 1 + i) % total]);
    setData({ sebelum, setelah, target: daftarMhs[idx] });
  };
  
  useEffect(() => {
    const initialNim = '105841102222';
    const idx = daftarMhs.findIndex(m => m.nim === initialNim);
    if (idx === -1) return;
    const total = daftarMhs.length;
    const sebelum = Array.from({ length: 5 }, (_, i) => daftarMhs[(idx - 5 + i + total) % total]);
    const setelah = Array.from({ length: 5 }, (_, i) => daftarMhs[(idx + 1 + i) % total]);
    setData({ sebelum, setelah, target: daftarMhs[idx] });
  }, []);

  return (
    <ScrollView style={s.sv}><Text style={s.header}>Tugas 4: Font & Urutan</Text><View style={s.searchBox}><TextInput style={s.input} value={nim} onChangeText={setNim} keyboardType="numeric" /><TouchableOpacity style={s.btn} onPress={findAndSetData}><Text style={s.btnTxt}>Cari</Text></TouchableOpacity></View>{data.target && (<View><Text style={s.subhead}>5 Nama Sebelum (Font Statis)</Text>{data.sebelum.map((mhs, i) => (<View key={mhs.nim} style={s.card}><Text style={[s.name, { fontFamily: fontList[i].family }]}>{mhs.nama}</Text><Text style={s.info}>Font: {fontList[i].name}</Text></View>))}<Text style={s.subhead}>Mahasiswa Target</Text><View style={s.targetCard}><Text style={s.targetName}>{data.target.nama}</Text><Text style={s.targetNim}>{data.target.nim}</Text></View><Text style={s.subhead}>5 Nama Setelah (Font Variabel)</Text>{data.setelah.map((mhs, i) => { const fontIdx = i + 5; return (<View key={mhs.nim} style={s.card}><Text style={[s.name, { fontFamily: fontList[fontIdx].family, fontWeight: fontList[fontIdx].weight }]}>{mhs.nama}</Text><Text style={s.info}>Font: {fontList[fontIdx].name} (Wt: {fontList[fontIdx].weight})</Text></View>);})}</View>)}</ScrollView>
  );
}

const s = StyleSheet.create({
  sv: { flex: 1, backgroundColor: '#f0f2f5', padding: 15 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  searchBox: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5, backgroundColor: '#fff' },
  btn: { marginLeft: 10, backgroundColor: '#007bff', padding: 8, borderRadius: 5, justifyContent: 'center' },
  btnTxt: { color: '#fff', fontWeight: 'bold' },
  subhead: { fontSize: 16, fontWeight: '600', marginTop: 15, marginBottom: 10, color: '#444' },
  card: { padding: 12, backgroundColor: '#fff', borderRadius: 5, marginBottom: 8, borderWidth: 1, borderColor: '#eee' },
  name: { fontSize: 16 },
  info: { fontSize: 11, color: '#666', marginTop: 3, fontStyle: 'italic' },
  targetCard: { padding: 15, backgroundColor: '#343a40', borderRadius: 5, alignItems: 'center' },
  targetName: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  targetNim: { fontSize: 14, color: '#ddd', marginTop: 5 },
});