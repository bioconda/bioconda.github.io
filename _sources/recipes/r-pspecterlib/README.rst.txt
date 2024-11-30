:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pspecterlib'
.. highlight: bash

r-pspecterlib
=============

.. conda:recipe:: r-pspecterlib
   :replaces_section_title:
   :noindex:

   Proteomics R package for matching peaks in digested and intact proteomics

   :homepage: https://github.com/EMSL-Computing/pspecterlib
   :license: BSD-2-Clause
   :recipe: /`r-pspecterlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pspecterlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pspecterlib/meta.yaml>`_

   


.. conda:package:: r-pspecterlib

   |downloads_r-pspecterlib| |docker_r-pspecterlib|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-msnbase: 
   :depends bioconductor-mzr: 
   :depends bioconductor-rawrr: 
   :depends bioconductor-rhdf5: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cairo: 
   :depends r-chnosz: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-htmltools: 
   :depends r-isopat: 
   :depends r-knitr: 
   :depends r-lsa: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-tidyr: 
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

      mamba install r-pspecterlib

   and update with::

      mamba update r-pspecterlib

  To create a new environment, run::

      mamba create --name myenvname r-pspecterlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pspecterlib:<tag>

   (see `r-pspecterlib/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pspecterlib| image:: https://img.shields.io/conda/dn/bioconda/r-pspecterlib.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pspecterlib
   :alt:   (downloads)
.. |docker_r-pspecterlib| image:: https://quay.io/repository/biocontainers/r-pspecterlib/status
   :target: https://quay.io/repository/biocontainers/r-pspecterlib
.. _`r-pspecterlib/tags`: https://quay.io/repository/biocontainers/r-pspecterlib?tab=tags


.. raw:: html

    <script>
        var package = "r-pspecterlib";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pspecterlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pspecterlib/README.html