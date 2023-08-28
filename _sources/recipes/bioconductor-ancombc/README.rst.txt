:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ancombc'
.. highlight: bash

bioconductor-ancombc
====================

.. conda:recipe:: bioconductor-ancombc
   :replaces_section_title:
   :noindex:

   Microbiome differential abudance and correlation analyses with bias correction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ANCOMBC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ancombc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ancombc/meta.yaml>`_

   ANCOMBC is a package containing differential abundance \(DA\) and correlation analyses for microbiome data. Specifically\, the package includes Analysis of Compositions of Microbiomes with Bias Correction 2 \(ANCOM\-BC2\)\, Analysis of Compositions of Microbiomes with Bias Correction \(ANCOM\-BC\)\, and Analysis of Composition of Microbiomes \(ANCOM\) for DA analysis\, and Sparse Estimation of Correlations among Microbiomes \(SECOM\) for correlation analysis. Microbiome data are typically subject to two sources of biases\: unequal sampling fractions \(sample\-specific biases\) and differential sequencing efficiencies \(taxon\-specific biases\). Methodologies included in the ANCOMBC package are designed to correct these biases and construct statistically consistent estimators.


.. conda:package:: bioconductor-ancombc

   |downloads_bioconductor-ancombc| |docker_bioconductor-ancombc|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.0-2``

      

   
   :depends bioconductor-mia: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cvxr: 
   :depends r-desctools: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-dplyr: 
   :depends r-emmeans: 
   :depends r-energy: 
   :depends r-foreach: 
   :depends r-hmisc: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-nloptr: 
   :depends r-rdpack: 
   :depends r-rlang: 
   :depends r-rngtools: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ancombc

   and update with::

      mamba update bioconductor-ancombc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ancombc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ancombc:<tag>

   (see `bioconductor-ancombc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ancombc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ancombc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ancombc
   :alt:   (downloads)
.. |docker_bioconductor-ancombc| image:: https://quay.io/repository/biocontainers/bioconductor-ancombc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ancombc
.. _`bioconductor-ancombc/tags`: https://quay.io/repository/biocontainers/bioconductor-ancombc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ancombc";
        var versions = ["2.2.0","2.0.1","1.4.0","1.2.0","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ancombc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ancombc/README.html