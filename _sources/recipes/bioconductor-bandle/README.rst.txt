:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bandle'
.. highlight: bash

bioconductor-bandle
===================

.. conda:recipe:: bioconductor-bandle
   :replaces_section_title:
   :noindex:

   An R package for the Bayesian analysis of differential subcellular localisation experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bandle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bandle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandle/meta.yaml>`_

   The Bandle package enables the analysis and visualisation of differential localisation experiments using mass\-spectrometry data. Experimental methods supported include dynamic LOPIT\-DC\, hyperLOPIT\, Dynamic Organellar Maps\, Dynamic PCP. It provides Bioconductor infrastructure to analyse these data.


.. conda:package:: bioconductor-bandle

   |downloads_bioconductor-bandle| |docker_bioconductor-bandle|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-msnbase: ``>=2.26.0,<2.27.0``
   :depends bioconductor-proloc: ``>=1.40.0,<1.41.0``
   :depends bioconductor-prolocdata: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-knitr: 
   :depends r-lbfgs: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.4.6``
   :depends r-rcpparmadillo: 
   :depends r-rlang: 
   :depends r-robustbase: 
   :depends r-tidyr: 
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

      mamba install bioconductor-bandle

   and update with::

      mamba update bioconductor-bandle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bandle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bandle:<tag>

   (see `bioconductor-bandle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bandle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bandle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bandle
   :alt:   (downloads)
.. |docker_bioconductor-bandle| image:: https://quay.io/repository/biocontainers/bioconductor-bandle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bandle
.. _`bioconductor-bandle/tags`: https://quay.io/repository/biocontainers/bioconductor-bandle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bandle";
        var versions = ["1.4.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bandle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bandle/README.html