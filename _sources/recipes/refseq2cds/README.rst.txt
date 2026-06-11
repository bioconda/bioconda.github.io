:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refseq2cds'
.. highlight: bash

refseq2cds
==========

.. conda:recipe:: refseq2cds
   :replaces_section_title:
   :noindex:

   Build RefSeq ortholog CDS FASTA\, alignments\, and coordinate matrices.

   :homepage: https://github.com/chulbioinfo/refseq2cds
   :license: MIT
   :recipe: /`refseq2cds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq2cds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refseq2cds/meta.yaml>`_

   refseq2cds builds assembly\-exact RefSeq ortholog CDS FASTA files from
   locked GCF annotation packages and NCBI Gene orthology edges. It supports
   strict N\-way singleton parsing\, reference\-gene present\-species queries\,
   human CDS\-to\-genome coordinate matrices\, MAFFT\+PAL2NAL codon alignments\,
   and target\-specific coding event BED outputs.



.. conda:package:: refseq2cds

   |downloads_refseq2cds| |docker_refseq2cds|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends on biopython: ``>=1.85``
   :depends on dendropy: ``>=5``
   :depends on jinja2: ``>=3``
   :depends on mafft: 
   :depends on ncbi-datasets-cli: 
   :depends on networkx: ``>=3``
   :depends on pal2nal: 
   :depends on pandas: ``>=2``
   :depends on pyarrow: ``>=15``
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

    pixi global install refseq2cds

to add into an existing workspace instead, run::

    pixi add refseq2cds

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install refseq2cds

Alternatively, to install into a new environment, run::

    conda create -n envname refseq2cds

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/refseq2cds:<tag>

(see `refseq2cds/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_refseq2cds| image:: https://img.shields.io/conda/dn/bioconda/refseq2cds.svg?style=flat
   :target: https://anaconda.org/bioconda/refseq2cds
   :alt:   (downloads)
.. |docker_refseq2cds| image:: https://quay.io/repository/biocontainers/refseq2cds/status
   :target: https://quay.io/repository/biocontainers/refseq2cds
.. _`refseq2cds/tags`: https://quay.io/repository/biocontainers/refseq2cds?tab=tags


.. raw:: html

   <script>
      var package = "refseq2cds";
      var versions = ["0.1.5","0.1.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_refseq2cds"></div>
   <div style="width: 100%" id="platform_plot_refseq2cds"></div>
   <div style="width: 100%" id="cdf_plot_refseq2cds"></div>



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
         
            // Build cdf plot for refseq2cds
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refseq2cds/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_refseq2cds', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for refseq2cds
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refseq2cds/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_refseq2cds', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for refseq2cds
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refseq2cds/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_refseq2cds', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refseq2cds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refseq2cds/README.html