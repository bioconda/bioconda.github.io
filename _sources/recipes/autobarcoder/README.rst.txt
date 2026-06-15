:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autobarcoder'
.. highlight: bash

autobarcoder
============

.. conda:recipe:: autobarcoder
   :replaces_section_title:
   :noindex:

   Demultiplex and cluster RNA barcodes from 96\-well\-plate sequencing reads.

   :homepage: https://github.com/abachu2005/AutoBarcoder-OS-
   :documentation: https://github.com/abachu2005/AutoBarcoder-OS-#readme
   
   :license: MIT / MIT
   :recipe: /`autobarcoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobarcoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobarcoder/meta.yaml>`_

   AutoBarcoder is a Python tool for demultiplexing and clustering RNA
   barcodes from 96\-well\-plate sequencing reads. Ships with a Tkinter
   desktop GUI\, a FastAPI web UI\, and a command\-line setup wizard.



.. conda:package:: autobarcoder

   |downloads_autobarcoder| |docker_autobarcoder|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends on matplotlib-base: ``>=3.5``
   :depends on networkx: ``>=2.8``
   :depends on numpy: ``>=1.22``
   :depends on pandas: ``>=1.4``
   :depends on python: ``>=3.9``
   :depends on python-levenshtein: ``>=0.20``

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

    pixi global install autobarcoder

to add into an existing workspace instead, run::

    pixi add autobarcoder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install autobarcoder

Alternatively, to install into a new environment, run::

    conda create -n envname autobarcoder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/autobarcoder:<tag>

(see `autobarcoder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_autobarcoder| image:: https://img.shields.io/conda/dn/bioconda/autobarcoder.svg?style=flat
   :target: https://anaconda.org/bioconda/autobarcoder
   :alt:   (downloads)
.. |docker_autobarcoder| image:: https://quay.io/repository/biocontainers/autobarcoder/status
   :target: https://quay.io/repository/biocontainers/autobarcoder
.. _`autobarcoder/tags`: https://quay.io/repository/biocontainers/autobarcoder?tab=tags


.. raw:: html

   <script>
      var package = "autobarcoder";
      var versions = ["1.0.4","1.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_autobarcoder"></div>
   <div style="width: 100%" id="platform_plot_autobarcoder"></div>
   <div style="width: 100%" id="cdf_plot_autobarcoder"></div>



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
         
            // Build cdf plot for autobarcoder
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/autobarcoder/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_autobarcoder', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for autobarcoder
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/autobarcoder/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_autobarcoder', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for autobarcoder
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/autobarcoder/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_autobarcoder', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autobarcoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autobarcoder/README.html