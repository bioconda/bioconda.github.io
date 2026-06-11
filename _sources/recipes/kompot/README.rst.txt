:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kompot'
.. highlight: bash

kompot
======

.. conda:recipe:: kompot
   :replaces_section_title:
   :noindex:

   Differential abundance and gene expression analysis using Mahalanobis distance with JAX backend

   :homepage: https://github.com/settylab/kompot
   :documentation: https://kompot.readthedocs.io/
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`kompot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kompot/meta.yaml>`_

   Kompot performs differential abundance and differential gene expression
   analysis using Gaussian process\-based methods with Mahalanobis distance.
   It features a fast JAX backend and supports both Python API and CLI.



.. conda:package:: kompot

   |downloads_kompot| |docker_kompot|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends on anndata: ``>=0.8.0``
   :depends on filelock: ``>=3.12.0``
   :depends on jax: ``>=0.3.0``
   :depends on jaxlib: ``>=0.3.0``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on mellon: ``>=1.6.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on psutil: ``>=5.9.0``
   :depends on pynndescent: ``>=0.5.0``
   :depends on python: ``>=3.9``
   :depends on python-igraph: ``>=0.10.0``
   :depends on pyyaml: ``>=5.0.0``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on scipy: ``>=1.7.0``
   :depends on statsmodels: ``>=0.13.0``
   :depends on tqdm: ``>=4.60.0``

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

    pixi global install kompot

to add into an existing workspace instead, run::

    pixi add kompot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kompot

Alternatively, to install into a new environment, run::

    conda create -n envname kompot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kompot:<tag>

(see `kompot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kompot| image:: https://img.shields.io/conda/dn/bioconda/kompot.svg?style=flat
   :target: https://anaconda.org/bioconda/kompot
   :alt:   (downloads)
.. |docker_kompot| image:: https://quay.io/repository/biocontainers/kompot/status
   :target: https://quay.io/repository/biocontainers/kompot
.. _`kompot/tags`: https://quay.io/repository/biocontainers/kompot?tab=tags


.. raw:: html

   <script>
      var package = "kompot";
      var versions = ["0.7.0","0.6.3","0.6.2","0.6.1","0.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_kompot"></div>
   <div style="width: 100%" id="platform_plot_kompot"></div>
   <div style="width: 100%" id="cdf_plot_kompot"></div>



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
         
            // Build cdf plot for kompot
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kompot/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_kompot', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for kompot
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kompot/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_kompot', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for kompot
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kompot/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_kompot', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kompot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kompot/README.html