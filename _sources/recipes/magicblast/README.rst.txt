:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magicblast'
.. highlight: bash

magicblast
==========

.. conda:recipe:: magicblast
   :replaces_section_title:
   :noindex:

   NCBI BLAST next generation read mapper

   :homepage: https://ncbi.github.io/magicblast/
   :license: Public Domain
   :recipe: /`magicblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicblast/meta.yaml>`_
   :links: biotools: :biotools:`magicblast`, doi: :doi:`10.1186/s12859-019-2996-x`

   Magic\-BLAST is a tool for mapping large next\-generation RNA or DNA 
   sequencing runs against a whole genome or transcriptome. Each alignment
   optimizes a composite score\, taking into account simultaneously the two
   reads of a pair\, and in case of RNA\-seq\, locating the candidate introns
   and adding up the score of all exons. This is very different from other
   versions of BLAST\, where each exon is scored as a separate hit and
   read\-pairing is ignored.

   Magic\-BLAST incorporates within the NCBI BLAST code framework ideas 
   developed in the NCBI Magic pipeline\, in particular hit extensions by local 
   walk and jump \(http\:\/\/www.ncbi.nlm.nih.gov\/pubmed\/26109056\)\, and 
   recursive clipping of mismatches near the edges of the reads\, which avoids
   accumulating artefactual mismatches near splice sites and is needed to
   distinguish short indels from substitutions near the edges.

   More details about the algorithm and comparison with other similar tools
   are presented here\:
   https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-019\-2996\-x.



.. conda:package:: magicblast

   |downloads_magicblast| |docker_magicblast|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libxml2: ``>=2.9.14,<2.10.0a0``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on zlib: ``>=1.2.13,<1.3.0a0``

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

    pixi global install magicblast

to add into an existing workspace instead, run::

    pixi add magicblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magicblast

Alternatively, to install into a new environment, run::

    conda create -n envname magicblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magicblast:<tag>

(see `magicblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magicblast| image:: https://img.shields.io/conda/dn/bioconda/magicblast.svg?style=flat
   :target: https://anaconda.org/bioconda/magicblast
   :alt:   (downloads)
.. |docker_magicblast| image:: https://quay.io/repository/biocontainers/magicblast/status
   :target: https://quay.io/repository/biocontainers/magicblast
.. _`magicblast/tags`: https://quay.io/repository/biocontainers/magicblast?tab=tags


.. raw:: html

   <script>
      var package = "magicblast";
      var versions = ["1.7.0","1.6.0","1.6.0","1.5.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_magicblast"></div>
   <div style="width: 100%" id="platform_plot_magicblast"></div>
   <div style="width: 100%" id="cdf_plot_magicblast"></div>



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
         
            // Build cdf plot for magicblast
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicblast/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_magicblast', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for magicblast
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicblast/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_magicblast', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for magicblast
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicblast/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_magicblast', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magicblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magicblast/README.html