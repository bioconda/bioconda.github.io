:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepchopper'
.. highlight: bash

deepchopper
===========

.. conda:recipe:: deepchopper
   :replaces_section_title:
   :noindex:

   A Genomic Language Model for Chimera Artifact Detection in Nanopore Direct RNA Sequencing.

   :homepage: https://github.com/ylab-hi/DeepChopper
   :license: Apache / Apache-2.0
   :recipe: /`deepchopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepchopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepchopper/meta.yaml>`_

   DeepChopper is a genomic language model designed to identify artificial sequences.
   It provides functionality for encoding FASTQ files\, making predictions\, and chopping sequences.



.. conda:package:: deepchopper

   |downloads_deepchopper| |docker_deepchopper|

   :versions:
      
      

      ``1.3.3-0``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``

      

   
   :depends on __osx: ``>=11.0``
   :depends on datasets: ``>=3.0.0``
   :depends on deepchopper-cli: ``>=1.3.1``
   :depends on evaluate: ``>=0.4.3``
   :depends on fastapi: ``>=0.115.0``
   :depends on gradio: ``>=5.12.0``
   :depends on hydra-core: ``>=1.3.2``
   :depends on lightning: ``>=2.1.2``
   :depends on omegaconf: ``>=2.3.0``
   :depends on pyarrow: ``>=20.0.0``
   :depends on pyfastx: ``>=2.2.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-multipart: ``>=0.0.12``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pytorch: ``>=2.6.0``
   :depends on pytz: 
   :depends on rich: ``>=13.7.0``
   :depends on safetensors: ``>=0.4.2``
   :depends on scikit-learn: ``>=1.5.2``
   :depends on torchmetrics: ``>=1.2.1``
   :depends on transformers: ``>=4.37.2``
   :depends on typer: ``>=0.12.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install deepchopper

to add into an existing workspace instead, run::

    pixi add deepchopper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepchopper

Alternatively, to install into a new environment, run::

    conda create -n envname deepchopper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepchopper:<tag>

(see `deepchopper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepchopper| image:: https://img.shields.io/conda/dn/bioconda/deepchopper.svg?style=flat
   :target: https://anaconda.org/bioconda/deepchopper
   :alt:   (downloads)
.. |docker_deepchopper| image:: https://quay.io/repository/biocontainers/deepchopper/status
   :target: https://quay.io/repository/biocontainers/deepchopper
.. _`deepchopper/tags`: https://quay.io/repository/biocontainers/deepchopper?tab=tags


.. raw:: html

   <script>
      var package = "deepchopper";
      var versions = ["1.3.3","1.2.9","1.2.9","1.2.6","1.2.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_deepchopper"></div>
   <div style="width: 100%" id="platform_plot_deepchopper"></div>
   <div style="width: 100%" id="cdf_plot_deepchopper"></div>



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
         
            // Build cdf plot for deepchopper
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deepchopper/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_deepchopper', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for deepchopper
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deepchopper/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_deepchopper', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for deepchopper
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deepchopper/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_deepchopper', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepchopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepchopper/README.html