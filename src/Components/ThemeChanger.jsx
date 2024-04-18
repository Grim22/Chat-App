import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeChanger = () => {
    const themeValues = [
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]

    useEffect (() => {
        themeChange(false)
    });

    return (
        <select data-choose-theme className='w-[120px] font-medium'>
            <option disabled>Select Theme</option>
            <option className='text-primary'>Default</option>
            {themeValues.map((value) => (
                <option key={value.toLowerCase()} value={value.toLowerCase()}>{ value }</option>
            ))}
        </select>
    )
}

export default ThemeChanger

