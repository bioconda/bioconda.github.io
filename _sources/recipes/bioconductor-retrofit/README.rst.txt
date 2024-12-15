:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-retrofit'
.. highlight: bash

bioconductor-retrofit
=====================

.. conda:recipe:: bioconductor-retrofit
   :replaces_section_title:
   :noindex:

   RETROFIT\: Reference\-free deconvolution of cell mixtures in spatial transcriptomics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/retrofit.html
   :license: GPL-3
   :recipe: /`bioconductor-retrofit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-retrofit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-retrofit/meta.yaml>`_

   RETROFIT is a Bayesian non\-negative matrix factorization framework to decompose cell type mixtures in ST data without using external single\-cell expression references. RETROFIT outperforms existing reference\-based methods in estimating cell type proportions and reconstructing gene expressions in simulations with varying spot size and sample heterogeneity\, irrespective of the quality or availability of the single\-cell reference. RETROFIT recapitulates known cell\-type localization patterns in a Slide\-seq dataset of mouse cerebellum without using any single\-cell data.


.. conda:package:: bioconductor-retrofit

   |downloads_bioconductor-retrofit| |docker_bioconductor-retrofit|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-retrofit

   and update with::

      mamba update bioconductor-retrofit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-retrofit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-retrofit:<tag>

   (see `bioconductor-retrofit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-retrofit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-retrofit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-retrofit
   :alt:   (downloads)
.. |docker_bioconductor-retrofit| image:: https://quay.io/repository/biocontainers/bioconductor-retrofit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-retrofit
.. _`bioconductor-retrofit/tags`: https://quay.io/repository/biocontainers/bioconductor-retrofit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-retrofit";
        var versions = ["1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-retrofit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-retrofit/README.html