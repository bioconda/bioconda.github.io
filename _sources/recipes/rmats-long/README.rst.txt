:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats-long'
.. highlight: bash

rmats-long
==========

.. conda:recipe:: rmats-long
   :replaces_section_title:
   :noindex:

   Differential isoform analysis using long\-read RNA\-seq data.

   :homepage: https://github.com/Xinglab/rMATS-long
   :license: BSD / BSD-2-Clause
   :recipe: /`rmats-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats-long/meta.yaml>`_

   


.. conda:package:: rmats-long

   |downloads_rmats-long| |docker_rmats-long|

   :versions:
      
      

      ``2.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-drimseq: 
   :depends on matplotlib-base: ``>=3.7``
   :depends on networkx: ``>=2.8``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=2``
   :depends on pydot: ``>=3``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on r-base: 
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggvenndiagram: 
   :depends on r-mclogit: 
   :depends on r-stringi: ``>=1.7.8``
   :depends on r-this.path: 
   :depends on rpy2: ``>=3.5``
   :depends on samtools: 
   :depends on threadpoolctl: ``>=3.6``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install rmats-long

to add into an existing workspace instead, run::

    pixi add rmats-long

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmats-long

Alternatively, to install into a new environment, run::

    conda create -n envname rmats-long

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmats-long:<tag>

(see `rmats-long/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmats-long| image:: https://img.shields.io/conda/dn/bioconda/rmats-long.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats-long
   :alt:   (downloads)
.. |docker_rmats-long| image:: https://quay.io/repository/biocontainers/rmats-long/status
   :target: https://quay.io/repository/biocontainers/rmats-long
.. _`rmats-long/tags`: https://quay.io/repository/biocontainers/rmats-long?tab=tags


.. raw:: html

   <script>
      var package = "rmats-long";
      var versions = ["2.0.1","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rmats-long"></div>
   <div style="width: 100%" id="platform_plot_rmats-long"></div>
   <div style="width: 100%" id="cdf_plot_rmats-long"></div>



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
         
            // Build cdf plot for rmats-long
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rmats-long/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rmats-long', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rmats-long
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rmats-long/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rmats-long', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rmats-long
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rmats-long/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rmats-long', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats-long/README.html