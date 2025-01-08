:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alpsnmr'
.. highlight: bash

bioconductor-alpsnmr
====================

.. conda:recipe:: bioconductor-alpsnmr
   :replaces_section_title:
   :noindex:

   Automated spectraL Processing System for NMR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AlpsNMR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alpsnmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr/meta.yaml>`_

   Reads Bruker NMR data directories both zipped and unzipped. It provides automated and efficient signal processing for untargeted NMR metabolomics. It is able to interpolate the samples\, detect outliers\, exclude regions\, normalize\, detect peaks\, align the spectra\, integrate peaks\, manage metadata and visualize the spectra. After spectra proccessing\, it can apply multivariate analysis on extracted data. Efficient plotting with 1\-D data is also available. Basic reading of 1D ACD\/Labs exported JDX samples is also available.


.. conda:package:: bioconductor-alpsnmr

   |downloads_bioconductor-alpsnmr| |docker_bioconductor-alpsnmr|

   :versions:
      
      

      ``4.8.0-0``,  ``4.4.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.1.5-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-mixomics: ``>=6.30.0,<6.31.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-baseline: ``>=1.2-1``
   :depends r-cli: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-fs: ``>=1.2.6``
   :depends r-generics: 
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-glue: ``>=1.2.0``
   :depends r-htmltools: ``>=0.3.6``
   :depends r-magrittr: ``>=1.5``
   :depends r-matrixstats: ``>=0.54.0``
   :depends r-pcapp: ``>=1.9-73``
   :depends r-purrr: ``>=0.2.5``
   :depends r-readxl: ``>=1.1.0``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rlang: ``>=0.3.0.1``
   :depends r-rmarkdown: ``>=1.10``
   :depends r-scales: ``>=1.2.0``
   :depends r-signal: ``>=0.7-6``
   :depends r-speaq: ``>=2.4.0``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tibble: ``>=1.3.4``
   :depends r-tidyr: ``>=1.0.0``
   :depends r-tidyselect: 
   :depends r-vctrs: ``>=0.3.0``
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

      mamba install bioconductor-alpsnmr

   and update with::

      mamba update bioconductor-alpsnmr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alpsnmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alpsnmr:<tag>

   (see `bioconductor-alpsnmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alpsnmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpsnmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alpsnmr
   :alt:   (downloads)
.. |docker_bioconductor-alpsnmr| image:: https://quay.io/repository/biocontainers/bioconductor-alpsnmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpsnmr
.. _`bioconductor-alpsnmr/tags`: https://quay.io/repository/biocontainers/bioconductor-alpsnmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alpsnmr";
        var versions = ["4.8.0","4.4.0","4.2.0","4.0.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html