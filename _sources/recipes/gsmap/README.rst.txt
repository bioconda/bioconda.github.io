:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsmap'
.. highlight: bash

gsmap
=====

.. conda:recipe:: gsmap
   :replaces_section_title:
   :noindex:

   gsMap \(genetically informed spatial mapping of cells for complex traits\).

   :homepage: https://github.com/LeonSong1995/gsMap
   :documentation: https://yanglab.westlake.edu.cn/gsmap/document
   
   :license: MIT / MIT
   :recipe: /`gsmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsmap/meta.yaml>`_

   gsMap integrates spatial transcriptomics \(ST\) data with genome\-wide association study \(GWAS\) summary statistics to map cells to human complex traits\, including diseases\, in a spatially resolved manner.



.. conda:package:: gsmap

   |downloads_gsmap| |docker_gsmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.73.7-0</code>,  <code>1.73.6-0</code>,  <code>1.73.5-0</code>,  <code>1.73.4-0</code>,  <code>1.73.3-0</code>,  <code>1.73.2-0</code>,  <code>1.73.1-0</code>,  <code>1.73.0-0</code>,  <code>1.71.2-0</code>,  </span></summary>
      

      ``1.73.7-0``,  ``1.73.6-0``,  ``1.73.5-0``,  ``1.73.4-0``,  ``1.73.3-0``,  ``1.73.2-0``,  ``1.73.1-0``,  ``1.73.0-0``,  ``1.71.2-0``,  ``1.71.1-0``,  ``1.70-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bitarray: 
   :depends on jinja2: 
   :depends on matplotlib-base: 
   :depends on numpy: ``<2.0.0``
   :depends on pandas: 
   :depends on plotly: 
   :depends on progress: 
   :depends on psutil: 
   :depends on pyarrow: 
   :depends on pyfiglet: 
   :depends on pyranges: 
   :depends on python: ``>=3.10``
   :depends on python-kaleido: 
   :depends on pyyaml: 
   :depends on scanpy: ``>=1.8``
   :depends on scikit-learn: 
   :depends on scikit-misc: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on tqdm: 
   :depends on zarr: 

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

    pixi global install gsmap

to add into an existing workspace instead, run::

    pixi add gsmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gsmap

Alternatively, to install into a new environment, run::

    conda create -n envname gsmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gsmap:<tag>

(see `gsmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gsmap| image:: https://img.shields.io/conda/dn/bioconda/gsmap.svg?style=flat
   :target: https://anaconda.org/bioconda/gsmap
   :alt:   (downloads)
.. |docker_gsmap| image:: https://quay.io/repository/biocontainers/gsmap/status
   :target: https://quay.io/repository/biocontainers/gsmap
.. _`gsmap/tags`: https://quay.io/repository/biocontainers/gsmap?tab=tags


.. raw:: html

   <script>
      var package = "gsmap";
      var versions = ["1.73.7","1.73.6","1.73.5","1.73.4","1.73.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gsmap"></div>
   <div style="width: 100%" id="platform_plot_gsmap"></div>
   <div style="width: 100%" id="cdf_plot_gsmap"></div>



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
         
            // Build cdf plot for gsmap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gsmap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gsmap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gsmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gsmap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gsmap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gsmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gsmap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gsmap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsmap/README.html