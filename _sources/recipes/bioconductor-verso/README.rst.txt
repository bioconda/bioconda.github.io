:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-verso'
.. highlight: bash

bioconductor-verso
==================

.. conda:recipe:: bioconductor-verso
   :replaces_section_title:
   :noindex:

   Viral Evolution ReconStructiOn \(VERSO\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/VERSO.html
   :license: file LICENSE
   :recipe: /`bioconductor-verso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-verso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-verso/meta.yaml>`_

   Mutations that rapidly accumulate in viral genomes during a pandemic can be used to track the evolution of the virus and\, accordingly\, unravel the viral infection network. To this extent\, sequencing samples of the virus can be employed to estimate models from genomic epidemiology and may serve\, for instance\, to estimate the proportion of undetected infected people by uncovering cryptic transmissions\, as well as to predict likely trends in the number of infected\, hospitalized\, dead and recovered people. VERSO is an algorithmic framework that processes variants profiles from viral samples to produce phylogenetic models of viral evolution. The approach solves a Boolean Matrix Factorization problem with phylogenetic constraints\, by maximizing a log\-likelihood function. VERSO includes two separate and subsequent steps\; in this package we provide an R implementation of VERSO STEP 1.


.. conda:package:: bioconductor-verso

   |downloads_bioconductor-verso| |docker_bioconductor-verso|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.tree: 
   :depends r-rfast: 
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

      mamba install bioconductor-verso

   and update with::

      mamba update bioconductor-verso

  To create a new environment, run::

      mamba create --name myenvname bioconductor-verso

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-verso:<tag>

   (see `bioconductor-verso/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-verso| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-verso.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-verso
   :alt:   (downloads)
.. |docker_bioconductor-verso| image:: https://quay.io/repository/biocontainers/bioconductor-verso/status
   :target: https://quay.io/repository/biocontainers/bioconductor-verso
.. _`bioconductor-verso/tags`: https://quay.io/repository/biocontainers/bioconductor-verso?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-verso";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-verso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-verso/README.html