:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'janusx'
.. highlight: bash

janusx
======

.. conda:recipe:: janusx
   :replaces_section_title:
   :noindex:

   Rust\-accelerated toolkit for GWAS\, genomic selection\, GRM\/PCA\, and post\-analysis plotting

   :homepage: https://github.com/FJingxian/JanusX
   :documentation: https://github.com/FJingxian/JanusX/tree/v1.0.27/doc
   
   :license: AGPL-3.0-or-later
   :recipe: /`janusx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/janusx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/janusx/meta.yaml>`_
   :links: doi: :doi:`10.64898/2026.01.20.700366`

   JanusX is a Python\+Rust toolkit for genome\-wide association studies\,
   genomic selection\, GRM\/PCA construction\, and downstream visualization.
   This package installs the \`jx\` and \`jxpy\` command\-line entry points.

   Core runtime dependencies are included. Heavier optional extras remain
   user\-managed\; \`scikit\-learn\`\, \`xgboost\`\, \`statsmodels\`\, \`toytree\`\, and
   \`toyplot\` can be installed from conda\-forge as needed.



.. conda:package:: janusx

   |downloads_janusx| |docker_janusx|

   :versions:
      
      

      ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.21-0``,  ``1.0.20-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on _python_abi3_support: ``1.*``
   :depends on cpython: ``>=3.10``
   :depends on joblib: ``>=1.5``
   :depends on libcxx: ``>=19``
   :depends on libopenblas: 
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on pandas: ``>=1.5``
   :depends on psutil: 
   :depends on python: ``>=3.10``
   :depends on rich: 
   :depends on rich-argparse: 
   :depends on scipy: 
   :depends on threadpoolctl: 
   :depends on tqdm: 

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

    pixi global install janusx

to add into an existing workspace instead, run::

    pixi add janusx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install janusx

Alternatively, to install into a new environment, run::

    conda create -n envname janusx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/janusx:<tag>

(see `janusx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_janusx| image:: https://img.shields.io/conda/dn/bioconda/janusx.svg?style=flat
   :target: https://anaconda.org/bioconda/janusx
   :alt:   (downloads)
.. |docker_janusx| image:: https://quay.io/repository/biocontainers/janusx/status
   :target: https://quay.io/repository/biocontainers/janusx
.. _`janusx/tags`: https://quay.io/repository/biocontainers/janusx?tab=tags


.. raw:: html

   <script>
      var package = "janusx";
      var versions = ["1.0.27","1.0.26","1.0.25","1.0.21","1.0.20"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_janusx"></div>
   <div style="width: 100%" id="platform_plot_janusx"></div>
   <div style="width: 100%" id="cdf_plot_janusx"></div>



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
         
            // Build cdf plot for janusx
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/janusx/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_janusx', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for janusx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/janusx/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_janusx', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for janusx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/janusx/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_janusx', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/janusx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/janusx/README.html