:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ml'
.. highlight: bash

galaxy-ml
=========

.. conda:recipe:: galaxy-ml
   :replaces_section_title:
   :noindex:

   APIs for Galaxy machine learning tools

   :homepage: https://github.com/goeckslab/Galaxy-ML
   :license: MIT
   :recipe: /`galaxy-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml/meta.yaml>`_

   


.. conda:package:: galaxy-ml

   |downloads_galaxy-ml| |docker_galaxy-ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-3</code>,  <code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-2</code>,  </span></summary>
      

      ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-5``,  ``0.8.2-4``,  ``0.8.2-3``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.12-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.5-0``,  ``0.7.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on asteval: ``>=0.9.14``
   :depends on bleach: ``>=3.3.0``
   :depends on graphviz: ``>=2.40.1``
   :depends on h5py: ``>=3.6,<3.8``
   :depends on htslib: 
   :depends on imbalanced-learn: ``>=0.9,<0.10``
   :depends on joblib: ``>=1.0``
   :depends on keras: ``>=2.10,<2.11``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: ``>=3.1.1``
   :depends on mlxtend: ``>=0.21,<0.22``
   :depends on numpy: ``>=1.22,<1.23``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: ``>=1.0,<1.3``
   :depends on plotly: ``>=4.10.0,<5.0``
   :depends on pydot: ``>=1.4``
   :depends on pyfaidx: 
   :depends on pytabix: 
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on scikit-learn: ``>=1.1,<1.2``
   :depends on scikit-optimize: ``>=0.9``
   :depends on scipy: ``>=1.3.1``
   :depends on six: ``<=1.15.0``
   :depends on skrebate: ``>=0.60,<0.70``
   :depends on tabix: 
   :depends on tensorflow: ``>=2.10,<2.11``
   :depends on xgboost: ``>=1.6,<1.8``

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

    pixi global install galaxy-ml

to add into an existing workspace instead, run::

    pixi add galaxy-ml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-ml

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-ml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-ml:<tag>

(see `galaxy-ml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-ml| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ml
   :alt:   (downloads)
.. |docker_galaxy-ml| image:: https://quay.io/repository/biocontainers/galaxy-ml/status
   :target: https://quay.io/repository/biocontainers/galaxy-ml
.. _`galaxy-ml/tags`: https://quay.io/repository/biocontainers/galaxy-ml?tab=tags


.. raw:: html

   <script>
      var package = "galaxy-ml";
      var versions = ["0.10.0","0.10.0","0.10.0","0.10.0","0.9.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_galaxy-ml"></div>
   <div style="width: 100%" id="platform_plot_galaxy-ml"></div>
   <div style="width: 100%" id="cdf_plot_galaxy-ml"></div>



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
         
            // Build cdf plot for galaxy-ml
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-ml/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_galaxy-ml', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for galaxy-ml
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-ml/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_galaxy-ml', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for galaxy-ml
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/galaxy-ml/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_galaxy-ml', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ml/README.html