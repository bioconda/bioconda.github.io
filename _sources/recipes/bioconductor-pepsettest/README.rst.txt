:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepsettest'
.. highlight: bash

bioconductor-pepsettest
=======================

.. conda:recipe:: bioconductor-pepsettest
   :replaces_section_title:
   :noindex:

   Peptide Set Test

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PepSetTest.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pepsettest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsettest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsettest/meta.yaml>`_

   Peptide Set Test \(PepSetTest\) is a peptide\-centric strategy to infer differentially expressed proteins in LC\-MS\/MS proteomics data. This test detects coordinated changes in the expression of peptides originating from the same protein and compares these changes against the rest of the peptidome. Compared to traditional aggregation\-based approaches\, the peptide set test demonstrates improved statistical power\, yet controlling the Type I error rate correctly in most cases. This test can be valuable for discovering novel biomarkers and prioritizing drug targets\, especially when the direct application of statistical analysis to protein data fails to provide substantial insights.


.. conda:package:: bioconductor-pepsettest

   |downloads_bioconductor-pepsettest| |docker_bioconductor-pepsettest|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-lme4: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
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

      mamba install bioconductor-pepsettest

   and update with::

      mamba update bioconductor-pepsettest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pepsettest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepsettest:<tag>

   (see `bioconductor-pepsettest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepsettest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsettest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepsettest
   :alt:   (downloads)
.. |docker_bioconductor-pepsettest| image:: https://quay.io/repository/biocontainers/bioconductor-pepsettest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsettest
.. _`bioconductor-pepsettest/tags`: https://quay.io/repository/biocontainers/bioconductor-pepsettest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pepsettest";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsettest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsettest/README.html