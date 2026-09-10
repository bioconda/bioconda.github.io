:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'winnow-fdr'
.. highlight: bash

winnow-fdr
==========

.. conda:recipe:: winnow-fdr
   :replaces_section_title:
   :noindex:

   Score calibration and false discovery estimation for de novo peptide sequencing.

   :homepage: https://github.com/instadeepai/winnow
   :license: Apache-2.0
   :recipe: /`winnow-fdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/winnow-fdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/winnow-fdr/meta.yaml>`_
   :links: biotools: :biotools:`winnow`, doi: :doi:`10.48550/arXiv.2509.24952`

   


.. conda:package:: winnow-fdr

   |downloads_winnow-fdr| |docker_winnow-fdr|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.87``
   :depends on huggingface_hub: ``>=0.35.3``
   :depends on hydra-core: ``>=1.3.2``
   :depends on instanovo: ``>=1.1.4``
   :depends on koinapy: ``>=0.0.10``
   :depends on matchms: ``>=0.31.0``
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on polars: ``>=1.39.3``
   :depends on pyahocorasick: ``>=2.3.1``
   :depends on python: ``>=3.10,<3.14``
   :depends on pytorch: ``>=2.6,<2.9``
   :depends on safetensors: ``>=0.7.0``
   :depends on scikit-learn: ``>=1.3.0``
   :depends on tomli: ``>=2.2.1``
   :depends on typer: ``>=0.15.2``

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

    pixi global install winnow-fdr

to add into an existing workspace instead, run::

    pixi add winnow-fdr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install winnow-fdr

Alternatively, to install into a new environment, run::

    conda create -n envname winnow-fdr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/winnow-fdr:<tag>

(see `winnow-fdr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_winnow-fdr| image:: https://img.shields.io/conda/dn/bioconda/winnow-fdr.svg?style=flat
   :target: https://anaconda.org/bioconda/winnow-fdr
   :alt:   (downloads)
.. |docker_winnow-fdr| image:: https://quay.io/repository/biocontainers/winnow-fdr/status
   :target: https://quay.io/repository/biocontainers/winnow-fdr
.. _`winnow-fdr/tags`: https://quay.io/repository/biocontainers/winnow-fdr?tab=tags


.. raw:: html

   <script>
      var package = "winnow-fdr";
      var versions = ["2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_winnow-fdr"></div>
   <div style="width: 100%" id="platform_plot_winnow-fdr"></div>
   <div style="width: 100%" id="cdf_plot_winnow-fdr"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for winnow-fdr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/winnow-fdr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_winnow-fdr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for winnow-fdr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/winnow-fdr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_winnow-fdr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for winnow-fdr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/winnow-fdr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_winnow-fdr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/winnow-fdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/winnow-fdr/README.html