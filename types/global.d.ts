type PropertyName =
  | ""
  | "Name"
  | "Position"
  | "PositionAbs"
  | "Rotation"
  | "Scale"
  | "Visible"
  | "Animation"
  | "Looping"
  | "FramesPerSecond"
  | "AnimationBlending"
  | "BlendTimeMs"
  | "Target"
  | "UpVector"
  | "AspectRatio"
  | "FieldOfView_Degrees"
  | "Pos X (percent)"
  | "Pos Y (percent)"
  | "Width (percent)"
  | "Height (percent)"
  | "Pos X (pixels)"
  | "Pos Y (pixels)"
  | "Width (pixels)"
  | "Height (pixels)"
  | "Alpha"
  | "Image"
  | "Background Color"
  | "Draw Text"
  | "TextColor"
  | "Text"
  | "Radius"
  | "Color"
  | "Direction"
  | "FogColor"
  | "Realtime Shadows"
  | "AmbientLight"
  | "BackgroundColor"
  | "Bloom"
  | "Bloom_BlurIterations"
  | "Bloom_Treshold"
  | "Black and White"
  | "Invert"
  | "Blur"
  | "Blur_Iterations"
  | "Colorize"
  | "Colorize_Color"
  | "Vignette"
  | "Vignette_Intensity"
  | "Vignette_RadiusA"
  | "Vignette_RadiusB"
  | "Type";

declare function print(message: string): void;

interface SceneNode {}

/**
 * Creates a new scene node based on an existing scene node.
 * @param {any} node - An existing scene node.
 * @returns {any} - The new scene node.
 */
declare function ccbCloneSceneNode(node: SceneNode): SceneNode;

/**
 * Returns the currently active camera of the scene.
 * @returns {any} - The currently active camera.
 */
declare function ccbGetActiveCamera(): SceneNode;

/**
 * Sets the currently active camera to the scene.
 * @param {any} node - A camera scene node.
 */
declare function ccbSetActiveCamera(node: SceneNode): void;

/**
 * Returns the child scene node of a parent scene node.
 * @param {any} parentSceneNode - The parent scene node.
 * @param {number} childIndex - The index of the child node.
 * @returns {any} - The child scene node.
 */
declare function ccbGetChildSceneNode(parentSceneNode: SceneNode, childIndex: number): SceneNode;

/**
 * Returns the root scene node.
 * @returns {any} - The root scene node.
 */
declare function ccbGetRootSceneNode(): SceneNode;

/**
 * Returns the amount of children of a scene node.
 * @param {any} sceneNode - A scene node.
 * @returns {number} - The number of children of the scene node.
 */
declare function ccbGetSceneNodeChildCount(sceneNode: SceneNode): number;

/**
 * Searches the whole scene graph for a scene node with the specified name.
 * @param {string} name - The name of the scene node to search for.
 * @returns {any|null} - The found scene node or null if not found.
 */
declare function ccbGetSceneNodeFromName(name: string): SceneNode | null;

/**
 * Returns the amount of materials of the scene node.
 * @param {any} sceneNode - A scene node.
 * @returns {number} - The number of materials in the scene node.
 */
declare function ccbGetSceneNodeMaterialCount(sceneNode: SceneNode): number;

/**
 * Returns the property of the material of a scene node.
 * @param {any} sceneNode - A scene node.
 * @param {number} materialIndex - The index of the material.
 * @param {string} propertyName - The property name in the material.
 * @returns {any} - The value of the specified material property.
 */
declare function ccbGetSceneNodeMaterialProperty(
  sceneNode: SceneNode,
  materialIndex: number,
  propertyName: string
): any;

/**
 * Loads a texture into the texture cache.
 * @param {string} filename - The name of the texture file to load.
 * @returns {any} - The loaded texture object.
 */
declare function ccbLoadTexture(filename: string): any;

/**
 * Removes the scene node from the scene, deleting it.
 * @param {any} sceneNode - The scene node to remove.
 */
declare function ccbRemoveSceneNode(sceneNode: SceneNode): void;

/**
 * Sets the parent scene node of a scene node.
 * @param {any} sceneNode - The scene node.
 * @param {any} newParentNode - The new parent scene node.
 */
declare function ccbSetSceneNodeParent(sceneNode: SceneNode, newParentNode: SceneNode): void;

/**
 * Sets the property of the material of a scene node.
 * @param {any} sceneNode - A scene node.
 * @param {number} materialIndex - The index of the material.
 * @param {string} propertyName - The property name in the material.
 * @param {any} value - The new value of the material property.
 */
declare function ccbSetSceneNodeMaterialProperty(
  sceneNode: SceneNode,
  materialIndex: number,
  propertyName: string,
  value: any
): void;

/**
 * Gets the property value of a scene node.
 * @param {any} sceneNode - The scene node.
 * @param {string} propertyName - The name of the property.
 * @returns {any} - The value of the specified property.
 */
declare function ccbGetSceneNodeProperty(sceneNode: SceneNode, propertyName: PropertyName): any;

/**
 * Sets the property value of a scene node.
 * @param {any} sceneNode - The scene node.
 * @param {string} propertyName - The name of the property.
 * @param {any} value - The new value of the property.
 */
declare function ccbSetSceneNodeProperty(sceneNode: SceneNode, propertyName: PropertyName, value: any): void;

/**
 * Sets the property value of a scene node using x, y, z parameters.
 * @param {any} sceneNode - The scene node.
 * @param {string} propertyName - The name of the property.
 * @param {number} x - The x-coordinate value.
 * @param {number} y - The y-coordinate value.
 * @param {number} z - The z-coordinate value.
 */
declare function ccbSetSceneNodeProperty(
  sceneNode: SceneNode,
  propertyName: string,
  x: number,
  y: number,
  z: number
): void;

/**
 * Sets the property value of a scene node using RGB color values.
 * @param {any} sceneNode - The scene node.
 * @param {string} propertyName - The name of the property.
 * @param {number} r - The red color value.
 * @param {number} g - The green color value.
 * @param {number} b - The blue color value.
 */
declare function ccbSetSceneNodeProperty(
  sceneNode: SceneNode,
  propertyName: string,
  r: number,
  g: number,
  b: number
): void;

/**
 * Sets a new position of a scene node, even if the scene node has a 'collide with walls' behavior attached to it.
 * @param {any} sceneNode - The scene node.
 * @param {number} x - The x-coordinate value.
 * @param {number} y - The y-coordinate value.
 * @param {number} z - The z-coordinate value.
 */
declare function ccbSetSceneNodePositionWithoutCollision(sceneNode: SceneNode, x: number, y: number, z: number): void;

/**
 * Registers a function for receiving a key down event.
 * @param {string} funcstr - The name of the function to register.
 */
declare function ccbRegisterKeyDownEvent(funcstr: string): void;

/**
 * Registers a function for receiving a key up event.
 * @param {string} funcstr - The name of the function to register.
 */
declare function ccbRegisterKeyUpEvent(funcstr: string): void;

/**
 * Registers a function for receiving a mouse down event.
 * @param {string} funcstr - The name of the function to register.
 */
declare function ccbRegisterMouseDownEvent(funcstr: string): void;

/**
 * Registers a function for receiving a mouse up event.
 * @param {string} funcstr - The name of the function to register.
 */
declare function ccbRegisterMouseUpEvent(funcstr: string): void;

/**
 * Registers a function for receiving an 'on frame' event.
 * @param {Function} func - The function to register.
 */
declare function ccbRegisterOnFrameEvent(func: () => void): void;

/**
 * Unregisters a function from receiving an 'on frame' event.
 * @param {Function} func - The function to unregister.
 */
declare function ccbUnregisterOnFrameEvent(func: () => void): void;

/**
 * Draws a colored rectangle. This function can only be used inside a frame event function.
 * @param {number} color - The color value (0xaarrggbb).
 * @param {number} x1 - The x-coordinate of the first corner.
 * @param {number} y1 - The y-coordinate of the first corner.
 * @param {number} x2 - The x-coordinate of the second corner.
 * @param {number} y2 - The y-coordinate of the second corner.
 */
declare function ccbDrawColoredRectangle(color: number, x1: number, y1: number, x2: number, y2: number): void;

/**
 * Draws a textured rectangle. This function can only be used inside a frame event function.
 * @param {string} file - The file name of the texture.
 * @param {number} x1 - The x-coordinate of the first corner.
 * @param {number} y1 - The y-coordinate of the first corner.
 * @param {number} x2 - The x-coordinate of the second corner.
 * @param {number} y2 - The y-coordinate of the second corner.
 */
declare function ccbDrawTextureRectangle(file: string, x1: number, y1: number, x2: number, y2: number): void;

/**
 * Draws a textured rectangle with alpha channel. This function can only be used inside a frame event function.
 * @param {string} file - The file name of the texture.
 * @param {number} x1 - The x-coordinate of the first corner.
 * @param {number} y1 - The y-coordinate of the first corner.
 * @param {number} x2 - The x-coordinate of the second corner.
 * @param {number} y2 - The y-coordinate of the second corner.
 */
declare function ccbDrawTextureRectangleWithAlpha(file: string, x1: number, y1: number, x2: number, y2: number): void;

/**
 * Returns the 3D position of a 2D position on the screen.
 * @param {number} x - The x-coordinate of the 2D position.
 * @param {number} y - The y-coordinate of the 2D position.
 * @returns {any} - The 3D position.
 */
declare function ccbGet3DPosFrom2DPos(x: number, y: number): any;

/**
 * Returns the 2D position of a 3D position.
 * @param {number} x - The x-coordinate of the 3D position.
 * @param {number} y - The y-coordinate of the 3D position.
 * @param {number} z - The z-coordinate of the 3D position.
 * @returns {any} - The 2D position.
 */
declare function ccbGet2DPosFrom3DPos(x: number, y: number, z: number): any;

/**
 * Returns the collision point with a line and the world. Returns null if there is no collision.
 * @param {number} startX - The x-coordinate of the start point.
 * @param {number} startY - The y-coordinate of the start point.
 * @param {number} startZ - The z-coordinate of the start point.
 * @param {number} endX - The x-coordinate of the end point.
 * @param {number} endY - The y-coordinate of the end point.
 * @param {number} endZ - The z-coordinate of the end point.
 * @returns {any | null} - The collision point or null if no collision.
 */
declare function ccbGetCollisionPointOfWorldWithLine(
  startX: number,
  startY: number,
  startZ: number,
  endX: number,
  endY: number,
  endZ: number
): any | null;

/**
 * Returns if the bounding box of the given scene node collides with the line between two given points.
 * @param {any} node - The scene node.
 * @param {number} startX - The x-coordinate of the start point.
 * @param {number} startY - The y-coordinate of the start point.
 * @param {number} startZ - The z-coordinate of the start point.
 * @param {number} endX - The x-coordinate of the end point.
 * @param {number} endY - The y-coordinate of the end point.
 * @param {number} endZ - The z-coordinate of the end point.
 * @returns {boolean} - True if there is a collision, false otherwise.
 */
declare function ccbDoesLineCollideWithBoundingBoxOfSceneNode(
  node: SceneNode,
  startX: number,
  startY: number,
  startZ: number,
  endX: number,
  endY: number,
  endZ: number
): boolean;

/**
 * Ends the application. On Flash and WebGL, this closes the window (if it was opened before as popup by a script).
 */
declare function ccbEndProgram(): void;

/**
 * Returns the current X position of the mouse cursor in pixels.
 * @returns {number} - The X position of the mouse cursor.
 */
declare function ccbGetMousePosX(): number;

/**
 * Sets new position of the mouse on the screen.
 * Note: This function is only available in the Windows .exe and macOS .app target.
 */
declare function ccbSetMousePos(): void;

/**
 * Returns the current Y position of the mouse cursor in pixels.
 * @returns {number} - The Y position of the mouse cursor.
 */
declare function ccbGetMousePosY(): number;

/**
 * Returns the current width of the screen in pixels.
 * @returns {number} - The width of the screen.
 */
declare function ccbGetScreenWidth(): number;

/**
 * Returns the current height of the screen in pixels.
 * @returns {number} - The height of the screen.
 */
declare function ccbGetScreenHeight(): number;

/**
 * By default, the application on Windows and Mac OS X will close when the user presses escape in debug mode.
 * Call ccbSetCloseOnEscapePressed(false) to disable this feature.
 * On other targets, this function has no effect.
 * @param {boolean} bClose - True to enable closing on escape, false to disable.
 */
declare function ccbSetCloseOnEscapePressed(bClose: boolean): void;

/**
 * Sets if the mouse cursor is visible or not.
 * Call ccbSetCursorVisible(false) to make it invisible, call ccbSetCursorVisible(true) to make visible again.
 * Note: This function may not do anything depending on the target it runs on.
 * @param {boolean} bVisible - True to make the cursor visible, false to make it invisible.
 */
declare function ccbSetCursorVisible(bVisible: boolean): void;

/**
 * Switches to the scene with the specified name.
 * Note: This function is not available in the editor.
 * The name is case sensitive.
 * @param {string} sceneName - The name of the scene to switch to.
 */
declare function ccbSwitchToScene(sceneName: string): void;

/**
 * Will play a sound or music file.
 * The following file formats are supported on Windows and Mac OS X: WAV, OGG, MOD, XM, IT, S3M.
 * For other targets, this depends on the browser and platform. But usually, MP3 and OGG should be fine.
 * @param {string} filename - The name of the sound file.
 */
declare function ccbPlaySound(filename: string): void;

/**
 * Will stop a sound or music, which has been started either by ccbPlaySound or the "Play Sound" action.
 * @param {string} filename - The name of the sound file.
 */
declare function ccbStopSound(filename: string): void;

/**
 * Will set a CopperCube variable to a certain value.
 * CopperCube variables can be set and changed using the Variable Actions in the editor.
 * @param {string} varname - The name of the CopperCube variable.
 * @param {any} value - The value to set.
 */
declare function ccbSetCopperCubeVariable(varname: string, value: any): void;

/**
 * Will get the value of a CopperCube variable.
 * CopperCube variables can be set and changed using the Variable Actions in the editor.
 * @param {string} varname - The name of the CopperCube variable.
 * @returns {any} - The value of the variable.
 */
declare function ccbGetCopperCubeVariable(varname: string): any;

/**
 * Reads a full (text) file into a string.
 * Note: This function may not do anything depending on the target it runs on.
 * @param {string} filename - The name of the file to read.
 * @returns {string} - The content of the file as a string.
 */
declare function ccbReadFileContent(filename: string): string;

/**
 * Writes a full (text) file from a string.
 * Note: This function may not do anything depending on the target it runs on.
 * @param {string} filename - The name of the file to write.
 * @param {string} content - The content to write to the file.
 */
declare function ccbWriteFileContent(filename: string, content: string): void;

/**
 * Tests if a file exists.
 * Note: This function may not do anything depending on the target it runs on.
 * @param {string} filename - The name of the file to test.
 * @returns {boolean} - True if the file exists, false otherwise.
 */
declare function ccbFileExist(filename: string): boolean;

/**
 * Deletes a file from disk.
 * Note: This function may not do anything depending on the target it runs on.
 * @param {string} filename - The name of the file to delete.
 */
declare function ccbFileDelete(filename: string): void;

/**
 * Starts a CopperCube action.
 * @param {string} actionId - The id of the action to be run.
 * @param {any} currentNode - Optional reference to the 'current scene node'.
 */
declare function ccbInvokeAction(actionId: string, currentNode?: any): void;

/**
 * Returns the current scene node.
 * @returns {any} - The current scene node.
 */
declare function ccbGetCurrentNode(): any;

/**
 * Cleans up the current memory usage.
 */
declare function ccbCleanMemory(): void;

/**
 * Returns a string identifying the system the CopperCube app is running on.
 * @returns {string} - System identifier ("windows", "macosx", "android", "webgl", "flash").
 */
declare function ccbGetPlatform(): string;

/**
 * Switches the app to fullscreen on compatible platforms.
 * @param {boolean} enablePointerLock - Enable mouse pointer lock after switching to fullscreen in Flash or WebGL.
 * @param {HTMLElement} elementToSwitchToFullscreen - HTML element to switch to fullscreen (only for WebGL).
 * @param {boolean} switchBackToWindowed - Switch back to windowed mode on Windows .exe (optional).
 */
declare function ccbSwitchToFullscreen(
  enablePointerLock: boolean,
  elementToSwitchToFullscreen?: HTMLElement,
  switchBackToWindowed?: boolean
): void;

/**
 * Makes a GET network request via HTTP to any web server.
 * @param {string} url - The URL to request.
 * @param {(dataReceived: string) => void} callback - Callback function for received data or failure.
 * @returns {number} - Unique ID for identifying the request.
 */
declare function ccbDoHTTPRequest(url: string, callback: (dataReceived: string) => void): number;

/**
 * Cancels a running HTTP request.
 * @param {number} connectionIdToCancel - The unique ID of the request to cancel.
 */
declare function ccbCancelHTTPRequest(connectionIdToCancel: number): void;

/**
 * Creates a new material based on vertex and pixel shaders.
 * @param {string} vertexShader - Code of the vertex shader or an empty string.
 * @param {string} fragmentShader - Code of the fragment shader or an empty string.
 * @param {number} baseMaterialType - Base material type (usually 0 for solid material).
 * @param {(type: number, name: string, value1: number, value2: number, value3: number, value4: number) => void} shaderCallback - Callback for setting shader constants.
 * @returns {number} - Unique material ID or -1 if an error occurred.
 */
declare function ccbCreateMaterial(
  vertexShader: string,
  fragmentShader: string,
  baseMaterialType: number,
  shaderCallback: (type: number, name: string, value1: number, value2: number, value3: number, value4: number) => void
): number;

/**
 * Sets the linear velocity of an object simulated by the physics engine.
 * @param {any} sceneNode - Node where this is applied.
 * @param {number} x - X component of velocity.
 * @param {number} y - Y component of velocity.
 * @param {number} z - Z component of velocity.
 */
declare function ccbSetPhysicsVelocity(sceneNode: SceneNode, x: number, y: number, z: number): void;

/**
 * Updates the collision geometry of the physics simulation.
 */
declare function ccbUpdatePhysicsGeometry(): void;

/**
 * Sends a command to an object with the behavior 'Game Actor with Health'.
 * @param {any} sceneNode - Node where this is applied.
 * @param {string} command - Command string ("cancel", "moveto", "attack").
 * @param {any} param - Parameter for the command (depends on the command).
 */
declare function ccbAICommand(sceneNode: SceneNode, command: string, param: any): void;

/**
 * Sets a Steam achievement as achieved.
 * @param {string} achievementId - The id of the Steam achievement.
 */
declare function ccbSteamSetAchievement(achievementId: string): void;

/**
 * Resets all Steam achievements for the current user.
 */
declare function ccbSteamResetAchievements(): void;

/**
 * Saves a screenshot of the current screen content to an image file.
 * @param {string} filename - The file name for the screenshot.
 */
declare function ccbSaveScreenshot(filename: string): void;

/**
 * Saves a texture as a file.
 * @param {any} texture - The texture to save.
 * @param {string} filename - The file name for the saved texture.
 */
declare function ccbSaveTexture(texture: any, filename: string): void;

/**
 * Switches to a different CopperCube file.
 * @param {string} filename - The name of the CopperCube file to switch to.
 */
declare function ccbSwitchToCCBFile(filename: string): void;

/**
 * Prints a string into the output window of the editor or into the debug console window of the app.
 * @param {string} text - The text to print.
 */
declare function print(text: string): void;

/**
 * Shows a string in a modal message box (CopperCube editor only).
 * @param {string} text - The text to show.
 */
declare function alert(text: string): void;

/**
 * Shows a string in a modal message box and asks to press either OK or CANCEL (CopperCube editor only).
 * @param {string} text - The text to show.
 * @returns {boolean} - True if OK is pressed, false if CANCEL is pressed.
 */
declare function confirm(text: string): boolean;

/**
 * Shows an edit box in a modal message box and asks to press either OK or CANCEL (CopperCube editor only).
 * @param {string} text - The text to show.
 * @param {string} edittext - The initial text in the edit box.
 * @returns {string | null} - The text entered in the edit box, or null if CANCEL is pressed.
 */
declare function prompt(text: string, edittext: string): string | null;

/**
 * Executes the given command line. Can be used to run commands or launch programs.
 * @param {string} commandline - The command line to execute.
 * @param {boolean} [hideWindow] - Whether to hide the console window (optional).
 */
declare function system(commandline: string, hideWindow?: boolean): void;

/**
 * Returns the amount of mesh buffers in a scene node.
 * @param {any} node - The scene node.
 * @returns {number} - The number of mesh buffers in the scene node.
 */
declare function ccbGetSceneNodeMeshBufferCount(node: SceneNode): number;

/**
 * Erases a mesh buffer in a scene node.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer to erase.
 */
declare function ccbRemoveMeshBuffer(node: SceneNode, meshBufferIndex: number): void;

/**
 * Adds a new mesh buffer to a scene node.
 * @param {any} node - The scene node.
 */
declare function ccbAddMeshBuffer(node: SceneNode): void;

/**
 * Returns the amount of vertices of a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @returns {number} - The number of vertices in the mesh buffer.
 */
declare function ccbGetMeshBufferVertexCount(node: SceneNode, meshBufferIndex: number): number;

/**
 * Returns the amount of indices in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @returns {number} - The number of indices in the mesh buffer.
 */
declare function ccbGetMeshBufferIndexCount(node: SceneNode, meshBufferIndex: number): number;

/**
 * Adds a new index value to a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferNumber - The index of the mesh buffer.
 * @param {number} indexValue - The index value to add.
 */
declare function ccbAddMeshBufferIndex(node: SceneNode, meshBufferNumber: number, indexValue: number): void;

/**
 * Returns the value of an index in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferNumber - The index of the mesh buffer.
 * @param {number} indexNumber - The index number.
 * @returns {number} - The value of the specified index in the mesh buffer.
 */
declare function ccbGetMeshBufferIndexValue(node: SceneNode, meshBufferNumber: number, indexNumber: number): number;

/**
 * Changes the value of an index in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferNumber - The index of the mesh buffer.
 * @param {number} indexNumber - The index number.
 * @param {number} indexValue - The new value for the index.
 */
declare function ccbSetMeshBufferIndexValue(
  node: SceneNode,
  meshBufferNumber: number,
  indexNumber: number,
  indexValue: number
): void;

/**
 * Adds a new vertex to a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferNumber - The index of the mesh buffer.
 * @param {number[]} vertexPosition - The 3D position of the vertex.
 */
declare function ccbAddMeshBufferVertex(node: SceneNode, meshBufferNumber: number, vertexPosition: number[]): void;

/**
 * Returns the 3D position of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @returns {number[]} - The 3D position of the specified vertex in the mesh buffer.
 */
declare function ccbGetMeshBufferVertexPosition(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number
): number[];

/**
 * Sets the 3D position of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @param {number[]} vertex - The new 3D position for the vertex.
 */
declare function ccbSetMeshBufferVertexPosition(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number,
  vertex: number[]
): void;

/**
 * Gets the texture coordinate of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @returns {number[]} - The texture coordinate of the specified vertex in the mesh buffer.
 */
declare function ccbGetMeshBufferVertexTextureCoord(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number
): number[];

/**
 * Sets the texture coordinate of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @param {number[]} coord - The new texture coordinate for the vertex.
 */
declare function ccbSetMeshBufferVertexTextureCoord(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number,
  coord: number[]
): void;

/**
 * Returns the normal of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @returns {number[]} - The normal of the specified vertex in the mesh buffer.
 */
declare function ccbGetMeshBufferVertexNormal(node: SceneNode, meshBufferIndex: number, vertexIndex: number): number[];

/**
 * Sets the normal of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @param {number[]} coord - The new normal for the vertex.
 */
declare function ccbSetMeshBufferVertexNormal(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number,
  coord: number[]
): void;

/**
 * Returns the color of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @returns {number[]} - The color of the specified vertex in the mesh buffer.
 */
declare function ccbGetMeshBufferVertexColor(node: SceneNode, meshBufferIndex: number, vertexIndex: number): number[];

/**
 * Sets the color of a vertex in a mesh buffer.
 * @param {any} node - The scene node.
 * @param {number} meshBufferIndex - The index of the mesh buffer.
 * @param {number} vertexIndex - The index of the vertex.
 * @param {number[]} color - The new color for the vertex.
 */
declare function ccbSetMeshBufferVertexColor(
  node: SceneNode,
  meshBufferIndex: number,
  vertexIndex: number,
  color: number[]
): void;

/**
 * Calculates the new bounding box, necessary after changing the geometry.
 * @param {any} node - The scene node.
 */
declare function ccbUpdateSceneNodeBoundingBox(node: SceneNode): void;

/**
 * Creates a new scene node of the specified type at the given position with optional size.
 * @param {string} type - The type of the scene node ("cube", "sphere", "cylinder", "cone", "plane", "light", "camera", "billboard", "skybox", "hotspot", "3dsound", "overlay2d").
 * @param {number} [x] - X-coordinate of the position.
 * @param {number} [y] - Y-coordinate of the position.
 * @param {number} [z] - Z-coordinate of the position.
 * @param {number} [size] - Optional default size for the object.
 * @returns {any} - The new scene node.
 */
declare function editorAddSceneNode(type: string, x?: number, y?: number, z?: number, size?: number): any;

/**
 * Lets the cameras of all viewports focus on the given position.
 * @param {any} position - The position to focus on.
 */
declare function editorFocusPosition(position: any): void;

/**
 * Returns the currently selected scene node or 0 if nothing is selected.
 * @returns {any} - The currently selected scene node.
 */
declare function editorGetSelectedSceneNode(): any;

/**
 * Returns the currently selected texture from the texture manager window.
 * @returns {string} - The path of the currently selected texture.
 */
declare function editorGetSelectedTexture(): string;

/**
 * Shows a file selection dialog prompting the user to select a file.
 * @param {string} [message] - Message text displayed in the window caption area.
 * @param {string} [fileExtensions] - Possible file extension list, "*.*" by default.
 * @param {boolean} [isOpenDialog] - If true, presents itself as an open file dialog; otherwise, as a save file dialog. (Default is true).
 * @returns {string} - The selected filename or an empty string if the user canceled.
 */
declare function editorGetFileNameFromDialog(message?: string, fileExtensions?: string, isOpenDialog?: boolean): string;

/**
 * Updates all windows of the editor.
 */
declare function editorUpdateAllWindows(): void;

/**
 * Registers a new entry in the menu under 'Plugins'.
 * @param {string} functionName - The global function to execute when the menu command is selected.
 * @param {string} text - The text displayed in the menu.
 */
declare function editorRegisterMenuEntry(functionName: string, text: string): void;

/**
 * Sets a selected scene node. Set node to 0 to select nothing.
 * @param {any} node - The scene node to select.
 */
declare function editorSetSelectedSceneNode(node: SceneNode): void;

/**
 * Imports a static mesh file into the editor.
 * @param {string} filename - The file name of the mesh to import.
 * @returns {any} - The currently selected scene node or 0 if nothing is imported.
 */
declare function editorImportStatic3DMesh(filename: string): any;

/**
 * Imports an animated mesh file into the editor.
 * @param {string} filename - The file name of the mesh to import.
 * @returns {any} - The currently selected scene node or 0 if nothing is imported.
 */
declare function editorImportAnimated3DMesh(filename: string): any;

/**
 * Returns the number of bones (joints) of an animated scene node.
 * @param {any} animatedNode - The animated scene node.
 * @returns {number} - The number of bones (joints).
 */
declare function ccbGetAnimatedJointCount(animatedNode: SceneNode): number;

/**
 * Returns the name of the bone (joint) of an animated scene node.
 * @param {any} animatedNode - The animated scene node.
 * @param {number} jointIndex - The index of the bone (joint).
 * @returns {string} - The name of the bone (joint).
 */
declare function ccbGetAnimatedJointName(animatedNode: SceneNode, jointIndex: number): string;

/**
 * Returns the current animation frame playing in the scene by the animated scene node.
 * @param {any} animatedNode - The animated scene node.
 * @returns {number} - The current animation frame.
 */
declare function ccbGetCurrentAnimationFrame(animatedNode: SceneNode): number;

/**
 * Set the current animation to be played from a supplied animation frame number.
 * @param {any} animatedNode - The animated scene node.
 * @param {number} frameNumber - The animation frame number.
 */
declare function ccbSetCurrentAnimationFrame(animatedNode: SceneNode, frameNumber: number): void;

/**
 * Set animation of animated scene node from the animation of another animated scene node.
 * @param {any} node1 - The scene node to which the animation will be applied.
 * @param {any} node2 - The scene node from which the animation will be used.
 * @param {string} animationName - The name of the animation to be used.
 */
declare function ccbSetAnimationFromSceneNode(node1: any, node2: any, animationName: string): void;

/**
 * Returns the Width of a texture.
 * @param {string} texture - The path of the texture.
 * @returns {number} - The width of the texture.
 */
declare function ccbGetTextureWidth(texture: string): number;

/**
 * Returns the Height of a texture.
 * @param {string} texture - The path of the texture.
 * @returns {number} - The height of the texture.
 */
declare function ccbGetTextureHeight(texture: string): number;

/**
 * Pause and unpause all sound nodes.
 * @param {boolean} pause - True means pause, False means unpause.
 */
declare function ccbPauseAllSounds(pause: boolean): void;

/**
 * Sets the DopplerEffect parameters to a different value.
 * @param {number} DopplerFactor - The Doppler factor.
 * @param {number} DistanceFactor - The distance factor.
 */
declare function ccbSetDopplerEffectParameters(DopplerFactor: number, DistanceFactor: number): void;

/**
 * Captures the screen and applies it as a texture on a scene node.
 * @param {any} node - The scene node to apply the texture to.
 * @param {any} camera - The camera used for rendering.
 * @param {number} materialIndex - The material index.
 * @param {number} Xresolution - The X resolution of the captured screen.
 * @param {number} Yresolution - The Y resolution of the captured screen.
 */
declare function ccbRenderToTexture(
  node: SceneNode,
  camera: any,
  materialIndex: number,
  Xresolution: number,
  Yresolution: number
): void;

/**
 * Splits the screen into two with 2 cameras rendering at the same time.
 * @param {any} cam1 - The first camera.
 * @param {number} x1 - X-coordinate of the first camera's viewport.
 * @param {number} y1 - Y-coordinate of the first camera's viewport.
 * @param {number} x2 - X-coordinate of the second camera's viewport.
 * @param {number} y2 - Y-coordinate of the second camera's viewport.
 * @param {any} cam2 - The second camera.
 * @param {number} x3 - X-coordinate of the second camera's viewport.
 * @param {number} y3 - Y-coordinate of the second camera's viewport.
 * @param {number} x4 - X-coordinate of the first camera's viewport.
 * @param {number} y4 - Y-coordinate of the first camera's viewport.
 */
declare function ccbSplitScreen(
  cam1: any,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  cam2: any,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): void;

/**
 * Returns the Position of a bone (joint) of an animated scene node.
 * @param {any} animatedNode - The animated scene node.
 * @param {number} jointIndex - The index of the bone (joint).
 * @returns {any} - The position of the bone (joint).
 */
declare function ccbGetAnimatedJointPosition(animatedNode: SceneNode, jointIndex: number): any;

/**
 * Set the speed of the game timer to fast or slow.
 * @param {number} speedFloat - The speed of the game timer.
 */
declare function ccbSetGameTimerSpeed(speedFloat: number): void;

/**
 * Emulates a keyboard key event for the specified key with the keycode.
 * @param {number} keyCode - The keycode of the key.
 * @param {boolean} pressedDown - True for keydown, false for keyup.
 */
declare function ccbEmulateKey(keyCode: number, pressedDown: boolean): void;

/**
 * Class for holding 3 float coordinates - x, y, and z.
 * @class
 * @param {number} [x] - X-coordinate.
 * @param {number} [y] - Y-coordinate.
 * @param {number} [z] - Z-coordinate.
 */
declare class vector3d {
  /**
   * X-coordinate of the vector.
   * @type {number}
   */
  x: number;

  /**
   * Y-coordinate of the vector.
   * @type {number}
   */
  y: number;

  /**
   * Z-coordinate of the vector.
   * @type {number}
   */
  z: number;

  /**
   * Creates a new vector3d with optional coordinates.
   * @param {number} [x] - X-coordinate.
   * @param {number} [y] - Y-coordinate.
   * @param {number} [z] - Z-coordinate.
   */
  constructor(x?: number, y?: number, z?: number);

  /**
   * Adds another vector3d to this vector3d.
   * @param {vector3d} other - The vector3d to add.
   * @returns {vector3d} - The resulting vector3d.
   */
  add(other: vector3d): vector3d;

  /**
   * Subtracts another vector3d from this vector3d.
   * @param {vector3d} other - The vector3d to subtract.
   * @returns {vector3d} - The resulting vector3d.
   */
  subtract(other: vector3d): vector3d;

  /**
   * Calculates the length of the vector3d.
   * @returns {number} - The length of the vector3d.
   */
  getLength(): number;

  /**
   * Normalizes the vector3d (makes its length 1).
   */
  normalize(): void;

  /**
   * Converts the vector3d to a string representation.
   * @returns {string} - The string representation of the vector3d.
   */
  toString(): string;
}
