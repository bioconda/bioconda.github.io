:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tloh'
.. highlight: bash

bioconductor-tloh
=================

.. conda:recipe:: bioconductor-tloh
   :replaces_section_title:
   :noindex:

   Assessment of evidence for LOH in spatial transcriptomics pre\-processed data using Bayes factor calculations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tLOH.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tloh/meta.yaml>`_

   tLOH\, or transcriptomicsLOH\, assesses evidence for loss of heterozygosity \(LOH\) in pre\-processed spatial transcriptomics data. This tool requires spatial transcriptomics cluster and allele count information at likely heterozygous single\-nucleotide polymorphism \(SNP\) positions in VCF format. Bayes factors are calculated at each SNP to determine likelihood of potential loss of heterozygosity event. Two plotting functions are included to visualize allele fraction and aggregated Bayes factor per chromosome. Data generated with the 10X Genomics Visium Spatial Gene Expression platform must be pre\-processed to obtain an individual sample VCF with columns for each cluster. Required fields are allele depth \(AD\) with counts for reference\/alternative alleles and read depth \(DP\).


.. conda:package:: bioconductor-tloh

   |downloads_bioconductor-tloh| |docker_bioconductor-tloh|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bestnormalize: 
   :depends r-data.table: 
   :depends r-depmixs4: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-naniar: 
   :depends r-purrr: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tloh

   and update with::

      mamba update bioconductor-tloh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tloh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tloh:<tag>

   (see `bioconductor-tloh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tloh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tloh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tloh
   :alt:   (downloads)
.. |docker_bioconductor-tloh| image:: https://quay.io/repository/biocontainers/bioconductor-tloh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tloh
.. _`bioconductor-tloh/tags`: https://quay.io/repository/biocontainers/bioconductor-tloh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tloh";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
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