fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    })
    .plugin(tauri_plugin_store::Builder::default().build())
    .run(context)
    .expect("error while running tauri application");
}
