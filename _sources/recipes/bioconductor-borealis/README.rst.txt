:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-borealis'
.. highlight: bash

bioconductor-borealis
=====================

.. conda:recipe:: bioconductor-borealis
   :replaces_section_title:
   :noindex:

   Bisulfite\-seq OutlieR mEthylation At singLe\-sIte reSolution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/borealis.html
   :license: GPL-3
   :recipe: /`bioconductor-borealis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis/meta.yaml>`_

   Borealis is an R library performing outlier analysis for count\-based bisulfite sequencing data. It detectes outlier methylated CpG sites from bisulfite sequencing \(BS\-seq\). The core of Borealis is modeling Beta\-Binomial distributions. This can be useful for rare disease diagnoses.


.. conda:package:: bioconductor-borealis

   |downloads_bioconductor-borealis| |docker_bioconductor-borealis|

   :versions:
      
      

      ``1.10.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-dss: ``>=2.54.0,<2.55.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-gamlss: 
   :depends r-gamlss.dist: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rlang: 
   :depends r-snow: 
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

      mamba install bioconductor-borealis

   and update with::

      mamba update bioconductor-borealis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-borealis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-borealis:<tag>

   (see `bioconductor-borealis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-borealis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-borealis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-borealis
   :alt:   (downloads)
.. |docker_bioconductor-borealis| image:: https://quay.io/repository/biocontainers/bioconductor-borealis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-borealis
.. _`bioconductor-borealis/tags`: https://quay.io/repository/biocontainers/bioconductor-borealis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-borealis";
        var versions = ["1.10.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-borealis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-borealis/README.html