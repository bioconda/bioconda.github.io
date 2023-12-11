:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidybulk'
.. highlight: bash

bioconductor-tidybulk
=====================

.. conda:recipe:: bioconductor-tidybulk
   :replaces_section_title:
   :noindex:

   Brings transcriptomics to the tidyverse

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tidybulk.html
   :license: GPL-3
   :recipe: /`bioconductor-tidybulk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk/meta.yaml>`_

   This is a collection of utility functions that allow to perform exploration of and calculations to RNA sequencing data\, in a modular\, pipe\-friendly and tidy fashion.


.. conda:package:: bioconductor-tidybulk

   |downloads_bioconductor-tidybulk| |docker_bioconductor-tidybulk|

   :versions:
      
      

      ``1.14.2-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-ttservice: ``>=0.3.6``
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

      mamba install bioconductor-tidybulk

   and update with::

      mamba update bioconductor-tidybulk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidybulk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidybulk:<tag>

   (see `bioconductor-tidybulk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidybulk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidybulk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidybulk
   :alt:   (downloads)
.. |docker_bioconductor-tidybulk| image:: https://quay.io/repository/biocontainers/bioconductor-tidybulk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidybulk
.. _`bioconductor-tidybulk/tags`: https://quay.io/repository/biocontainers/bioconductor-tidybulk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidybulk";
        var versions = ["1.14.2","1.12.0","1.10.0","1.6.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html