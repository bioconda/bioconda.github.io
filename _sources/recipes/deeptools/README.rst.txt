:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeptools'
.. highlight: bash

deeptools
=========

.. conda:recipe:: deeptools
   :replaces_section_title:
   :noindex:

   A set of user\-friendly tools for normalization and visualzation of deep\-sequencing data

   :homepage: https://github.com/deeptools/deepTools
   :documentation: https://deeptools.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`deeptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptools/meta.yaml>`_
   :links: biotools: :biotools:`deeptools`, doi: :doi:`10.1093/nar/gkw257`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_heatmap`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_pca`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_profile`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_correlation`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_coverage`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_fingerprint`, usegalaxy-eu: :usegalaxy-eu:`deeptools_plot_enrichment`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bam_compare`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bam_pe_fragmentsize`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bigwig_compare`, usegalaxy-eu: :usegalaxy-eu:`deeptools_correct_gc_bias`, usegalaxy-eu: :usegalaxy-eu:`deeptools_multi_bam_summary`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_matrix`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_gc_bias`, usegalaxy-eu: :usegalaxy-eu:`deeptools_multi_bigwig_summary`, usegalaxy-eu: :usegalaxy-eu:`deeptools_compute_matrix_operations`, usegalaxy-eu: :usegalaxy-eu:`deeptools_alignmentsieve`, usegalaxy-eu: :usegalaxy-eu:`deeptools_estimatereadfiltering`, usegalaxy-eu: :usegalaxy-eu:`hicup_deduplicator`, usegalaxy-eu: :usegalaxy-eu:`deeptools_bigwig_average`

   


.. conda:package:: deeptools

   |downloads_deeptools| |docker_deeptools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.6-0</code>,  <code>3.5.5-0</code>,  <code>3.5.4-1</code>,  <code>3.5.3-0</code>,  <code>3.5.2-1</code>,  <code>3.5.2-0</code>,  <code>3.5.1-1</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  </span></summary>
      

      ``3.5.6-0``,  ``3.5.5-0``,  ``3.5.4-1``,  ``3.5.3-0``,  ``3.5.2-1``,  ``3.5.2-0``,  ``3.5.1-1``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.6-2``,  ``2.3.6-1``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.9.1-0``,  ``1.5.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deeptoolsintervals: ``>=0.1.8``
   :depends on importlib-metadata: 
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=2.0.0``
   :depends on numpydoc: ``>=0.5``
   :depends on plotly: ``>=4.9``
   :depends on py2bit: ``>=0.2.0``
   :depends on pybigwig: ``>=0.2.3``
   :depends on pysam: ``>=0.14.0``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=0.17.0``

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

    pixi global install deeptools

to add into an existing workspace instead, run::

    pixi add deeptools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deeptools

Alternatively, to install into a new environment, run::

    conda create -n envname deeptools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deeptools:<tag>

(see `deeptools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deeptools| image:: https://img.shields.io/conda/dn/bioconda/deeptools.svg?style=flat
   :target: https://anaconda.org/bioconda/deeptools
   :alt:   (downloads)
.. |docker_deeptools| image:: https://quay.io/repository/biocontainers/deeptools/status
   :target: https://quay.io/repository/biocontainers/deeptools
.. _`deeptools/tags`: https://quay.io/repository/biocontainers/deeptools?tab=tags


.. raw:: html

   <script>
      var package = "deeptools";
      var versions = ["3.5.6","3.5.5","3.5.4","3.5.3","3.5.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_deeptools"></div>
   <div style="width: 100%" id="platform_plot_deeptools"></div>
   <div style="width: 100%" id="cdf_plot_deeptools"></div>



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
         
            // Build cdf plot for deeptools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deeptools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_deeptools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for deeptools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deeptools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_deeptools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for deeptools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/deeptools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_deeptools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeptools/README.html