:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dxpy'
.. highlight: bash

dxpy
====

.. conda:recipe:: dxpy
   :replaces_section_title:
   :noindex:

   DNAnexus Platform API bindings for Python.\"

   :homepage: https://github.com/dnanexus/dx-toolkit
   :documentation: http://autodoc.dnanexus.com/bindings/python/current
   
   :license: Apache / Apache-2.0
   :recipe: /`dxpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy/meta.yaml>`_

   


.. conda:package:: dxpy

   |downloads_dxpy| |docker_dxpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.409.0-0</code>,  <code>0.408.2-0</code>,  <code>0.407.0-0</code>,  <code>0.400.1-0</code>,  <code>0.399.1-0</code>,  <code>0.399.0-0</code>,  <code>0.398.0-0</code>,  <code>0.397.0-0</code>,  <code>0.396.0-0</code>,  </span></summary>
      

      ``0.409.0-0``,  ``0.408.2-0``,  ``0.407.0-0``,  ``0.400.1-0``,  ``0.399.1-0``,  ``0.399.0-0``,  ``0.398.0-0``,  ``0.397.0-0``,  ``0.396.0-0``,  ``0.395.0-0``,  ``0.394.0-0``,  ``0.393.0-0``,  ``0.392.0-0``,  ``0.391.0-0``,  ``0.390.0-0``,  ``0.389.0-0``,  ``0.388.0-2``,  ``0.388.0-1``,  ``0.388.0-0``,  ``0.387.0-0``,  ``0.386.0-0``,  ``0.385.0-0``,  ``0.384.0-0``,  ``0.383.1-0``,  ``0.382.0-0``,  ``0.381.0-0``,  ``0.380.0-0``,  ``0.379.0-0``,  ``0.378.0-0``,  ``0.377.0-0``,  ``0.376.0-0``,  ``0.374.0-0``,  ``0.373.0-0``,  ``0.372.0-0``,  ``0.371.0-0``,  ``0.370.2-0``,  ``0.369.1-0``,  ``0.369.0-0``,  ``0.368.1-0``,  ``0.367.0-0``,  ``0.366.0-0``,  ``0.365.0-0``,  ``0.364.0-0``,  ``0.363.0-0``,  ``0.362.0-0``,  ``0.361.0-0``,  ``0.359.1-0``,  ``0.359.0-0``,  ``0.358.0-0``,  ``0.357.0-0``,  ``0.356.0-0``,  ``0.355.0-0``,  ``0.354.0-0``,  ``0.353.1-0``,  ``0.352.1-0``,  ``0.350.1-0``,  ``0.349.1-0``,  ``0.347.0-0``,  ``0.346.0-0``,  ``0.345.0-0``,  ``0.344.0-0``,  ``0.343.0-0``,  ``0.342.1-0``,  ``0.331.0-0``,  ``0.330.0-0``,  ``0.329.0-0``,  ``0.328.0-0``,  ``0.327.1-0``,  ``0.326.1-1``,  ``0.326.1-0``,  ``0.325.1-1``,  ``0.325.1-0``,  ``0.324.1-1``,  ``0.324.1-0``,  ``0.323.0-1``,  ``0.323.0-0``,  ``0.322.1-1``,  ``0.322.1-0``,  ``0.321.0-1``,  ``0.321.0-0``,  ``0.320.0-1``,  ``0.320.0-0``,  ``0.319.2-1``,  ``0.319.2-0``,  ``0.318.1-1``,  ``0.318.1-0``,  ``0.318.0-0``,  ``0.317.0-0``,  ``0.316.0-0``,  ``0.315.0-0``,  ``0.314.0-0``,  ``0.313.0-0``,  ``0.312.0-0``,  ``0.311.0-0``,  ``0.310.0-0``,  ``0.309.0-0``,  ``0.308.0-0``,  ``0.307.0-0``,  ``0.306.0-0``,  ``0.305.0-0``,  ``0.304.1-0``,  ``0.303.1-0``,  ``0.302.1-0``,  ``0.301.1-0``,  ``0.300.1-0``,  ``0.299.0-0``,  ``0.298.1-0``,  ``0.297.1-0``,  ``0.296.0-0``,  ``0.295.1-0``,  ``0.294.0-0``,  ``0.293.0-0``,  ``0.292.0-0``,  ``0.291.1-0``,  ``0.290.1-0``,  ``0.289.1-0``,  ``0.288.0-0``,  ``0.287.0-0``,  ``0.286.1-0``,  ``0.285.1-0``,  ``0.285.0-0``,  ``0.284.0-0``,  ``0.283.0-0``,  ``0.282.0-0``,  ``0.273.0-0``,  ``0.261.1-0``,  ``0.257.3-0``,  ``0.254.0-1``,  ``0.254.0-0``,  ``0.250.2-0``,  ``0.247.0-0``,  ``0.225.0-0``,  ``0.223.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on argcomplete: ``>=2.0.0``
   :depends on awscrt: 
   :depends on certifi: 
   :depends on crc32c: ``>=2.7.1``
   :depends on psutil: ``>=5.9.3``
   :depends on python: ``>=3.8``
   :depends on python-dateutil: ``>=2.5``
   :depends on urllib3: ``>=1.25,<2.2``
   :depends on websocket-client: ``>=1.6.0,<1.8.0``

   :additional platforms:
      


Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install dxpy

to add into an existing workspace instead, run::

    pixi add dxpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dxpy

Alternatively, to install into a new environment, run::

    conda create -n envname dxpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dxpy:<tag>

(see `dxpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dxpy| image:: https://img.shields.io/conda/dn/bioconda/dxpy.svg?style=flat
   :target: https://anaconda.org/bioconda/dxpy
   :alt:   (downloads)
.. |docker_dxpy| image:: https://quay.io/repository/biocontainers/dxpy/status
   :target: https://quay.io/repository/biocontainers/dxpy
.. _`dxpy/tags`: https://quay.io/repository/biocontainers/dxpy?tab=tags


.. raw:: html

   <script>
      var package = "dxpy";
      var versions = ["0.409.0","0.408.2","0.407.0","0.400.1","0.399.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_dxpy"></div>
   <div style="width: 100%" id="platform_plot_dxpy"></div>
   <div style="width: 100%" id="cdf_plot_dxpy"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for dxpy
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dxpy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_dxpy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for dxpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dxpy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_dxpy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for dxpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dxpy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_dxpy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxpy/README.html