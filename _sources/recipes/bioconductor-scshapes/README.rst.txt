:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scshapes'
.. highlight: bash

bioconductor-scshapes
=====================

.. conda:recipe:: bioconductor-scshapes
   :replaces_section_title:
   :noindex:

   A Statistical Framework for Modeling and Identifying Differential Distributions in Single\-cell RNA\-sequencing Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scShapes.html
   :license: GPL-3
   :recipe: /`bioconductor-scshapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scshapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scshapes/meta.yaml>`_

   We present a novel statistical framework for identifying differential distributions in single\-cell RNA\-sequencing \(scRNA\-seq\) data between treatment conditions by modeling gene expression read counts using generalized linear models \(GLMs\). We model each gene independently under each treatment condition using error distributions Poisson \(P\)\, Negative Binomial \(NB\)\, Zero\-inflated Poisson \(ZIP\) and Zero\-inflated Negative Binomial \(ZINB\) with log link function and model based normalization for differences in sequencing depth. Since all four distributions considered in our framework belong to the same family of distributions\, we first perform a Kolmogorov\-Smirnov \(KS\) test to select genes belonging to the family of ZINB distributions. Genes passing the KS test will be then modeled using GLMs. Model selection is done by calculating the Bayesian Information Criterion \(BIC\) and likelihood ratio test \(LRT\) statistic.


.. conda:package:: bioconductor-scshapes

   |downloads_bioconductor-scshapes| |docker_bioconductor-scshapes|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dgof: 
   :depends r-emdbook: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pscl: 
   :depends r-vgam: 
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

      mamba install bioconductor-scshapes

   and update with::

      mamba update bioconductor-scshapes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scshapes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scshapes:<tag>

   (see `bioconductor-scshapes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scshapes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scshapes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scshapes
   :alt:   (downloads)
.. |docker_bioconductor-scshapes| image:: https://quay.io/repository/biocontainers/bioconductor-scshapes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scshapes
.. _`bioconductor-scshapes/tags`: https://quay.io/repository/biocontainers/bioconductor-scshapes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scshapes";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scshapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scshapes/README.html