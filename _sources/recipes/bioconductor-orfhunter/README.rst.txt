:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orfhunter'
.. highlight: bash

bioconductor-orfhunter
======================

.. conda:recipe:: bioconductor-orfhunter
   :replaces_section_title:
   :noindex:

   Predict open reading frames in nucleotide sequences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ORFhunteR.html
   :license: MIT License
   :recipe: /`bioconductor-orfhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfhunter/meta.yaml>`_

   The ORFhunteR package is a R and C\+\+ library for an automatic determination and annotation of open reading frames \(ORF\) in a large set of RNA molecules. It efficiently implements the machine learning model based on vectorization of nucleotide sequences and the random forest classification algorithm. The ORFhunteR package consists of a set of functions written in the R language in conjunction with C\+\+. The efficiency of the package was confirmed by the examples of the analysis of RNA molecules from the NCBI RefSeq and Ensembl databases. The package can be used in basic and applied biomedical research related to the study of the transcriptome of normal as well as altered \(for example\, cancer\) human cells.


.. conda:package:: bioconductor-orfhunter

   |downloads_bioconductor-orfhunter| |docker_bioconductor-orfhunter|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.5,<1.5.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-peptides: 
   :depends r-randomforest: 
   :depends r-rcpp: ``>=1.0.3``
   :depends r-stringr: 
   :depends r-xfun: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-orfhunter

   and update with::

      mamba update bioconductor-orfhunter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orfhunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orfhunter:<tag>

   (see `bioconductor-orfhunter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orfhunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orfhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orfhunter
   :alt:   (downloads)
.. |docker_bioconductor-orfhunter| image:: https://quay.io/repository/biocontainers/bioconductor-orfhunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orfhunter
.. _`bioconductor-orfhunter/tags`: https://quay.io/repository/biocontainers/bioconductor-orfhunter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orfhunter";
        var versions = ["1.10.0","1.8.0","1.6.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orfhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orfhunter/README.html