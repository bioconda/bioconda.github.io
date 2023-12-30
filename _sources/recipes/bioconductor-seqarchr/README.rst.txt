:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarchr'
.. highlight: bash

bioconductor-seqarchr
=====================

.. conda:recipe:: bioconductor-seqarchr
   :replaces_section_title:
   :noindex:

   Identify Different Architectures of Sequence Elements

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqArchR.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-seqarchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchr/meta.yaml>`_

   seqArchR enables unsupervised discovery of \_de novo\_ clusters with characteristic sequence architectures characterized by position\-specific motifs or composition of stretches of nucleotides\, e.g.\, CG\-richness. seqArchR does \_not\_ require any specifications w.r.t. the number of clusters\, the length of any individual motifs\, or the distance between motifs if and when they occur in pairs\/groups\; it directly detects them from the data. seqArchR uses non\-negative matrix factorization \(NMF\) as its backbone\, and employs a chunking\-based iterative procedure that enables processing of large sequence collections efficiently. Wrapper functions are provided for visualizing cluster architectures as sequence logos.


.. conda:package:: bioconductor-seqarchr

   |downloads_bioconductor-seqarchr| |docker_bioconductor-seqarchr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-cluster: 
   :depends r-cvtools: ``>=0.3.2``
   :depends r-fpc: 
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-ggseqlogo: ``>=0.1``
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-prettyunits: 
   :depends r-reshape2: ``>=1.4.3``
   :depends r-reticulate: ``>=1.22``
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

      mamba install bioconductor-seqarchr

   and update with::

      mamba update bioconductor-seqarchr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqarchr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarchr:<tag>

   (see `bioconductor-seqarchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarchr
   :alt:   (downloads)
.. |docker_bioconductor-seqarchr| image:: https://quay.io/repository/biocontainers/bioconductor-seqarchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarchr
.. _`bioconductor-seqarchr/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarchr";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarchr/README.html