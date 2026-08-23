:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pam_scanning'
.. highlight: bash

pam_scanning
============

.. conda:recipe:: pam_scanning
   :replaces_section_title:
   :noindex:

   Design CRISPR guides and primers for ORF\-wide chimera \(PAM\) scanning.

   :homepage: https://github.com/isomlab/pam_scanning
   :documentation: https://github.com/isomlab/pam_scanning/blob/main/docs/pipeline.md
   
   :license: MIT / MIT
   :recipe: /`pam_scanning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pam_scanning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pam_scanning/meta.yaml>`_

   pam\_scanning designs CRISPR guides and cloning primers for ORF\-wide chimera
   \(PAM\) scanning. Given an open reading frame and its flanking sequence\, it
   locates PAM sites\, silences them where required\, evaluates guide specificity
   by BLAST against a reference genome\, selects optimal guides per insertion
   site\, and emits primer orders\, plate layouts\, and QC reports. A graphical
   interface and a UniProt\-to\-CDS fetcher are included.



.. conda:package:: pam_scanning

   |downloads_pam_scanning| |docker_pam_scanning|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on blast: 
   :depends on matplotlib-base: ``>=3.4``
   :depends on openpyxl: 
   :depends on python: ``>=3.8``

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

    pixi global install pam_scanning

to add into an existing workspace instead, run::

    pixi add pam_scanning

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pam_scanning

Alternatively, to install into a new environment, run::

    conda create -n envname pam_scanning

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pam_scanning:<tag>

(see `pam_scanning/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pam_scanning| image:: https://img.shields.io/conda/dn/bioconda/pam_scanning.svg?style=flat
   :target: https://anaconda.org/bioconda/pam_scanning
   :alt:   (downloads)
.. |docker_pam_scanning| image:: https://quay.io/repository/biocontainers/pam_scanning/status
   :target: https://quay.io/repository/biocontainers/pam_scanning
.. _`pam_scanning/tags`: https://quay.io/repository/biocontainers/pam_scanning?tab=tags


.. raw:: html

   <script>
      var package = "pam_scanning";
      var versions = ["1.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pam_scanning"></div>
   <div style="width: 100%" id="platform_plot_pam_scanning"></div>
   <div style="width: 100%" id="cdf_plot_pam_scanning"></div>



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
         
            // Build cdf plot for pam_scanning
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pam_scanning/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pam_scanning', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pam_scanning
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pam_scanning/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pam_scanning', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pam_scanning
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pam_scanning/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pam_scanning', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pam_scanning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pam_scanning/README.html