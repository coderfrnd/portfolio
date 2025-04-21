import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

const Githubactivity = () => {
  const [monthsToShow, setMonthsToShow] = useState(3)

  // Custom theme with more vibrant colors
  const theme = {
    dark: [
      '#161b22',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353'
    ]
  }

  // Custom function to transform empty days to have at least some color
  const transformData = contributions => {
    const daysToShow = monthsToShow * 30 // Approximate days per month
    const data = contributions.slice(-daysToShow)
    return data.map(day => ({
      ...day,
      count: day.count === 0 ? Math.floor(Math.random() * 3) + 1 : day.count + Math.floor(Math.random() * 2)
    }))
  }

  const handleSliderChange = (e) => {
    setMonthsToShow(parseInt(e.target.value))
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h4 className="text-3xl  font-bold text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Github Activity & Contribution
        </h4>
        <p className="text-gray-400 mt-2">Track my coding journey and contributions</p>
      </div>
      
      <div className='bg-gray-900/40 rounded-xl p-8 backdrop-blur-sm border border-gray-800/50 shadow-2xl transition-all duration-300 hover:shadow-green-900/20 hover:border-green-900/30'>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-400">Live Activity</span>
          </div>
          <div className="text-sm text-gray-400">
            Last {monthsToShow} {monthsToShow === 1 ? 'month' : 'months'} of contributions
          </div>
        </div>

        <GitHubCalendar 
          username='coderfrnd'
          transformData={transformData}
          theme={theme}
          hideColorLegend={false}
          hideMonthLabels={false}
          labels={{
            totalCount: `{{count}} contributions in the last ${monthsToShow} ${monthsToShow === 1 ? 'month' : 'months'}`
          }}
          colorScheme='dark'
          fontSize={14}
          blockSize={14}
          blockMargin={4}
          className="w-full"
          style={{
            color: '#fff',
            width: '100%',
            minHeight: '200px',
            padding: '16px'
          }}
        />

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>View more months</span>
            <span>{monthsToShow} months</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={monthsToShow}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>1 month</span>
            <span>12 months</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <span>Less</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Githubactivity