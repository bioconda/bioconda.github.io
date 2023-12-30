:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffutr'
.. highlight: bash

bioconductor-diffutr
====================

.. conda:recipe:: bioconductor-diffutr
   :replaces_section_title:
   :noindex:

   diffUTR\: Streamlining differential exon and 3\' UTR usage

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/diffUTR.html
   :license: GPL-3
   :recipe: /`bioconductor-diffutr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffutr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffutr/meta.yaml>`_

   The diffUTR package provides a uniform interface and plotting functions for limma\/edgeR\/DEXSeq \-powered differential bin\/exon usage. It includes in addition an improved version of the limma\:\:diffSplice method. Most importantly\, diffUTR further extends the application of these frameworks to differential UTR usage analysis using poly\-A site databases.


.. conda:package:: bioconductor-diffutr

   |downloads_bioconductor-diffutr| |docker_bioconductor-diffutr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-dexseq: ``>=1.48.0,<1.49.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rsubread: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-stringi: 
   :depends r-viridislite: 
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

      mamba install bioconductor-diffutr

   and update with::

      mamba update bioconductor-diffutr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diffutr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffutr:<tag>

   (see `bioconductor-diffutr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffutr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffutr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffutr
   :alt:   (downloads)
.. |docker_bioconductor-diffutr| image:: https://quay.io/repository/biocontainers/bioconductor-diffutr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffutr
.. _`bioconductor-diffutr/tags`: https://quay.io/repository/biocontainers/bioconductor-diffutr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffutr";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffutr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffutr/README.html