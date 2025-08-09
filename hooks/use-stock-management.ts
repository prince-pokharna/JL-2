"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product, StockEntry, StockAlert, StockManagementConfig } from "@/lib/types"

// Default configuration for Google Sheets integration
const defaultConfig: StockManagementConfig = {
  enabled: true,
  provider: 'google-sheets',
  config: {
    googleSheets: {
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID || '',
      worksheetName: 'Inventory',
      credentials: null
    }
  },
  syncInterval: 15, // minutes
  alertSettings: {
    enabled: true,
    emailNotifications: true,
    recipients: ['admin@jailaxmisarees.com'],
  },
  autoStockUpdate: true
}

export function useStockManagement() {
  const [config, setConfig] = useState<StockManagementConfig>(defaultConfig)
  const [stockEntries, setStockEntries] = useState<StockEntry[]>([])
  const [stockAlerts, setStockAlerts] = useState<StockAlert[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastSync, setLastSync] = useState<Date | null>(null)

  // Initialize stock management
  useEffect(() => {
    loadStockData()
    const interval = setInterval(syncWithExternalSource, config.syncInterval * 60 * 1000)
    return () => clearInterval(interval)
  }, [config.syncInterval, loadStockData, syncWithExternalSource])

  // Load stock data from localStorage/API
  const loadStockData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Load from localStorage for demo purposes
      const savedEntries = localStorage.getItem('stockEntries')
      const savedAlerts = localStorage.getItem('stockAlerts')

      if (savedEntries) {
        setStockEntries(JSON.parse(savedEntries))
      }

      if (savedAlerts) {
        setStockAlerts(JSON.parse(savedAlerts))
      }

      setLastSync(new Date())
    } catch (err) {
      setError('Failed to load stock data')
      console.error('Stock data loading error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sync with external source (Google Sheets, Notion, etc.)
  const syncWithExternalSource = useCallback(async () => {
    if (!config.enabled) return

    try {
      setIsLoading(true)
      setError(null)

      switch (config.provider) {
        case 'google-sheets':
          await syncWithGoogleSheets()
          break
        case 'notion':
          await syncWithNotion()
          break
        case 'json-file':
          await syncWithJSONFile()
          break
        default:
          console.warn('Unknown stock management provider:', config.provider)
      }

      setLastSync(new Date())
    } catch (err) {
      setError(`Sync failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
      console.error('Stock sync error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [config])

  // Google Sheets integration (simplified for demo)
  const syncWithGoogleSheets = async () => {
    // In a real implementation, this would use Google Sheets API
    console.log('Syncing with Google Sheets...')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, we'll just log the action
    console.log('Google Sheets sync completed')
  }

  // Notion integration (simplified for demo)
  const syncWithNotion = async () => {
    console.log('Syncing with Notion...')
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Notion sync completed')
  }

  // JSON file integration
  const syncWithJSONFile = async () => {
    console.log('Syncing with JSON file...')
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log('JSON file sync completed')
  }

  // Add stock entry
  const addStockEntry = useCallback((entry: Omit<StockEntry, 'id' | 'timestamp'>) => {
    const newEntry: StockEntry = {
      ...entry,
      id: `stock-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    }

    const updatedEntries = [...stockEntries, newEntry]
    setStockEntries(updatedEntries)
    
    // Save to localStorage
    localStorage.setItem('stockEntries', JSON.stringify(updatedEntries))

    // Check for low stock alerts
    checkStockAlerts(entry.productId, entry.newStock)

    // Trigger sync if auto-update is enabled
    if (config.autoStockUpdate) {
      syncWithExternalSource()
    }

    return newEntry
  }, [stockEntries, config.autoStockUpdate, syncWithExternalSource])

  // Update product stock
  const updateProductStock = useCallback((
    productId: string,
    newStock: number,
    type: StockEntry['type'] = 'adjustment',
    reason?: string,
    reference?: string
  ) => {
    // Get current stock (this would typically come from your product data)
    const currentStock = getCurrentStock(productId)
    const quantity = newStock - currentStock

    return addStockEntry({
      productId,
      type,
      quantity,
      previousStock: currentStock,
      newStock,
      reason,
      reference,
      notes: `Stock ${type}: ${reason || 'Manual adjustment'}`
    })
  }, [addStockEntry])

  // Get current stock for a product
  const getCurrentStock = useCallback((productId: string): number => {
    const productEntries = stockEntries
      .filter(entry => entry.productId === productId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return productEntries.length > 0 ? productEntries[0].newStock : 0
  }, [stockEntries])

  // Check for stock alerts
  const checkStockAlerts = useCallback((productId: string, currentStock: number) => {
    // This would typically get product details from your product data
    const alertLevel = 10 // Default alert level
    
    if (currentStock <= alertLevel) {
      const severity: StockAlert['severity'] = 
        currentStock === 0 ? 'out-of-stock' : 
        currentStock <= 5 ? 'critical' : 'low'

      const existingAlert = stockAlerts.find(alert => 
        alert.productId === productId && !alert.acknowledged
      )

      if (!existingAlert) {
        const newAlert: StockAlert = {
          id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          productId,
          productName: `Product ${productId}`, // Would get from product data
          currentStock,
          alertLevel,
          severity,
          created: new Date(),
          acknowledged: false,
        }

        const updatedAlerts = [...stockAlerts, newAlert]
        setStockAlerts(updatedAlerts)
        localStorage.setItem('stockAlerts', JSON.stringify(updatedAlerts))

        // Send notification if enabled
        if (config.alertSettings.enabled) {
          sendStockAlert(newAlert)
        }
      }
    }
  }, [stockAlerts, config.alertSettings])

  // Send stock alert notification
  const sendStockAlert = useCallback(async (alert: StockAlert) => {
    try {
      console.log('Sending stock alert:', alert)
      
      if (config.alertSettings.emailNotifications) {
        // In a real implementation, this would send an email
        console.log('Email notification sent to:', config.alertSettings.recipients)
      }

      if (config.alertSettings.webhookUrl) {
        // Send webhook notification
        await fetch(config.alertSettings.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(alert)
        })
      }
    } catch (err) {
      console.error('Failed to send stock alert:', err)
    }
  }, [config.alertSettings])

  // Acknowledge stock alert
  const acknowledgeAlert = useCallback((alertId: string, userId?: string) => {
    const updatedAlerts = stockAlerts.map(alert =>
      alert.id === alertId
        ? {
            ...alert,
            acknowledged: true,
            acknowledgedBy: userId || 'system',
            acknowledgedAt: new Date(),
          }
        : alert
    )

    setStockAlerts(updatedAlerts)
    localStorage.setItem('stockAlerts', JSON.stringify(updatedAlerts))
  }, [stockAlerts])

  // Get stock history for a product
  const getStockHistory = useCallback((productId: string) => {
    return stockEntries
      .filter(entry => entry.productId === productId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }, [stockEntries])

  // Get low stock products
  const getLowStockProducts = useCallback(() => {
    return stockAlerts
      .filter(alert => !alert.acknowledged)
      .sort((a, b) => {
        const severityOrder = { 'out-of-stock': 3, 'critical': 2, 'low': 1 }
        return severityOrder[b.severity] - severityOrder[a.severity]
      })
  }, [stockAlerts])

  // Generate stock report
  const generateStockReport = useCallback((
    type: 'stock-levels' | 'low-stock' | 'sales-summary' | 'restock-needed',
    dateRange?: { from: Date; to: Date }
  ) => {
    const filteredEntries = dateRange
      ? stockEntries.filter(entry => {
          const entryDate = new Date(entry.timestamp)
          return entryDate >= dateRange.from && entryDate <= dateRange.to
        })
      : stockEntries

    switch (type) {
      case 'stock-levels':
        // Generate current stock levels report
        break
      case 'low-stock':
        // Generate low stock report
        break
      case 'sales-summary':
        // Generate sales summary report
        break
      case 'restock-needed':
        // Generate restock needed report
        break
    }

    return filteredEntries
  }, [stockEntries])

  // Update configuration
  const updateConfig = useCallback((newConfig: Partial<StockManagementConfig>) => {
    const updatedConfig = { ...config, ...newConfig }
    setConfig(updatedConfig)
    localStorage.setItem('stockManagementConfig', JSON.stringify(updatedConfig))
  }, [config])

  return {
    // State
    config,
    stockEntries,
    stockAlerts,
    isLoading,
    error,
    lastSync,

    // Actions
    loadStockData,
    syncWithExternalSource,
    addStockEntry,
    updateProductStock,
    getCurrentStock,
    acknowledgeAlert,
    updateConfig,

    // Utilities
    getStockHistory,
    getLowStockProducts,
    generateStockReport,

    // Statistics
    totalProducts: new Set(stockEntries.map(entry => entry.productId)).size,
    totalAlerts: stockAlerts.filter(alert => !alert.acknowledged).length,
    criticalAlerts: stockAlerts.filter(alert => 
      !alert.acknowledged && (alert.severity === 'critical' || alert.severity === 'out-of-stock')
    ).length,
  }
} 