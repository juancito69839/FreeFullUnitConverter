// --- Interfaces and Types ---
interface Unit {
  name: string;
  symbol: string;
  toBase: (val: number) => number;
  fromBase: (val: number) => number;
}

interface ConverterCategory {
  name: string;
  icon: string;
  units: Record<string, Unit>;
  baseUnit: string;
}

// --- Conversion Data ---
const CONVERTER_DATA: Record<string, ConverterCategory> = {
  length: {
    name: 'Length',
    icon: '📏',
    baseUnit: 'meter',
    units: {
      meter: { name: 'Meter', symbol: 'm', toBase: (v) => v, fromBase: (v) => v },
      kilometer: { name: 'Kilometer', symbol: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      centimeter: { name: 'Centimeter', symbol: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
      millimeter: { name: 'Millimeter', symbol: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      mile: { name: 'Mile', symbol: 'mi', toBase: (v) => v * 1609.34, fromBase: (v) => v / 1609.34 },
      yard: { name: 'Yard', symbol: 'yd', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
      foot: { name: 'Foot', symbol: 'ft', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      inch: { name: 'Inch', symbol: 'in', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
    },
  },
  temperature: {
    name: 'Temperature',
    icon: '🌡️',
    baseUnit: 'celsius',
    units: {
      celsius: { name: 'Celsius', symbol: '°C', toBase: (v) => v, fromBase: (v) => v },
      fahrenheit: { name: 'Fahrenheit', symbol: '°F', toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => (v * 9 / 5) + 32 },
      kelvin: { name: 'Kelvin', symbol: 'K', toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
    },
  },
  weight: {
    name: 'Weight/Mass',
    icon: '⚖️',
    baseUnit: 'kilogram',
    units: {
        kilogram: { name: 'Kilogram', symbol: 'kg', toBase: v => v, fromBase: v => v },
        gram: { name: 'Gram', symbol: 'g', toBase: v => v / 1000, fromBase: v => v * 1000 },
        milligram: { name: 'Milligram', symbol: 'mg', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
        pound: { name: 'Pound', symbol: 'lb', toBase: v => v * 0.453592, fromBase: v => v / 0.453592 },
        ounce: { name: 'Ounce', symbol: 'oz', toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
        ton: { name: 'Ton (Metric)', symbol: 't', toBase: v => v * 1000, fromBase: v => v / 1000 },
    },
  },
  volume: {
    name: 'Volume',
    icon: '🧪',
    baseUnit: 'liter',
    units: {
        liter: { name: 'Liter', symbol: 'L', toBase: v => v, fromBase: v => v },
        milliliter: { name: 'Milliliter', symbol: 'mL', toBase: v => v / 1000, fromBase: v => v * 1000 },
        gallon: { name: 'Gallon (US)', symbol: 'gal', toBase: v => v * 3.78541, fromBase: v => v / 3.78541 },
        quart: { name: 'Quart (US)', symbol: 'qt', toBase: v => v * 0.946353, fromBase: v => v / 0.946353 },
        pint: { name: 'Pint (US)', symbol: 'pt', toBase: v => v * 0.473176, fromBase: v => v / 0.473176 },
        cup: { name: 'Cup (US)', symbol: 'cup', toBase: v => v * 0.236588, fromBase: v => v / 0.236588 },
        cubicmeter: { name: 'Cubic Meter', symbol: 'm³', toBase: v => v * 1000, fromBase: v => v / 1000 },
    },
  },
   area: {
        name: 'Area',
        icon: '🗺️',
        baseUnit: 'square_meter',
        units: {
            square_meter: { name: 'Square Meter', symbol: 'm²', toBase: v => v, fromBase: v => v },
            square_kilometer: { name: 'Square Kilometer', symbol: 'km²', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            square_mile: { name: 'Square Mile', symbol: 'mi²', toBase: v => v * 2.59e6, fromBase: v => v / 2.59e6 },
            hectare: { name: 'Hectare', symbol: 'ha', toBase: v => v * 10000, fromBase: v => v / 10000 },
            acre: { name: 'Acre', symbol: 'acre', toBase: v => v * 4046.86, fromBase: v => v / 4046.86 },
            square_foot: { name: 'Square Foot', symbol: 'ft²', toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
        },
    },
    speed: {
        name: 'Speed',
        icon: '🚀',
        baseUnit: 'm_per_s',
        units: {
            m_per_s: { name: 'Meters/second', symbol: 'm/s', toBase: v => v, fromBase: v => v },
            km_per_h: { name: 'Kilometers/hour', symbol: 'km/h', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
            miles_per_h: { name: 'Miles/hour', symbol: 'mph', toBase: v => v / 2.237, fromBase: v => v * 2.237 },
            knot: { name: 'Knot', symbol: 'kn', toBase: v => v / 1.944, fromBase: v => v * 1.944 },
            foot_per_s: { name: 'Feet/second', symbol: 'ft/s', toBase: v => v / 3.281, fromBase: v => v * 3.281 },
        },
    },
    time: {
        name: 'Time',
        icon: '⏱️',
        baseUnit: 'second',
        units: {
            second: { name: 'Second', symbol: 's', toBase: v => v, fromBase: v => v },
            millisecond: { name: 'Millisecond', symbol: 'ms', toBase: v => v / 1000, fromBase: v => v * 1000 },
            minute: { name: 'Minute', symbol: 'min', toBase: v => v * 60, fromBase: v => v / 60 },
            hour: { name: 'Hour', symbol: 'h', toBase: v => v * 3600, fromBase: v => v / 3600 },
            day: { name: 'Day', symbol: 'd', toBase: v => v * 86400, fromBase: v => v / 86400 },
            week: { name: 'Week', symbol: 'wk', toBase: v => v * 604800, fromBase: v => v / 604800 },
        },
    },
    power: {
        name: 'Power',
        icon: '⚡',
        baseUnit: 'watt',
        units: {
            watt: { name: 'Watt', symbol: 'W', toBase: v => v, fromBase: v => v },
            kilowatt: { name: 'Kilowatt', symbol: 'kW', toBase: v => v * 1000, fromBase: v => v / 1000 },
            horsepower: { name: 'Horsepower', symbol: 'hp', toBase: v => v * 745.7, fromBase: v => v / 745.7 },
        },
    },
    pressure: {
        name: 'Pressure',
        icon: '💨',
        baseUnit: 'pascal',
        units: {
            pascal: { name: 'Pascal', symbol: 'Pa', toBase: v => v, fromBase: v => v },
            kilopascal: { name: 'Kilopascal', symbol: 'kPa', toBase: v => v * 1000, fromBase: v => v / 1000 },
            bar: { name: 'Bar', symbol: 'bar', toBase: v => v * 100000, fromBase: v => v / 100000 },
            psi: { name: 'PSI', symbol: 'psi', toBase: v => v * 6894.76, fromBase: v => v / 6894.76 },
            atm: { name: 'Atmosphere', symbol: 'atm', toBase: v => v * 101325, fromBase: v => v / 101325 },
        },
    },
    energy: {
        name: 'Energy',
        icon: '🔥',
        baseUnit: 'joule',
        units: {
            joule: { name: 'Joule', symbol: 'J', toBase: v => v, fromBase: v => v },
            kilojoule: { name: 'Kilojoule', symbol: 'kJ', toBase: v => v * 1000, fromBase: v => v / 1000 },
            calorie: { name: 'Calorie', symbol: 'cal', toBase: v => v * 4.184, fromBase: v => v / 4.184 },
            kilocalorie: { name: 'Kilocalorie', symbol: 'kcal', toBase: v => v * 4184, fromBase: v => v / 4184 },
            watthour: { name: 'Watt Hour', symbol: 'Wh', toBase: v => v * 3600, fromBase: v => v / 3600 },
        },
    },
    data: {
        name: 'Data Storage',
        icon: '💾',
        baseUnit: 'byte',
        units: {
            byte: { name: 'Byte', symbol: 'B', toBase: v => v, fromBase: v => v },
            kilobyte: { name: 'Kilobyte', symbol: 'KB', toBase: v => v * 1024, fromBase: v => v / 1024 },
            megabyte: { name: 'Megabyte', symbol: 'MB', toBase: v => v * 1024 ** 2, fromBase: v => v / (1024 ** 2) },
            gigabyte: { name: 'Gigabyte', symbol: 'GB', toBase: v => v * 1024 ** 3, fromBase: v => v / (1024 ** 3) },
            terabyte: { name: 'Terabyte', symbol: 'TB', toBase: v => v * 1024 ** 4, fromBase: v => v / (1024 ** 4) },
        },
    },
    angle: {
        name: 'Angle',
        icon: '📐',
        baseUnit: 'degree',
        units: {
            degree: { name: 'Degree', symbol: '°', toBase: v => v, fromBase: v => v },
            radian: { name: 'Radian', symbol: 'rad', toBase: v => v * (180 / Math.PI), fromBase: v => v * (Math.PI / 180) },
            gradian: { name: 'Gradian', symbol: 'grad', toBase: v => v * 0.9, fromBase: v => v / 0.9 },
        },
    },
    fuel_consumption: {
        name: 'Fuel Consumption',
        icon: '⛽',
        baseUnit: 'l_per_100km',
        units: {
            l_per_100km: { name: 'Liters/100km', symbol: 'L/100km', toBase: v => v, fromBase: v => v },
            mpg_us: { name: 'Miles/gallon (US)', symbol: 'mpg (US)', toBase: v => 235.215 / v, fromBase: v => 235.215 / v },
            mpg_uk: { name: 'Miles/gallon (UK)', symbol: 'mpg (UK)', toBase: v => 282.481 / v, fromBase: v => 282.481 / v },
        },
    },
};

// --- Main Application Class ---
class UnitConverterApp {
    private rootElement: HTMLElement;
    private currentCategory: string | null = null;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;
    }

    public init() {
        this.applyStyles();
        this.renderHomePage();
    }

    private applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --bg-color: #f0f2f5;
                --card-bg-color: #ffffff;
                --text-color: #1c1e21;
                --primary-color: #007bff;
                --primary-hover-color: #0056b3;
                --border-color: #dce1e6;
                --shadow-color: rgba(0, 0, 0, 0.1);
                --header-bg: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
            }
            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: var(--bg-color);
                color: var(--text-color);
                display: flex;
                justify-content: center;
                min-height: 100vh;
            }
            #root {
                width: 100%;
                max-width: 900px;
                padding: 1rem;
                box-sizing: border-box;
            }
            .app-container {
                width: 100%;
            }
            .app-header {
                background: var(--header-bg);
                color: white;
                padding: 2rem 1.5rem;
                border-radius: 12px;
                text-align: center;
                margin-bottom: 1.5rem;
                box-shadow: 0 4px 15px var(--shadow-color);
            }
            .app-header h1 {
                margin: 0;
                font-size: 2.5rem;
                font-weight: 700;
            }
            .app-header p {
                margin: 0.5rem 0 0;
                font-size: 1.1rem;
                opacity: 0.9;
            }
            .ad-placeholder {
                background-color: var(--card-bg-color);
                border: 2px dashed var(--border-color);
                padding: 1rem;
                margin: 1.5rem 0;
                text-align: center;
                color: #888;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 90px;
                border-radius: 8px;
            }
            .category-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 1rem;
            }
            .category-card {
                background-color: var(--card-bg-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1.5rem;
                text-align: center;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                box-shadow: 0 2px 5px var(--shadow-color);
            }
            .category-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 15px var(--shadow-color);
            }
            .category-card .icon {
                font-size: 2.5rem;
                line-height: 1;
            }
            .category-card .name {
                margin-top: 0.75rem;
                font-weight: 600;
                font-size: 1rem;
            }
            .converter-page {
                background-color: var(--card-bg-color);
                padding: 2rem;
                border-radius: 12px;
                box-shadow: 0 4px 15px var(--shadow-color);
            }
            .converter-header {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
            }
            .back-button {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-color);
                margin-right: 1rem;
                padding: 0.5rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.2s ease;
            }
            .back-button:hover {
                background-color: var(--bg-color);
            }
            .converter-title {
                font-size: 2rem;
                font-weight: 700;
                margin: 0;
            }
            .converter-body {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .input-group {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .input-group label {
                margin-bottom: 0.5rem;
                font-weight: 500;
                font-size: 0.9rem;
                color: #555;
            }
            .input-field, .select-field {
                width: 100%;
                padding: 0.75rem;
                font-size: 1.1rem;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                box-sizing: border-box;
                transition: border-color 0.2s, box-shadow 0.2s;
            }
            .input-field:focus, .select-field:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
            }
            .swap-button {
                background-color: var(--primary-color);
                color: white;
                border: none;
                border-radius: 50%;
                width: 48px;
                height: 48px;
                font-size: 1.5rem;
                cursor: pointer;
                margin-top: 1.5rem;
                transition: background-color 0.2s, transform 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .swap-button:hover {
                background-color: var(--primary-hover-color);
                transform: rotate(180deg);
            }
            .result-display {
                margin-top: 1rem;
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--primary-color);
                min-height: 2rem;
            }
             @media (max-width: 600px) {
                .converter-body {
                    flex-direction: column;
                }
                .swap-button {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
                .app-header h1 {
                    font-size: 2rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    private renderHomePage() {
        this.rootElement.innerHTML = `
            <div class="app-container">
                <header class="app-header">
                    <h1>Unit Converter</h1>
                    <p>Your go-to tool for quick and accurate conversions.</p>
                </header>
                <div class="ad-placeholder" id="ad-placeholder-top">
                    <!-- 
                      STEP 2: Insert your Google AdSense code for the TOP ad unit here.
                      Google will provide you with a code snippet that looks something like this:
                      
                      <ins class="adsbygoogle"
                           style="display:block"
                           data-ad-client="ca-pub-YOUR_CLIENT_ID"
                           data-ad-slot="YOUR_AD_SLOT_ID"
                           data-ad-format="auto"
                           data-full-width-responsive="true"></ins>
                      <script>
                           (adsbygoogle = window.adsbygoogle || []).push({});
                      </script>
                      
                      Replace this comment block with that code snippet.
                    -->
                    Ad Placeholder (Top)
                </div>
                <main>
                    <div class="category-grid">
                        ${Object.entries(CONVERTER_DATA).map(([key, category]) => `
                            <div class="category-card" data-category="${key}" role="button" tabindex="0" aria-label="Open ${category.name} converter">
                                <div class="icon">${category.icon}</div>
                                <div class="name">${category.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </main>
                 <div class="ad-placeholder" id="ad-placeholder-bottom">
                    <!-- 
                      STEP 3: Insert your Google AdSense code for the BOTTOM ad unit here.
                      This will be another snippet, similar to the one for the top.
                    -->
                    Ad Placeholder (Bottom)
                </div>
            </div>
        `;

        this.rootElement.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const categoryId = (e.currentTarget as HTMLElement).dataset.category;
                if (categoryId) this.navigateToConverter(categoryId);
            });
             card.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    const categoryId = (e.currentTarget as HTMLElement).dataset.category;
                    if (categoryId) this.navigateToConverter(categoryId);
                }
            });
        });
    }
    
    private navigateToConverter(categoryId: string) {
        this.currentCategory = categoryId;
        this.renderConverterPage(categoryId);
    }
    
    private navigateHome = () => {
        this.currentCategory = null;
        this.renderHomePage();
    }

    private renderConverterPage(categoryId: string) {
        const category = CONVERTER_DATA[categoryId];
        if (!category) {
            this.navigateHome();
            return;
        }

        const unitKeys = Object.keys(category.units);
        const defaultFrom = unitKeys[0];
        const defaultTo = unitKeys[1] || unitKeys[0];

        this.rootElement.innerHTML = `
            <div class="converter-page">
                <header class="converter-header">
                    <button class="back-button" aria-label="Go back to home page">←</button>
                    <h2 class="converter-title">${category.icon} ${category.name}</h2>
                </header>
                <div class="converter-body">
                    <div class="input-group">
                        <label for="from-value">From</label>
                        <input type="number" id="from-value" class="input-field" placeholder="Enter value">
                        <select id="from-unit" class="select-field">
                            ${unitKeys.map(key => `<option value="${key}" ${key === defaultFrom ? 'selected' : ''}>${category.units[key].name} (${category.units[key].symbol})</option>`).join('')}
                        </select>
                    </div>
                    <button class="swap-button" aria-label="Swap units">↔</button>
                    <div class="input-group">
                        <label for="to-unit">To</label>
                        <div id="result-display" class="result-display">0</div>
                        <select id="to-unit" class="select-field">
                             ${unitKeys.map(key => `<option value="${key}" ${key === defaultTo ? 'selected' : ''}>${category.units[key].name} (${category.units[key].symbol})</option>`).join('')}
                        </select>
                    </div>
                </div>
                 <div class="ad-placeholder" id="ad-placeholder-bottom-converter">
                    <!-- 
                      STEP 4: You can also place an ad on the converter pages.
                      Insert another Google AdSense code snippet here if you wish.
                    -->
                    Ad Placeholder
                </div>
            </div>
        `;
        
        this.rootElement.querySelector('.back-button')?.addEventListener('click', this.navigateHome);

        const fromValueInput = this.rootElement.querySelector('#from-value') as HTMLInputElement;
        const fromUnitSelect = this.rootElement.querySelector('#from-unit') as HTMLSelectElement;
        const toUnitSelect = this.rootElement.querySelector('#to-unit') as HTMLSelectElement;
        const resultDisplay = this.rootElement.querySelector('#result-display') as HTMLElement;
        const swapButton = this.rootElement.querySelector('.swap-button') as HTMLButtonElement;

        const performConversion = () => {
            const fromValue = parseFloat(fromValueInput.value);
            if (isNaN(fromValue)) {
                resultDisplay.textContent = '0';
                return;
            }

            const fromUnitKey = fromUnitSelect.value;
            const toUnitKey = toUnitSelect.value;
            
            const fromUnit = category.units[fromUnitKey];
            const toUnit = category.units[toUnitKey];

            const valueInBase = fromUnit.toBase(fromValue);
            const resultValue = toUnit.fromBase(valueInBase);

            resultDisplay.textContent = parseFloat(resultValue.toFixed(6)).toString();
        };

        const swapUnits = () => {
            const fromUnit = fromUnitSelect.value;
            const toUnit = toUnitSelect.value;
            fromUnitSelect.value = toUnit;
            toUnitSelect.value = fromUnit;
            performConversion();
        };

        fromValueInput.addEventListener('input', performConversion);
        fromUnitSelect.addEventListener('change', performConversion);
        toUnitSelect.addEventListener('change', performConversion);
        swapButton.addEventListener('click', swapUnits);
    }
}

// --- App Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
        const app = new UnitConverterApp(root);
        app.init();
    } else {
        console.error('Root element not found');
    }
});
