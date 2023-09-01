:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moanin'
.. highlight: bash

bioconductor-moanin
===================

.. conda:recipe:: bioconductor-moanin
   :replaces_section_title:
   :noindex:

   An R Package for Time Course RNASeq Data Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/moanin.html
   :license: BSD 3-clause License + file LICENSE
   :recipe: /`bioconductor-moanin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moanin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moanin/meta.yaml>`_

   Simple and efficient workflow for time\-course gene expression data\, built on publictly available open\-source projects hosted on CRAN and bioconductor. moanin provides helper functions for all the steps required for analysing time\-course data using functional data analysis\: \(1\) functional modeling of the timecourse data\; \(2\) differential expression analysis\; \(3\) clustering\; \(4\) downstream analysis.


.. conda:package:: bioconductor-moanin

   |downloads_bioconductor-moanin| |docker_bioconductor-moanin|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clusterr: 
   :depends r-mass: ``>=1.0.0``
   :depends r-matrixstats: 
   :depends r-nmi: 
   :depends r-reshape2: 
   :depends r-viridis: 
   :depends r-zoo: 
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

      mamba install bioconductor-moanin

   and update with::

      mamba update bioconductor-moanin

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moanin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moanin:<tag>

   (see `bioconductor-moanin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moanin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moanin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moanin
   :alt:   (downloads)
.. |docker_bioconductor-moanin| image:: https://quay.io/repository/biocontainers/bioconductor-moanin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moanin
.. _`bioconductor-moanin/tags`: https://quay.io/repository/biocontainers/bioconductor-moanin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moanin";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moanin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moanin/README.html