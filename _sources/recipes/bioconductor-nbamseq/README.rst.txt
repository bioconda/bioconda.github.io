:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nbamseq'
.. highlight: bash

bioconductor-nbamseq
====================

.. conda:recipe:: bioconductor-nbamseq
   :replaces_section_title:
   :noindex:

   Negative Binomial Additive Model for RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NBAMSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-nbamseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq/meta.yaml>`_

   High\-throughput sequencing experiments followed by differential expression analysis is a widely used approach to detect genomic biomarkers. A fundamental step in differential expression analysis is to model the association between gene counts and covariates of interest. NBAMSeq a flexible statistical model based on the generalized additive model and allows for information sharing across genes in variance estimation.


.. conda:package:: bioconductor-nbamseq

   |downloads_bioconductor-nbamseq| |docker_bioconductor-nbamseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mgcv: ``>=1.8-24``
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

      mamba install bioconductor-nbamseq

   and update with::

      mamba update bioconductor-nbamseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nbamseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nbamseq:<tag>

   (see `bioconductor-nbamseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nbamseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nbamseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nbamseq
   :alt:   (downloads)
.. |docker_bioconductor-nbamseq| image:: https://quay.io/repository/biocontainers/bioconductor-nbamseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nbamseq
.. _`bioconductor-nbamseq/tags`: https://quay.io/repository/biocontainers/bioconductor-nbamseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nbamseq";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html