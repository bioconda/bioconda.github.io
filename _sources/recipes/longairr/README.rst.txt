:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longairr'
.. highlight: bash

longairr
========

.. conda:recipe:: longairr
   :replaces_section_title:
   :noindex:

   Long\-read adaptive immune receptor repertoire processing and annotation

   :homepage: https://github.com/AGImkeller/LongAIRR
   :documentation: https://longairr.readthedocs.io/en/latest/
   
   :license: Apache-2.0 AND AGPL-3.0-only
   :recipe: /`longairr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longairr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longairr/meta.yaml>`_

   LongAIRR is a modular command\-line framework for processing and annotating
   full\-length adaptive immune receptor repertoire sequences from long\-read
   bulk and spatial transcriptomics libraries. It supports Oxford Nanopore
   Technologies and PacBio HiFi data and produces AIRR\-compliant output.



.. conda:package:: longairr

   |downloads_longairr| |docker_longairr|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on airr: ``1.5.1.*``
   :depends on bash: 
   :depends on biopython: ``1.83.*``
   :depends on blast: ``2.16.0.*``
   :depends on changeo: ``1.3.3.*``
   :depends on coreutils: 
   :depends on curl: 
   :depends on gawk: 
   :depends on grep: 
   :depends on igblast: ``1.22.0.*``
   :depends on muscle: ``3.8.1551.*``
   :depends on nanoget: ``1.19.3.*``
   :depends on nanoplot: ``1.44.1.*``
   :depends on numpy: ``1.24.4.*``
   :depends on pandas: ``2.0.3.*``
   :depends on presto: ``0.7.5.*``
   :depends on pyarrow: ``17.0.0.*``
   :depends on pysam: ``0.22.*``
   :depends on python: ``3.10.0.*``
   :depends on pyyaml: ``6.0.2.*``
   :depends on samtools: ``1.21.*``
   :depends on scipy: ``1.10.1.*``
   :depends on sed: 
   :depends on seqkit: ``2.9.0.*``
   :depends on snakemake: ``7.32.4.*``
   :depends on tar: 
   :depends on vsearch: ``2.30.0.*``
   :depends on wget: 

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

    pixi global install longairr

to add into an existing workspace instead, run::

    pixi add longairr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longairr

Alternatively, to install into a new environment, run::

    conda create -n envname longairr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longairr:<tag>

(see `longairr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longairr| image:: https://img.shields.io/conda/dn/bioconda/longairr.svg?style=flat
   :target: https://anaconda.org/bioconda/longairr
   :alt:   (downloads)
.. |docker_longairr| image:: https://quay.io/repository/biocontainers/longairr/status
   :target: https://quay.io/repository/biocontainers/longairr
.. _`longairr/tags`: https://quay.io/repository/biocontainers/longairr?tab=tags


.. raw:: html

   <script>
      var package = "longairr";
      var versions = ["1.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_longairr"></div>
   <div style="width: 100%" id="platform_plot_longairr"></div>
   <div style="width: 100%" id="cdf_plot_longairr"></div>



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
         
            // Build cdf plot for longairr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/longairr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_longairr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for longairr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/longairr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_longairr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for longairr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/longairr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_longairr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
Set up IgBLAST and IMGT references after installation with\, for example\:

  longairr\-setup \-\-fetch\-db TRUE \-\-save\-db \/path\/to\/references\/ \-\-species human

Dorado is required only for \`longairr basecall\` and may be installed with\:

  longairr\-setup \-\-dorado TRUE

Copy the bundled example workflows into a writable working directory with\:

  cp \-r \"\$CONDA\_PREFIX\/share\/longairr\/longairr\_example\_workflow\" .\/longairr\_example\_workflow

Documentation\: https\:\/\/longairr.readthedocs.io\/en\/latest\/



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longairr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longairr/README.html