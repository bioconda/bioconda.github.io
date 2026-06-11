:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clearcnv'
.. highlight: bash

clearcnv
========

.. conda:recipe:: clearcnv
   :replaces_section_title:
   :noindex:

   CNV calling package

   :homepage: https://github.com/bihealth/clear-cnv
   :license: MIT / MIT
   :recipe: /`clearcnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcnv/meta.yaml>`_

   


.. conda:package:: clearcnv

   |downloads_clearcnv| |docker_clearcnv|

   :versions:
      
      

      ``0.306-0``,  ``0.305-1``,  ``0.305-0``

      

   
   :depends on attrs: 
   :depends on bedops: 
   :depends on bedtools: 
   :depends on cattrs: 
   :depends on dash: ``1.21.0.*``
   :depends on dash-bootstrap-components: 
   :depends on dash-core-components: 
   :depends on dash-html-components: 
   :depends on dash-renderer: 
   :depends on dash-table: 
   :depends on fastcluster: 
   :depends on flask: 
   :depends on flask-caching: 
   :depends on hmmlearn: 
   :depends on logzero: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on snakemake-minimal: 
   :depends on tqdm: 
   :depends on werkzeug: ``2.0.0.*``

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

    pixi global install clearcnv

to add into an existing workspace instead, run::

    pixi add clearcnv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clearcnv

Alternatively, to install into a new environment, run::

    conda create -n envname clearcnv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clearcnv:<tag>

(see `clearcnv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clearcnv| image:: https://img.shields.io/conda/dn/bioconda/clearcnv.svg?style=flat
   :target: https://anaconda.org/bioconda/clearcnv
   :alt:   (downloads)
.. |docker_clearcnv| image:: https://quay.io/repository/biocontainers/clearcnv/status
   :target: https://quay.io/repository/biocontainers/clearcnv
.. _`clearcnv/tags`: https://quay.io/repository/biocontainers/clearcnv?tab=tags


.. raw:: html

   <script>
      var package = "clearcnv";
      var versions = ["0.306","0.305","0.305"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_clearcnv"></div>
   <div style="width: 100%" id="platform_plot_clearcnv"></div>
   <div style="width: 100%" id="cdf_plot_clearcnv"></div>



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
         
            // Build cdf plot for clearcnv
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/clearcnv/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_clearcnv', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for clearcnv
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/clearcnv/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_clearcnv', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for clearcnv
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/clearcnv/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_clearcnv', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clearcnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clearcnv/README.html