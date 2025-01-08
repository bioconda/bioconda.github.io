:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multirnaflow'
.. highlight: bash

bioconductor-multirnaflow
=========================

.. conda:recipe:: bioconductor-multirnaflow
   :replaces_section_title:
   :noindex:

   An R package for integrated analysis of temporal RNA\-seq data with multiple biological conditions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MultiRNAflow.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-multirnaflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multirnaflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multirnaflow/meta.yaml>`_

   Our R package MultiRNAflow provides an easy to use unified framework allowing to automatically make both unsupervised and supervised \(DE\) analysis for datasets with an arbitrary number of biological conditions and time points.  In particular\, our code makes a deep downstream analysis of DE information\, e.g. identifying temporal patterns across biological conditions and DE genes which are specific to a biological condition for each time.


.. conda:package:: bioconductor-multirnaflow

   |downloads_bioconductor-multirnaflow| |docker_bioconductor-multirnaflow|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-mfuzz: ``>=2.66.0,<2.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-factoextra: ``>=1.0.7``
   :depends r-factominer: ``>=2.6``
   :depends r-ggalluvial: ``>=0.12.3``
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-ggplotify: ``>=0.1.2``
   :depends r-ggrepel: ``>=0.9.2``
   :depends r-gprofiler2: ``>=0.2.1``
   :depends r-plot3d: ``>=1.4``
   :depends r-plot3drgl: ``>=1.0.3``
   :depends r-reshape2: ``>=1.4.4``
   :depends r-upsetr: ``>=1.4.0``
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

      mamba install bioconductor-multirnaflow

   and update with::

      mamba update bioconductor-multirnaflow

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multirnaflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multirnaflow:<tag>

   (see `bioconductor-multirnaflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multirnaflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multirnaflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multirnaflow
   :alt:   (downloads)
.. |docker_bioconductor-multirnaflow| image:: https://quay.io/repository/biocontainers/bioconductor-multirnaflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multirnaflow
.. _`bioconductor-multirnaflow/tags`: https://quay.io/repository/biocontainers/bioconductor-multirnaflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multirnaflow";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multirnaflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multirnaflow/README.html