:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'ms-gpt'
.. highlight: bash

ms-gpt
======

.. conda:recipe:: ms-gpt
   :replaces_section_title:
   :noindex:

   Known\-formula MS\/MS de novo structure elucidation by spectrum\-induced posterior querying of a molecule\-language model.

   :homepage: https://github.com/VIKI623/MS-GPT
   :license: APACHE / Apache-2.0
   :recipe: /`ms-gpt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-gpt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-gpt/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2607.23607`

   MS\-GPT formulates known\-formula MS\/MS de novo structure elucidation as
   spectrum\-induced posterior querying of a conditional molecule\-language
   model. A MIST spectrum encoder maps an MS\/MS spectrum and its formula to a
   fingerprint posterior\, a calibrated band of thresholded queries is derived
   from it\, and candidate structures generated across the band are ranked by
   generation\-frequency consensus. This package provides the ms\_gpt Python
   library\; model checkpoints and benchmark data are distributed separately
   by the authors.



.. conda:package:: ms-gpt

   |downloads_ms-gpt| |docker_ms-gpt|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on datamol: 
   :depends on datasets: ``>=2.18.0``
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on numpy: ``>=1.26.0,<3``
   :depends on omegaconf: ``>=2.3.0,<3``
   :depends on pandas: ``>=2.0.0,<4``
   :depends on peft: ``>=0.10.0,<1``
   :depends on pyarrow: ``>=14.0.0``
   :depends on python: ``>=3.10``
   :depends on pytorch: ``>=2.2.0,<3``
   :depends on rdkit: 
   :depends on safe-mol: ``>=0.1.13,<0.2``
   :depends on tqdm: 
   :depends on transformers: ``>=4.52.0,<5.0.0``
   :depends on wandb: ``>=0.16.5``

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

    pixi global install ms-gpt

to add into an existing workspace instead, run::

    pixi add ms-gpt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ms-gpt

Alternatively, to install into a new environment, run::

    conda create -n envname ms-gpt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ms-gpt:<tag>

(see `ms-gpt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ms-gpt| image:: https://img.shields.io/conda/dn/bioconda/ms-gpt.svg?style=flat
   :target: https://anaconda.org/bioconda/ms-gpt
   :alt:   (downloads)
.. |docker_ms-gpt| image:: https://quay.io/repository/biocontainers/ms-gpt/status
   :target: https://quay.io/repository/biocontainers/ms-gpt
.. _`ms-gpt/tags`: https://quay.io/repository/biocontainers/ms-gpt?tab=tags


.. raw:: html

   <script>
      var package = "ms-gpt";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ms-gpt"></div>
   <div style="width: 100%" id="platform_plot_ms-gpt"></div>
   <div style="width: 100%" id="cdf_plot_ms-gpt"></div>



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
         
            // Build cdf plot for ms-gpt
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms-gpt/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ms-gpt', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ms-gpt
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms-gpt/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ms-gpt', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ms-gpt
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms-gpt/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ms-gpt', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
This package provides the ms\_gpt Python library only. The evaluation and
training scripts\, model checkpoints and benchmark data are obtained from
https\:\/\/github.com\/VIKI623\/MS\-GPT as described in its README.
On Linux hosts with an NVIDIA driver\, conda installs a CUDA build of
PyTorch automatically. To require a CUDA build rather than fall back to
CPU\, install with\: conda install \-c conda\-forge \-c bioconda ms\-gpt \"pytorch\=\*\=cuda\*\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms-gpt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms-gpt/README.html