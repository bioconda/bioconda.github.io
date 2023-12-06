:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moma'
.. highlight: bash

bioconductor-moma
=================

.. conda:recipe:: bioconductor-moma
   :replaces_section_title:
   :noindex:

   Multi Omic Master Regulator Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MOMA.html
   :license: GPL-3
   :recipe: /`bioconductor-moma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma/meta.yaml>`_

   This package implements the inference of candidate master regulator proteins from multi\-omics\' data \(MOMA\) algorithm\, as well as ancillary analysis and visualization functions.


.. conda:package:: bioconductor-moma

   |downloads_bioconductor-moma| |docker_bioconductor-moma|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mkmisc: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-moma

   and update with::

      mamba update bioconductor-moma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moma:<tag>

   (see `bioconductor-moma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moma
   :alt:   (downloads)
.. |docker_bioconductor-moma| image:: https://quay.io/repository/biocontainers/bioconductor-moma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moma
.. _`bioconductor-moma/tags`: https://quay.io/repository/biocontainers/bioconductor-moma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moma";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moma/README.html