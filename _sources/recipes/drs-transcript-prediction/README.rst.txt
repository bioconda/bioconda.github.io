:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'drs-transcript-prediction'
.. highlight: bash

drs-transcript-prediction
=========================

.. conda:recipe:: drs-transcript-prediction
   :replaces_section_title:
   :noindex:

   TP \(Transcript Prediction\)\: predict transcripts from candidate start\/stop sites in direct RNA sequencing reads.

   :homepage: https://github.com/Dunning-Hotopp-Lab/Direct_RNA_Sequencing
   :documentation: https://github.com/Dunning-Hotopp-Lab/Direct_RNA_Sequencing/blob/v1.0.4/README.md
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`drs-transcript-prediction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drs-transcript-prediction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drs-transcript-prediction/meta.yaml>`_

   TP predicts transcripts by finding candidate transcript start\/stop sites from
   changes in read depth across distinct regions of a position\-sorted BED file of
   direct RNA sequencing reads\, then filters alternative transcripts that could use
   various start\/stop combinations. Outputs candidate and predicted transcripts in
   BED format\, and predicted transcripts in GFF3 format.



.. conda:package:: drs-transcript-prediction

   |downloads_drs-transcript-prediction| |docker_drs-transcript-prediction|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.9``

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

    pixi global install drs-transcript-prediction

to add into an existing workspace instead, run::

    pixi add drs-transcript-prediction

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drs-transcript-prediction

Alternatively, to install into a new environment, run::

    conda create -n envname drs-transcript-prediction

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drs-transcript-prediction:<tag>

(see `drs-transcript-prediction/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drs-transcript-prediction| image:: https://img.shields.io/conda/dn/bioconda/drs-transcript-prediction.svg?style=flat
   :target: https://anaconda.org/bioconda/drs-transcript-prediction
   :alt:   (downloads)
.. |docker_drs-transcript-prediction| image:: https://quay.io/repository/biocontainers/drs-transcript-prediction/status
   :target: https://quay.io/repository/biocontainers/drs-transcript-prediction
.. _`drs-transcript-prediction/tags`: https://quay.io/repository/biocontainers/drs-transcript-prediction?tab=tags


.. raw:: html

   <script>
      var package = "drs-transcript-prediction";
      var versions = ["1.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_drs-transcript-prediction"></div>
   <div style="width: 100%" id="platform_plot_drs-transcript-prediction"></div>
   <div style="width: 100%" id="cdf_plot_drs-transcript-prediction"></div>



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
         
            // Build cdf plot for drs-transcript-prediction
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/drs-transcript-prediction/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_drs-transcript-prediction', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for drs-transcript-prediction
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/drs-transcript-prediction/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_drs-transcript-prediction', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for drs-transcript-prediction
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/drs-transcript-prediction/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_drs-transcript-prediction', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drs-transcript-prediction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drs-transcript-prediction/README.html