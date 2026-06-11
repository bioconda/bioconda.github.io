:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omero-annotate-ai'
.. highlight: bash

omero-annotate-ai
=================

.. conda:recipe:: omero-annotate-ai
   :replaces_section_title:
   :noindex:

   OMERO integration for AI\-powered image annotation and segmentation workflows

   :homepage: https://github.com/Leiden-Cell-Observatory/omero_annotate_ai
   :documentation: https://leiden-cell-observatory.github.io/omero_annotate_ai/
   
   :license: Apache-2.0
   :recipe: /`omero-annotate-ai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-annotate-ai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-annotate-ai/meta.yaml>`_

   Python package to support reproducible image annotation workflows for AI
   training using OMERO data repositories. Provides Jupyter widgets and tools
   for reproducible annotation\, training\, and inference using micro\-SAM\,
   Cellpose\, and other AI models directly with OMERO datasets.



.. conda:package:: omero-annotate-ai

   |downloads_omero-annotate-ai| |docker_omero-annotate-ai|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.1-0``

      

   
   :depends on dask: ``>=2021.6.0``
   :depends on ezomero: ``>=3.1.0``
   :depends on imageio: ``>=2.9.0``
   :depends on ipykernel: 
   :depends on ipywidgets: ``>=7.6.0``
   :depends on keyring: ``>=23.0.0``
   :depends on micro_sam: ``>=1.7.0,<2``
   :depends on numpy: ``>=1.21.0,<2.0``
   :depends on opencv: ``>=4.5.0``
   :depends on pandas: ``>=1.3.0``
   :depends on pydantic: ``>=2.0.0``
   :depends on python: 
   :depends on pyyaml: ``>=6.0``
   :depends on tifffile: 
   :depends on typing-extensions: ``>=4.0.0``
   :depends on zeroc-ice: ``>=3.6.4,<3.7``

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

    pixi global install omero-annotate-ai

to add into an existing workspace instead, run::

    pixi add omero-annotate-ai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install omero-annotate-ai

Alternatively, to install into a new environment, run::

    conda create -n envname omero-annotate-ai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/omero-annotate-ai:<tag>

(see `omero-annotate-ai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_omero-annotate-ai| image:: https://img.shields.io/conda/dn/bioconda/omero-annotate-ai.svg?style=flat
   :target: https://anaconda.org/bioconda/omero-annotate-ai
   :alt:   (downloads)
.. |docker_omero-annotate-ai| image:: https://quay.io/repository/biocontainers/omero-annotate-ai/status
   :target: https://quay.io/repository/biocontainers/omero-annotate-ai
.. _`omero-annotate-ai/tags`: https://quay.io/repository/biocontainers/omero-annotate-ai?tab=tags


.. raw:: html

   <script>
      var package = "omero-annotate-ai";
      var versions = ["0.3.0","0.2.8","0.2.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_omero-annotate-ai"></div>
   <div style="width: 100%" id="platform_plot_omero-annotate-ai"></div>
   <div style="width: 100%" id="cdf_plot_omero-annotate-ai"></div>



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
         
            // Build cdf plot for omero-annotate-ai
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/omero-annotate-ai/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_omero-annotate-ai', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for omero-annotate-ai
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/omero-annotate-ai/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_omero-annotate-ai', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for omero-annotate-ai
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/omero-annotate-ai/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_omero-annotate-ai', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omero-annotate-ai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omero-annotate-ai/README.html