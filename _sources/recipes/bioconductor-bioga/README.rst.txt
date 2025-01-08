:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioga'
.. highlight: bash

bioconductor-bioga
==================

.. conda:recipe:: bioconductor-bioga
   :replaces_section_title:
   :noindex:

   Bioinformatics Genetic Algorithm \(BioGA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioGA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bioga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioga/meta.yaml>`_

   Genetic algorithm are a class of optimization algorithms inspired by the process of natural selection and genetics. This package allows users to analyze and optimize high throughput genomic data using genetic algorithms.  The functions provided are implemented in C\+\+ for improved speed and efficiency\, with an easy\-to\-use interface for use within R.


.. conda:package:: bioconductor-bioga

   |downloads_bioconductor-bioga| |docker_bioconductor-bioga|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-biocviews: ``>=1.74.0,<1.75.0``
   :depends bioconductor-biocviews: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-animation: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-sessioninfo: 
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

      mamba install bioconductor-bioga

   and update with::

      mamba update bioconductor-bioga

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bioga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioga:<tag>

   (see `bioconductor-bioga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioga
   :alt:   (downloads)
.. |docker_bioconductor-bioga| image:: https://quay.io/repository/biocontainers/bioconductor-bioga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioga
.. _`bioconductor-bioga/tags`: https://quay.io/repository/biocontainers/bioconductor-bioga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioga";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioga/README.html