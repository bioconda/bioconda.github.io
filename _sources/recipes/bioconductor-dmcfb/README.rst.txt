:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmcfb'
.. highlight: bash

bioconductor-dmcfb
==================

.. conda:recipe:: bioconductor-dmcfb
   :replaces_section_title:
   :noindex:

   Differentially Methylated Cytosines via a Bayesian Functional Approach

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DMCFB.html
   :license: GPL-3
   :recipe: /`bioconductor-dmcfb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb/meta.yaml>`_

   DMCFB is a pipeline for identifying differentially methylated cytosines using a Bayesian functional regression model in bisulfite sequencing data. By using a functional regression data model\, it tries to capture position\-specific\, group\-specific and other covariates\-specific methylation patterns as well as spatial correlation patterns and unknown underlying models of methylation data. It is robust and flexible with respect to the true underlying models and inclusion of any covariates\, and the missing values are imputed using spatial correlation between positions and samples. A Bayesian approach is adopted for estimation and inference in the proposed method.


.. conda:package:: bioconductor-dmcfb

   |downloads_bioconductor-dmcfb| |docker_bioconductor-dmcfb|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-arm: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-benchmarkme: 
   :depends r-data.table: 
   :depends r-fastdummies: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-speedglm: 
   :depends r-tibble: 
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

      mamba install bioconductor-dmcfb

   and update with::

      mamba update bioconductor-dmcfb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmcfb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmcfb:<tag>

   (see `bioconductor-dmcfb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmcfb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmcfb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmcfb
   :alt:   (downloads)
.. |docker_bioconductor-dmcfb| image:: https://quay.io/repository/biocontainers/bioconductor-dmcfb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmcfb
.. _`bioconductor-dmcfb/tags`: https://quay.io/repository/biocontainers/bioconductor-dmcfb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmcfb";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html