:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basicstan'
.. highlight: bash

bioconductor-basicstan
======================

.. conda:recipe:: bioconductor-basicstan
   :replaces_section_title:
   :noindex:

   Stan implementation of BASiCS

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BASiCStan.html
   :license: GPL-3
   :recipe: /`bioconductor-basicstan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstan/meta.yaml>`_

   Provides an interface to infer the parameters of BASiCS using the variational inference \(ADVI\)\, Markov chain Monte Carlo \(NUTS\)\, and maximum a posteriori \(BFGS\) inference engines in the Stan programming language. BASiCS is a Bayesian hierarchical model that uses an adaptive Metropolis within Gibbs sampling scheme. Alternative inference methods provided by Stan may be preferable in some situations\, for example for particularly large data or posterior distributions with difficult geometries.


.. conda:package:: bioconductor-basicstan

   |downloads_bioconductor-basicstan| |docker_bioconductor-basicstan|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-basics: ``>=2.14.0,<2.15.0``
   :depends bioconductor-basics: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-glmgampoi: ``>=1.14.0,<1.15.0``
   :depends bioconductor-glmgampoi: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.1.1``
   :depends r-stanheaders: ``>=2.18.0``
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

      mamba install bioconductor-basicstan

   and update with::

      mamba update bioconductor-basicstan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-basicstan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basicstan:<tag>

   (see `bioconductor-basicstan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basicstan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basicstan
   :alt:   (downloads)
.. |docker_bioconductor-basicstan| image:: https://quay.io/repository/biocontainers/bioconductor-basicstan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstan
.. _`bioconductor-basicstan/tags`: https://quay.io/repository/biocontainers/bioconductor-basicstan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basicstan";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstan/README.html