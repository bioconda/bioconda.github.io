:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'crisprme'
.. highlight: bash

crisprme
========

.. conda:recipe:: crisprme
   :replaces_section_title:
   :noindex:

   CRISPRme\+\: variant\- and haplotype\-aware CRISPR off\-target assessment

   :homepage: https://github.com/pinellolab/crisprme-plus
   :documentation: https://github.com/pinellolab/crisprme-plus/blob/v2.8.0/README.md
   
   :license: OTHER / LicenseRef-MGBOA-1.0
   :recipe: /`crisprme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41588-022-01257-y`

   


.. conda:package:: crisprme

   |downloads_crisprme| |docker_crisprme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.7.9-0</code>,  <code>2.1.14-0</code>,  <code>2.1.13-0</code>,  <code>2.1.12-0</code>,  <code>2.1.11-0</code>,  <code>2.1.10-0</code>,  <code>2.1.9-0</code>,  <code>2.1.8-1</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.7.9-0``,  ``2.1.14-0``,  ``2.1.13-0``,  ``2.1.12-0``,  ``2.1.11-0``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-1``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.9.9-1``,  ``1.9.9-0``,  ``1.9.8-0``,  ``1.9.7-0``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-2``,  ``1.9.4-1``,  ``1.9.4-0``,  ``1.9.3-1``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.7-0``,  ``1.7.2-0``,  ``1.7.0-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.8-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on axel: 
   :depends on bcftools: 
   :depends on bedops: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on cachelib: ``0.17.0``
   :depends on crispritz: ``>=2.9.0``
   :depends on dash: ``>=2.14,<3``
   :depends on dash-bootstrap-components: ``<2``
   :depends on dash-daq: 
   :depends on flask: ``3.1.3``
   :depends on flask-caching: ``2.4.1``
   :depends on flask-compress: ``1.24``
   :depends on gdown: 
   :depends on gsl: 
   :depends on gunicorn: 
   :depends on htslib: 
   :depends on huggingface_hub: 
   :depends on ijson: 
   :depends on impg: ``0.5.0``
   :depends on importlib-metadata: 
   :depends on intervaltree: 
   :depends on matplotlib-base: ``>=3.8``
   :depends on minimap2: 
   :depends on more-itertools: 
   :depends on numpy: ``>=1.26,<2``
   :depends on pandas: ``>=2.1,<3``
   :depends on pysam: 
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on samtools: 
   :depends on scipy: ``>=1.11``
   :depends on statsmodels: 
   :depends on ucsc-liftover: 
   :depends on werkzeug: ``3.1.8``
   :depends on zip: 

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

    pixi global install crisprme

to add into an existing workspace instead, run::

    pixi add crisprme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crisprme

Alternatively, to install into a new environment, run::

    conda create -n envname crisprme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crisprme:<tag>

(see `crisprme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crisprme| image:: https://img.shields.io/conda/dn/bioconda/crisprme.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprme
   :alt:   (downloads)
.. |docker_crisprme| image:: https://quay.io/repository/biocontainers/crisprme/status
   :target: https://quay.io/repository/biocontainers/crisprme
.. _`crisprme/tags`: https://quay.io/repository/biocontainers/crisprme?tab=tags


.. raw:: html

   <script>
      var package = "crisprme";
      var versions = ["2.8.0","2.7.9","2.1.14","2.1.13","2.1.12"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_crisprme"></div>
   <div style="width: 100%" id="platform_plot_crisprme"></div>
   <div style="width: 100%" id="cdf_plot_crisprme"></div>



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
         
            // Build cdf plot for crisprme
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crisprme/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_crisprme', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for crisprme
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crisprme/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_crisprme', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for crisprme
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/crisprme/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_crisprme', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprme/README.html