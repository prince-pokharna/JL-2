"use client"

import { useState, useEffect } from "react"
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  RefreshCw,
  Download,
  Settings,
  Eye,
  CheckCircle,
  XCircle,
  Calendar,
  BarChart3,
  Users,
  ShoppingCart,
  Crown,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useStockManagement } from "@/hooks/use-stock-management"
import { featuredProducts } from "@/lib/data"

export function StockManagementDashboard() {
  const {
    config,
    stockEntries,
    stockAlerts,
    isLoading,
    error,
    lastSync,
    totalProducts,
    totalAlerts,
    criticalAlerts,
    syncWithExternalSource,
    acknowledgeAlert,
    updateProductStock,
    getCurrentStock,
    getLowStockProducts,
    updateConfig,
  } = useStockManagement()

  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [newStock, setNewStock] = useState<string>("")
  const [stockReason, setStockReason] = useState<string>("")

  // Handle stock update
  const handleStockUpdate = async (productId: string) => {
    if (!newStock || isNaN(Number(newStock))) return

    try {
      await updateProductStock(
        productId,
        Number(newStock),
        'adjustment',
        stockReason || 'Manual stock update',
        'MANUAL-' + Date.now()
      )
      setNewStock("")
      setStockReason("")
      setSelectedProduct(null)
    } catch (err) {
      console.error('Failed to update stock:', err)
    }
  }

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200'
      case 'out-of-stock': return 'text-red-800 bg-red-100 border-red-300'
      case 'low': return 'text-orange-600 bg-orange-50 border-orange-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-premium-gradient p-4 sm:p-6">
      <div className="container-responsive">
        {/* Header */}
        <div className="flex-responsive justify-between items-start mb-8">
          <div>
            <div className="inline-flex items-center px-6 py-3 indian-card rounded-full mb-4">
              <Package className="w-5 h-5 text-saffron-500 mr-2" />
              <span className="text-charcoal-700 text-sm font-semibold tracking-wider uppercase">
                Inventory Management
              </span>
            </div>
            <h1 className="text-responsive-3xl font-display font-bold text-charcoal-900 mb-2">
              Stock Management Dashboard
            </h1>
            <p className="text-responsive-lg text-charcoal-600 max-w-2xl">
              Monitor inventory levels, track stock movements, and manage alerts in real-time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={syncWithExternalSource}
              disabled={isLoading}
              className="btn-accent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Sync Now
            </Button>
            <Button variant="outline" className="elegant-hover">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid-responsive mb-8">
          <Card className="indian-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal-600">Total Products</CardTitle>
              <Package className="w-4 h-4 text-saffron-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-charcoal-900">{totalProducts}</div>
              <p className="text-xs text-charcoal-500 mt-1">
                Across all categories
              </p>
            </CardContent>
          </Card>

          <Card className="indian-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal-600">Active Alerts</CardTitle>
              <AlertTriangle className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{totalAlerts}</div>
              <p className="text-xs text-charcoal-500 mt-1">
                {criticalAlerts} critical alerts
              </p>
            </CardContent>
          </Card>

          <Card className="indian-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal-600">Last Sync</CardTitle>
              <RefreshCw className="w-4 h-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">
                {lastSync ? 'Active' : 'Pending'}
              </div>
              <p className="text-xs text-charcoal-500 mt-1">
                {lastSync ? lastSync.toLocaleTimeString() : 'Not synced yet'}
              </p>
            </CardContent>
          </Card>

          <Card className="indian-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal-600">Sync Status</CardTitle>
              <Settings className="w-4 h-4 text-royal-500" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${config.enabled ? 'text-emerald-600' : 'text-gray-500'}`}>
                {config.enabled ? 'Enabled' : 'Disabled'}
              </div>
              <p className="text-xs text-charcoal-500 mt-1">
                {config.provider.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Error Display */}
        {error && (
          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-red-800 font-medium">{error}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <Card className="indian-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="w-5 h-5 text-saffron-500 mr-2" />
                  Current Inventory Levels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredProducts.map((product) => {
                    const currentStock = getCurrentStock(product.id) || product.stockCount || 0
                    const isLowStock = currentStock <= (product.stockAlert || 10)
                    
                    return (
                      <div key={product.id} className="flex items-center justify-between p-4 bg-elegant-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-charcoal-900">{product.name}</h3>
                            <p className="text-sm text-charcoal-600">SKU: {product.sku}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className={`text-lg font-bold ${isLowStock ? 'text-red-600' : 'text-emerald-600'}`}>
                              {currentStock}
                            </div>
                            <div className="text-xs text-charcoal-500">in stock</div>
                          </div>

                          {isLowStock && (
                            <Badge variant="destructive" className="animate-pulse-soft">
                              Low Stock
                            </Badge>
                          )}

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedProduct(product.id)}
                            className="elegant-hover"
                          >
                            Update
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Stock Update Modal */}
                {selectedProduct && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-md indian-card">
                      <CardHeader>
                        <CardTitle>Update Stock Level</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="newStock">New Stock Quantity</Label>
                          <Input
                            id="newStock"
                            type="number"
                            value={newStock}
                            onChange={(e) => setNewStock(e.target.value)}
                            placeholder="Enter new stock quantity"
                            className="focus-ring"
                          />
                        </div>

                        <div>
                          <Label htmlFor="reason">Reason (Optional)</Label>
                          <Input
                            id="reason"
                            value={stockReason}
                            onChange={(e) => setStockReason(e.target.value)}
                            placeholder="e.g., New inventory received"
                            className="focus-ring"
                          />
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedProduct(null)
                              setNewStock("")
                              setStockReason("")
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => handleStockUpdate(selectedProduct)}
                            className="btn-accent"
                          >
                            Update Stock
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="indian-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  Stock Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockAlerts.length === 0 ? (
                    <div className="text-center py-8 text-charcoal-500">
                      <CheckCircle className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
                      <p>No active stock alerts</p>
                    </div>
                  ) : (
                    stockAlerts.map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{alert.productName}</h3>
                            <p className="text-sm opacity-75">
                              Current stock: {alert.currentStock} (Alert level: {alert.alertLevel})
                            </p>
                            <div className="flex items-center mt-2 text-xs opacity-75">
                              <Calendar className="w-3 h-3 mr-1" />
                              {alert.created.toLocaleDateString()} {alert.created.toLocaleTimeString()}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={alert.severity === 'critical' ? 'border-red-500 text-red-700' : ''}>
                              {alert.severity.toUpperCase()}
                            </Badge>
                            {!alert.acknowledged && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => acknowledgeAlert(alert.id)}
                                className="elegant-hover"
                              >
                                Acknowledge
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card className="indian-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-royal-500 mr-2" />
                  Stock Movement History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockEntries.length === 0 ? (
                    <div className="text-center py-8 text-charcoal-500">
                      <Package className="w-12 h-12 mx-auto mb-4" />
                      <p>No stock movements recorded</p>
                    </div>
                  ) : (
                    stockEntries.slice(0, 10).map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between p-4 bg-elegant-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            entry.type === 'purchase' ? 'bg-emerald-100 text-emerald-600' :
                            entry.type === 'sale' ? 'bg-red-100 text-red-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {entry.type === 'purchase' ? <TrendingUp className="w-4 h-4" /> :
                             entry.type === 'sale' ? <TrendingDown className="w-4 h-4" /> :
                             <Package className="w-4 h-4" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-charcoal-900 capitalize">
                              {entry.type} - Product {entry.productId}
                            </h3>
                            <p className="text-sm text-charcoal-600">
                              {entry.reason || 'No reason provided'}
                            </p>
                            <p className="text-xs text-charcoal-500">
                              {entry.timestamp.toLocaleDateString()} {entry.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`text-lg font-bold ${entry.quantity > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                            {entry.quantity > 0 ? '+' : ''}{entry.quantity}
                          </div>
                          <div className="text-xs text-charcoal-500">
                            Stock: {entry.previousStock} → {entry.newStock}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="indian-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 text-royal-500 mr-2" />
                  Stock Management Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">Enable Stock Management</Label>
                    <p className="text-sm text-charcoal-600 mt-1">
                      Automatically track and sync inventory levels
                    </p>
                  </div>
                  <Switch
                    checked={config.enabled}
                    onCheckedChange={(checked) => updateConfig({ enabled: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">Email Notifications</Label>
                    <p className="text-sm text-charcoal-600 mt-1">
                      Send email alerts for low stock items
                    </p>
                  </div>
                  <Switch
                    checked={config.alertSettings.emailNotifications}
                    onCheckedChange={(checked) => 
                      updateConfig({
                        alertSettings: { ...config.alertSettings, emailNotifications: checked }
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">Auto Stock Updates</Label>
                    <p className="text-sm text-charcoal-600 mt-1">
                      Automatically sync changes with external systems
                    </p>
                  </div>
                  <Switch
                    checked={config.autoStockUpdate}
                    onCheckedChange={(checked) => updateConfig({ autoStockUpdate: checked })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="syncInterval" className="text-base font-semibold">
                    Sync Interval (minutes)
                  </Label>
                  <Input
                    id="syncInterval"
                    type="number"
                    value={config.syncInterval}
                    onChange={(e) => updateConfig({ syncInterval: Number(e.target.value) })}
                    className="focus-ring"
                  />
                  <p className="text-sm text-charcoal-600">
                    How often to sync with external systems
                  </p>
                </div>

                <div className="pt-4 border-t border-elegant-200">
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Integration Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Provider:</span>
                      <Badge variant="outline">{config.provider}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Status:</span>
                      <Badge variant={config.enabled ? "default" : "secondary"}>
                        {config.enabled ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Last Sync:</span>
                      <span className="text-sm text-charcoal-600">
                        {lastSync ? lastSync.toLocaleString() : "Never"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 