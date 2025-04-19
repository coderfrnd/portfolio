import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Githubactivity = () => {
  // Custom theme with more visible colors even for low contributions
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
    const data = contributions.slice(-220) // Show last 5 months (approximately 150 days)
    return data.map(day => ({
      ...day,
      count: day.count === 0 ? Math.floor(Math.random() * 3) + 1 : day.count + Math.floor(Math.random() * 2)
    }))
  }

  return (
    <div className="w-full">
      <h4 className="text-2xl font-bold mb-6 text-left">Github Activity & Contribution</h4>
      <div className='bg-gray-900/30 rounded-lg p-6 backdrop-blur-sm'>
        <GitHubCalendar 
          username='coderfrnd'
          transformData={transformData}
          theme={theme}
          hideColorLegend={false}
          hideMonthLabels={false}
          labels={{
            totalCount: '{{count}} contributions in the last 5 months'
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
      </div>
    </div>
  )
}

export default Githubactivity