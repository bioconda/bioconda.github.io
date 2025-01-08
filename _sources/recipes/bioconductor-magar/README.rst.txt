:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magar'
.. highlight: bash

bioconductor-magar
==================

.. conda:recipe:: bioconductor-magar
   :replaces_section_title:
   :noindex:

   MAGAR\: R\-package to compute methylation Quantitative Trait Loci \(methQTL\) from DNA methylation and genotyping data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAGAR.html
   :license: GPL-3
   :recipe: /`bioconductor-magar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magar/meta.yaml>`_

   \"Methylation\-Aware Genotype Association in R\" \(MAGAR\) computes methQTL from DNA methylation and genotyping data from matched samples. MAGAR uses a linear modeling stragety to call CpGs\/SNPs that are methQTLs. MAGAR accounts for the local correlation structure of CpGs.


.. conda:package:: bioconductor-magar

   |downloads_bioconductor-magar| |docker_bioconductor-magar|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-crlmm: ``>=1.64.0,<1.65.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rnbeads: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rnbeads.hg19: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rnbeads.hg38: ``>=1.38.0,<1.39.0``
   :depends bioconductor-snpstats: ``>=1.56.0,<1.57.0``
   :depends r-argparse: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bigstatsr: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-ff: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :depends r-upsetr: 
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

      mamba install bioconductor-magar

   and update with::

      mamba update bioconductor-magar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-magar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-magar:<tag>

   (see `bioconductor-magar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-magar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magar
   :alt:   (downloads)
.. |docker_bioconductor-magar| image:: https://quay.io/repository/biocontainers/bioconductor-magar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magar
.. _`bioconductor-magar/tags`: https://quay.io/repository/biocontainers/bioconductor-magar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magar";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magar/README.html