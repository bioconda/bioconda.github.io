:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispritz'
.. highlight: bash

crispritz
=========

.. conda:recipe:: crispritz
   :replaces_section_title:
   :noindex:

   CRISPRitz\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/pinellolab/CRISPRitz
   :license: GPL3
   :recipe: /`crispritz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz/meta.yaml>`_

   


.. conda:package:: crispritz

   |downloads_crispritz| |docker_crispritz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-2</code>,  <code>2.7.0-0</code>,  <code>2.6.6-4</code>,  <code>2.6.6-3</code>,  <code>2.6.6-2</code>,  <code>2.6.6-1</code>,  <code>2.6.6-0</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  </span></summary>
      

      ``2.7.0-2``,  ``2.7.0-0``,  ``2.6.6-4``,  ``2.6.6-3``,  ``2.6.6-2``,  ``2.6.6-1``,  ``2.6.6-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.9-0``,  ``2.5.8-0``,  ``2.5.7-1``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.9-0``,  ``2.4.8-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.8-0``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.3.6-2``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bcftools: 
   :depends on bedops: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on boost-cpp: 
   :depends on htslib: 
   :depends on intervaltree: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on more-itertools: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: ``0.22.1.*``
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on python_abi: ``3.8.* *_cp38``
   :depends on rename: 
   :depends on scikit-learn: ``0.23.2.*``
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on tk: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install crispritz

to add into an existing workspace instead, run::

    pixi add crispritz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crispritz

Alternatively, to install into a new environment, run::

    conda create -n envname crispritz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crispritz:<tag>

(see `crispritz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crispritz| image:: https://img.shields.io/conda/dn/bioconda/crispritz.svg?style=flat
   :target: https://anaconda.org/bioconda/crispritz
   :alt:   (downloads)
.. |docker_crispritz| image:: https://quay.io/repository/biocontainers/crispritz/status
   :target: https://quay.io/repository/biocontainers/crispritz
.. _`crispritz/tags`: https://quay.io/repository/biocontainers/crispritz?tab=tags


.. raw:: html

   <script>
      var package = "crispritz";
      var versions = ["2.7.0","2.7.0","2.6.6","2.6.6","2.6.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_crispritz"></div>
   <div style="width: 100%" id="platform_plot_crispritz"></div>
   <div style="width: 100%" id="cdf_plot_crispritz"></div>



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
         
            // Build cdf plot for crispritz
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crispritz/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_crispritz', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for crispritz
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crispritz/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_crispritz', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for crispritz
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crispritz/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_crispritz', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispritz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispritz/README.html