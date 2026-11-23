:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'alphagenome-research'
.. highlight: bash

alphagenome-research
====================

.. conda:recipe:: alphagenome-research
   :replaces_section_title:
   :noindex:

   Local inference and fine\-tuning code for the AlphaGenome model

   :homepage: https://github.com/google-deepmind/alphagenome_research
   :documentation: https://www.alphagenomedocs.com/
   
   :license: APACHE / Apache-2.0
   :recipe: /`alphagenome-research <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphagenome-research>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphagenome-research/meta.yaml>`_

   AlphaGenome is a unified DNA sequence model from Google DeepMind for
   regulatory variant\-effect prediction. This package runs the model locally
   with JAX\, using weights downloaded separately under the AlphaGenome model
   terms\; it does not include the weights.



.. conda:package:: alphagenome-research

   |downloads_alphagenome-research| |docker_alphagenome-research|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends on absl-py: 
   :depends on aiohttp: 
   :depends on alphagenome: ``>=0.7.0,<2``
   :depends on anndata: 
   :depends on chex: 
   :depends on dm-haiku: 
   :depends on einshape: 
   :depends on etils: 
   :depends on huggingface_hub: 
   :depends on jax: 
   :depends on jaxtyping: 
   :depends on kagglehub: 
   :depends on numpy: 
   :depends on optax: 
   :depends on orbax-checkpoint: 
   :depends on pandas: ``<3``
   :depends on protobuf: ``>=6.33.5``
   :depends on pyarrow: 
   :depends on pybigwig: 
   :depends on pyfaidx: 
   :depends on pyranges: 
   :depends on python: ``>=3.11``
   :depends on tensorflow: 

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

    pixi global install alphagenome-research

to add into an existing workspace instead, run::

    pixi add alphagenome-research

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alphagenome-research

Alternatively, to install into a new environment, run::

    conda create -n envname alphagenome-research

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alphagenome-research:<tag>

(see `alphagenome-research/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alphagenome-research| image:: https://img.shields.io/conda/dn/bioconda/alphagenome-research.svg?style=flat
   :target: https://anaconda.org/bioconda/alphagenome-research
   :alt:   (downloads)
.. |docker_alphagenome-research| image:: https://quay.io/repository/biocontainers/alphagenome-research/status
   :target: https://quay.io/repository/biocontainers/alphagenome-research
.. _`alphagenome-research/tags`: https://quay.io/repository/biocontainers/alphagenome-research?tab=tags


.. raw:: html

   <script>
      var package = "alphagenome-research";
      var versions = ["0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_alphagenome-research"></div>
   <div style="width: 100%" id="platform_plot_alphagenome-research"></div>
   <div style="width: 100%" id="cdf_plot_alphagenome-research"></div>



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
         
            // Build cdf plot for alphagenome-research
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphagenome-research/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_alphagenome-research', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for alphagenome-research
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphagenome-research/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_alphagenome-research', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for alphagenome-research
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphagenome-research/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_alphagenome-research', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphagenome-research/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphagenome-research/README.html