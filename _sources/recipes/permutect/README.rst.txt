:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'permutect'
.. highlight: bash

permutect
=========

.. conda:recipe:: permutect
   :replaces_section_title:
   :noindex:

   Deep learning architecture for somatic and germline variant calling

   :homepage: https://github.com/broadinstitute/permutect
   :documentation: https://github.com/broadinstitute/permutect/blob/main/README.md
   
   :license: Apache / Apache-2.0
   :recipe: /`permutect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/permutect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/permutect/meta.yaml>`_

   Permutect is a pipeline for calling and filtering variants from genomic
   sequencing data. It uses a permissive variant caller \(Mutect2\) followed by
   a deep learning\-based filtering model. Unlike Mutect2\/FilterMutectCalls\,
   Permutect does not require a panel of normals and works across different
   sequencing platforms for both somatic and germline variant calling.



.. conda:package:: permutect

   |downloads_permutect| |docker_permutect|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``

      

   
   :depends on cyvcf2: ``>=0.31.4,<0.32``
   :depends on dill: ``>=0.3.7``
   :depends on matplotlib-base: ``>=3.8``
   :depends on numpy: ``>=1.26``
   :depends on psutil: ``>=5.9``
   :depends on pymc: ``>=5.28``
   :depends on python: ``>=3.10,<3.13``
   :depends on python-intervaltree: ``>=3.1``
   :depends on pytorch: ``>=2.10,<2.11``
   :depends on scikit-learn: ``>=1.3``
   :depends on tensorboard: ``>=2.8``
   :depends on tqdm: ``>=4.66``

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

    pixi global install permutect

to add into an existing workspace instead, run::

    pixi add permutect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install permutect

Alternatively, to install into a new environment, run::

    conda create -n envname permutect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/permutect:<tag>

(see `permutect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_permutect| image:: https://img.shields.io/conda/dn/bioconda/permutect.svg?style=flat
   :target: https://anaconda.org/bioconda/permutect
   :alt:   (downloads)
.. |docker_permutect| image:: https://quay.io/repository/biocontainers/permutect/status
   :target: https://quay.io/repository/biocontainers/permutect
.. _`permutect/tags`: https://quay.io/repository/biocontainers/permutect?tab=tags


.. raw:: html

   <script>
      var package = "permutect";
      var versions = ["0.9.0","0.8.0","0.7.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_permutect"></div>
   <div style="width: 100%" id="platform_plot_permutect"></div>
   <div style="width: 100%" id="cdf_plot_permutect"></div>



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
         
            // Build cdf plot for permutect
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/permutect/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_permutect', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for permutect
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/permutect/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_permutect', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for permutect
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/permutect/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_permutect', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/permutect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/permutect/README.html