use std::fs;
use std::io::{Error};

fn create_folder_and_file() -> Result<(), Error> {
    let home_dir = std::env::var("HOME").expect("Failed to get home directory");
    let folder_name = "com.harmonize";
    let file_name = "app.conf";
    let app_support_path = format!("{}/Library/Application Support", home_dir);
    let path = std::path::Path::new(&app_support_path).join(folder_name);

    // create folder if it doesn't exist
    if !path.exists() {
        fs::create_dir_all(&path)?;
    }

    // create file if it doesn't exist
    let file_path = path.join(file_name);
    if !file_path.exists() {
        fs::File::create(&file_path)?;
    }
    Ok(())
}

fn main() {
  if let Err(e) = create_folder_and_file() {
      eprintln!("Failed to create folder and file: {}", e);
      return;
  }

  let context = tauri::generate_context!();
  tauri::Builder::default()
      .menu(if cfg!(target_os = "macos") {
          tauri::Menu::os_default(&context.package_info().name)
      } else {
          tauri::Menu::default()
      })
      .run(context)
      .expect("error while running tauri application");
}
