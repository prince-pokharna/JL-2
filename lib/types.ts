export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images?: string[]
  category: string
  description: string
  colors?: string[]
  sizes?: string[]
  material?: string
  care?: string[]
  features?: string[]
  rating?: number
  reviews?: number
  isNew?: boolean
  isBestseller?: boolean
  inStock?: boolean
  stockCount?: number
  // Enhanced stock management fields
  sku?: string
  vendor?: string
  cost?: number
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  stockAlert?: number // Minimum stock level for alerts
  stockHistory?: StockEntry[]
  lastRestocked?: Date
  restockScheduled?: Date
  tags?: string[]
  condition?: 'new' | 'refurbished' | 'used'
  warranty?: string
  returnPolicy?: string
}

export interface StockEntry {
  id: string
  productId: string
  type: 'purchase' | 'sale' | 'return' | 'adjustment' | 'damage'
  quantity: number
  previousStock: number
  newStock: number
  reason?: string
  reference?: string // Order ID, Purchase Order, etc.
  timestamp: Date
  userId?: string
  notes?: string
}

export interface StockAlert {
  id: string
  productId: string
  productName: string
  currentStock: number
  alertLevel: number
  severity: 'low' | 'critical' | 'out-of-stock'
  created: Date
  acknowledged: boolean
  acknowledgedBy?: string
  acknowledgedAt?: Date
}

export interface InventoryReport {
  id: string
  title: string
  type: 'stock-levels' | 'low-stock' | 'sales-summary' | 'restock-needed' | 'category-analysis'
  dateRange: {
    from: Date
    to: Date
  }
  generated: Date
  data: any // Flexible data structure for different report types
  filters?: {
    categories?: string[]
    vendors?: string[]
    stockRange?: [number, number]
  }
}

export interface StockManagementConfig {
  enabled: boolean
  provider: 'google-sheets' | 'notion' | 'json-file' | 'api'
  config: {
    googleSheets?: {
      spreadsheetId: string
      worksheetName: string
      credentials: any
    }
    notion?: {
      databaseId: string
      token: string
    }
    jsonFile?: {
      filePath: string
      autoBackup: boolean
    }
    api?: {
      endpoint: string
      apiKey: string
    }
  }
  syncInterval: number // minutes
  alertSettings: {
    enabled: boolean
    emailNotifications: boolean
    webhookUrl?: string
    recipients: string[]
  }
  autoStockUpdate: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
  featured?: boolean
  // Enhanced category management
  parentId?: string
  slug: string
  metaTitle?: string
  metaDescription?: string
  displayOrder: number
  isActive: boolean
  commission?: number // For vendor management
}

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
  addedAt: Date
  // Stock validation
  availableStock?: number
  stockValidated?: boolean
  stockValidatedAt?: Date
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  address?: Address
  orders?: Order[]
  // Enhanced user management
  role: 'customer' | 'admin' | 'staff' | 'vendor'
  isActive: boolean
  preferences?: {
    newsletter: boolean
    smsUpdates: boolean
    categories: string[]
    priceRange: [number, number]
  }
  createdAt: Date
  lastLogin?: Date
  loyaltyPoints?: number
}

export interface Address {
  street: string
  city: string
  state: string
  pincode: string
  country: string
  isDefault?: boolean
  type?: 'home' | 'office' | 'other'
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "returned"
  createdAt: Date
  deliveryAddress: Address
  paymentMethod: string
  trackingNumber?: string
  // Enhanced order management
  subtotal: number
  taxAmount: number
  shippingAmount: number
  discountAmount?: number
  couponCode?: string
  estimatedDelivery?: Date
  actualDelivery?: Date
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  refundAmount?: number
  refundReason?: string
  notes?: string
  stockReserved: boolean // For inventory management
  stockReservedUntil?: Date
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
  verified?: boolean
  // Enhanced review system
  images?: string[]
  helpful: number
  unhelpful: number
  response?: {
    text: string
    by: string
    at: Date
  }
  status: 'pending' | 'approved' | 'rejected'
  moderatedBy?: string
  moderatedAt?: Date
}

export interface FilterOptions {
  categories: string[]
  priceRange: [number, number]
  colors: string[]
  sizes: string[]
  materials: string[]
  sortBy: "price-low" | "price-high" | "newest" | "rating" | "popularity" | "stock"
  // Enhanced filtering
  inStockOnly: boolean
  onSaleOnly: boolean
  freeShipping: boolean
  rating: number
  vendors: string[]
}

export interface Vendor {
  id: string
  name: string
  email: string
  phone: string
  address: Address
  status: 'active' | 'inactive' | 'suspended'
  commission: number
  products: string[] // Product IDs
  totalSales: number
  rating: number
  joinedAt: Date
  lastActive: Date
  paymentDetails: {
    bankAccount?: string
    panNumber?: string
    gstNumber?: string
  }
}

export interface Notification {
  id: string
  type: 'stock-alert' | 'order-update' | 'system' | 'promotion'
  title: string
  message: string
  data?: any
  recipients: string[]
  channels: ('email' | 'sms' | 'push' | 'webhook')[]
  status: 'pending' | 'sent' | 'failed'
  createdAt: Date
  sentAt?: Date
  priority: 'low' | 'medium' | 'high' | 'urgent'
}
