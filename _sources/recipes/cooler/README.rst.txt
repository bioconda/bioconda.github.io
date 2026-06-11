:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooler'
.. highlight: bash

cooler
======

.. conda:recipe:: cooler
   :replaces_section_title:
   :noindex:

   Sparse binary format for genomic interaction matrices.

   :homepage: https://github.com/open2c/cooler
   :documentation: https://open2c.github.io/cooler
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cooler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler/meta.yaml>`_
   :links: doi: :doi:`0.1093/bioinformatics/btz540`

   


.. conda:package:: cooler

   |downloads_cooler| |docker_cooler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.11-2</code>,  </span></summary>
      

      ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.11-2``,  ``0.8.11-1``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-4``,  ``0.7.6-3``,  ``0.7.6-2``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.4-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on asciitree: 
   :depends on click: ``>=7``
   :depends on cytoolz: 
   :depends on dask: 
   :depends on h5py: ``>=2.5``
   :depends on multiprocess: 
   :depends on numpy: ``>=1.26``
   :depends on pairix: 
   :depends on pandas: ``>1.5``
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on scipy: 
   :depends on simplejson: 

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

    pixi global install cooler

to add into an existing workspace instead, run::

    pixi add cooler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cooler

Alternatively, to install into a new environment, run::

    conda create -n envname cooler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cooler:<tag>

(see `cooler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cooler| image:: https://img.shields.io/conda/dn/bioconda/cooler.svg?style=flat
   :target: https://anaconda.org/bioconda/cooler
   :alt:   (downloads)
.. |docker_cooler| image:: https://quay.io/repository/biocontainers/cooler/status
   :target: https://quay.io/repository/biocontainers/cooler
.. _`cooler/tags`: https://quay.io/repository/biocontainers/cooler?tab=tags


.. raw:: html

   <script>
      var package = "cooler";
      var versions = ["0.10.4","0.10.3","0.10.2","0.10.0","0.9.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cooler"></div>
   <div style="width: 100%" id="platform_plot_cooler"></div>
   <div style="width: 100%" id="cdf_plot_cooler"></div>



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
         
            // Build cdf plot for cooler
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cooler/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cooler', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cooler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cooler/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cooler', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cooler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cooler/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cooler', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooler/README.html