:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tloh'
.. highlight: bash

bioconductor-tloh
=================

.. conda:recipe:: bioconductor-tloh
   :replaces_section_title:
   :noindex:

   Assessment of evidence for LOH in spatial transcriptomics pre\-processed data using Bayes factor calculations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tLOH.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh/meta.yaml>`_

   tLOH\, or transcriptomicsLOH\, assesses evidence for loss of heterozygosity \(LOH\) in pre\-processed spatial transcriptomics data. This tool requires spatial transcriptomics cluster and allele count information at likely heterozygous single\-nucleotide polymorphism \(SNP\) positions in VCF format. Bayes factors are calculated at each SNP to determine likelihood of potential loss of heterozygosity event. Two plotting functions are included to visualize allele fraction and aggregated Bayes factor per chromosome. Data generated with the 10X Genomics Visium Spatial Gene Expression platform must be pre\-processed to obtain an individual sample VCF with columns for each cluster. Required fields are allele depth \(AD\) with counts for reference\/alternative alleles and read depth \(DP\).


.. conda:package:: bioconductor-tloh

   |downloads_bioconductor-tloh| |docker_bioconductor-tloh|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bestnormalize: 
   :depends on r-data.table: 
   :depends on r-depmixs4: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-naniar: 
   :depends on r-purrr: 
   :depends on r-scales: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-tloh

to add into an existing workspace instead, run::

    pixi add bioconductor-tloh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tloh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tloh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tloh:<tag>

(see `bioconductor-tloh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tloh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tloh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tloh
   :alt:   (downloads)
.. |docker_bioconductor-tloh| image:: https://quay.io/repository/biocontainers/bioconductor-tloh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tloh
.. _`bioconductor-tloh/tags`: https://quay.io/repository/biocontainers/bioconductor-tloh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tloh";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tloh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tloh/README.html