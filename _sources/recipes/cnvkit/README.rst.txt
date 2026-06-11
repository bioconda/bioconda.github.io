:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvkit'
.. highlight: bash

cnvkit
======

.. conda:recipe:: cnvkit
   :replaces_section_title:
   :noindex:

   Copy number variant detection from high\-throughput sequencing.

   :homepage: https://github.com/etal/cnvkit
   :documentation: https://cnvkit.readthedocs.io/en/stable
   
   :license: APACHE / Apache-2.0
   :recipe: /`cnvkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit/meta.yaml>`_
   :links: biotools: :biotools:`cnvkit`, doi: :doi:`10.1371/journal.pcbi.1004873`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_access`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_antitarget`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_autobin`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_batch`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_call`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_coverage`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_diagram`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_fix`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_heatmap`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_reference`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_scatter`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_segment`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_target`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_breaks`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_genemetrics`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_segmetrics`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_sex`

   


.. conda:package:: cnvkit

   |downloads_cnvkit| |docker_cnvkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.13-0</code>,  <code>0.9.12-1</code>,  <code>0.9.12-0</code>,  <code>0.9.11-0</code>,  <code>0.9.10-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-0</code>,  <code>0.9.7-1</code>,  <code>0.9.7-0</code>,  </span></summary>
      

      ``0.9.13-0``,  ``0.9.12-1``,  ``0.9.12-0``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-1``,  ``0.9.7-0``,  ``0.9.6-2``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.6a0-2``,  ``0.9.6a0-1``,  ``0.9.6a0-0``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4a0-0``,  ``0.9.3-2``,  ``0.9.2-2``,  ``0.9.2a0-2``,  ``0.9.2a0-1``,  ``0.9.2a0-0``,  ``0.9.1-0``,  ``0.9.1a0-0``,  ``0.9.0-0``,  ``0.8.6a0-2``,  ``0.8.6a0-1``,  ``0.8.6a0-0``,  ``0.8.5-0``,  ``0.8.5dev0-1``,  ``0.8.5dev0-0``,  ``0.8.4-0``,  ``0.8.3a0-1``,  ``0.8.3a0-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dnacopy: 
   :depends on biopython: ``>=1.80``
   :depends on matplotlib-base: ``>=3.5.2``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.24.2``
   :depends on pandas: ``>=1.5.3``
   :depends on pomegranate: ``>=0.14.8,<=0.14.9``
   :depends on pyfaidx: ``>=0.7.1``
   :depends on pysam: ``>=0.20.0``
   :depends on python: ``>=3.8``
   :depends on r-base: ``>=3.4.1``
   :depends on r-cghflasso: 
   :depends on reportlab: ``>=3.6.12``
   :depends on scikit-learn: ``>=1.1.0``
   :depends on scipy: ``>=1.10.1``

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

    pixi global install cnvkit

to add into an existing workspace instead, run::

    pixi add cnvkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnvkit

Alternatively, to install into a new environment, run::

    conda create -n envname cnvkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnvkit:<tag>

(see `cnvkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnvkit| image:: https://img.shields.io/conda/dn/bioconda/cnvkit.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvkit
   :alt:   (downloads)
.. |docker_cnvkit| image:: https://quay.io/repository/biocontainers/cnvkit/status
   :target: https://quay.io/repository/biocontainers/cnvkit
.. _`cnvkit/tags`: https://quay.io/repository/biocontainers/cnvkit?tab=tags


.. raw:: html

   <script>
      var package = "cnvkit";
      var versions = ["0.9.13","0.9.12","0.9.12","0.9.11","0.9.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cnvkit"></div>
   <div style="width: 100%" id="platform_plot_cnvkit"></div>
   <div style="width: 100%" id="cdf_plot_cnvkit"></div>



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
         
            // Build cdf plot for cnvkit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvkit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cnvkit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cnvkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvkit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cnvkit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cnvkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cnvkit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cnvkit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvkit/README.html