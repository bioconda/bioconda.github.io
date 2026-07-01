:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome-uploader'
.. highlight: bash

genome-uploader
===============

.. conda:recipe:: genome-uploader
   :replaces_section_title:
   :noindex:

   Python script to upload bins and MAGs in fasta format to ENA \(European Nucleotide Archive\).

   :homepage: https://github.com/EBI-Metagenomics/genome_uploader
   :license: APACHE / Apache-2.0
   :recipe: /`genome-uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome-uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome-uploader/meta.yaml>`_

   


.. conda:package:: genome-uploader

   |downloads_genome-uploader| |docker_genome-uploader|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.5.2-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.4-0``

      

   
   :depends on click: ``>=8.1.8,<9``
   :depends on ena-webin-cli: ``>=9.0.1``
   :depends on mgnify-pipelines-toolkit: ``>=1.4.22``
   :depends on numpy: ``1.26.0``
   :depends on pandas: ``>=2.0.2``
   :depends on python: ``>=3.9``
   :depends on python-dotenv: ``>=1.0``
   :depends on requests: ``>=2.26,<3``
   :depends on retry: ``>=0.9.2``

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

    pixi global install genome-uploader

to add into an existing workspace instead, run::

    pixi add genome-uploader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genome-uploader

Alternatively, to install into a new environment, run::

    conda create -n envname genome-uploader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genome-uploader:<tag>

(see `genome-uploader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genome-uploader| image:: https://img.shields.io/conda/dn/bioconda/genome-uploader.svg?style=flat
   :target: https://anaconda.org/bioconda/genome-uploader
   :alt:   (downloads)
.. |docker_genome-uploader| image:: https://quay.io/repository/biocontainers/genome-uploader/status
   :target: https://quay.io/repository/biocontainers/genome-uploader
.. _`genome-uploader/tags`: https://quay.io/repository/biocontainers/genome-uploader?tab=tags


.. raw:: html

   <script>
      var package = "genome-uploader";
      var versions = ["3.0.2","3.0.1","3.0.0","2.5.2","2.5.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_genome-uploader"></div>
   <div style="width: 100%" id="platform_plot_genome-uploader"></div>
   <div style="width: 100%" id="cdf_plot_genome-uploader"></div>



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
         
            // Build cdf plot for genome-uploader
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genome-uploader/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_genome-uploader', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for genome-uploader
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genome-uploader/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_genome-uploader', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for genome-uploader
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genome-uploader/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_genome-uploader', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome-uploader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome-uploader/README.html