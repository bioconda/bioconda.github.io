:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellbender'
.. highlight: bash

cellbender
==========

.. conda:recipe:: cellbender
   :replaces_section_title:
   :noindex:

   A software package for eliminating technical artifacts from high\-throughput single\-cell RNA sequencing \(scRNA\-seq\) data

   :homepage: https://github.com/broadinstitute/CellBender
   :documentation: https://cellbender.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cellbender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellbender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellbender/meta.yaml>`_
   :links: biotools: :biotools:`CellBender`, doi: :doi:`10.1038/s41592-023-01943-7`

   


.. conda:package:: cellbender

   |downloads_cellbender| |docker_cellbender|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.0-0``

      

   
   :depends on anndata: ``>=0.7``
   :depends on ipython: 
   :depends on jupyter: 
   :depends on jupyter_contrib_nbextensions: 
   :depends on loompy: 
   :depends on matplotlib-base: 
   :depends on nbconvert: ``<7.0.0``
   :depends on notebook: ``<7.0.0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pyro-ppl: ``>=1.8.4``
   :depends on pytables: 
   :depends on python: ``3.7.*``
   :depends on pytorch: 
   :depends on scipy: 

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

    pixi global install cellbender

to add into an existing workspace instead, run::

    pixi add cellbender

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellbender

Alternatively, to install into a new environment, run::

    conda create -n envname cellbender

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellbender:<tag>

(see `cellbender/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellbender| image:: https://img.shields.io/conda/dn/bioconda/cellbender.svg?style=flat
   :target: https://anaconda.org/bioconda/cellbender
   :alt:   (downloads)
.. |docker_cellbender| image:: https://quay.io/repository/biocontainers/cellbender/status
   :target: https://quay.io/repository/biocontainers/cellbender
.. _`cellbender/tags`: https://quay.io/repository/biocontainers/cellbender?tab=tags


.. raw:: html

   <script>
      var package = "cellbender";
      var versions = ["0.3.2","0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cellbender"></div>
   <div style="width: 100%" id="platform_plot_cellbender"></div>
   <div style="width: 100%" id="cdf_plot_cellbender"></div>



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
         
            // Build cdf plot for cellbender
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellbender/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cellbender', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cellbender
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellbender/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cellbender', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cellbender
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellbender/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cellbender', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellbender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellbender/README.html