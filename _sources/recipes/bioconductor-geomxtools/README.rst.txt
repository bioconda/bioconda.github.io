:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geomxtools'
.. highlight: bash

bioconductor-geomxtools
=======================

.. conda:recipe:: bioconductor-geomxtools
   :replaces_section_title:
   :noindex:

   NanoString GeoMx Tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeomxTools.html
   :license: MIT
   :recipe: /`bioconductor-geomxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geomxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geomxtools/meta.yaml>`_

   Tools for NanoString Technologies GeoMx Technology. Package provides functions for reading in DCC and PKC files based on an ExpressionSet derived object.  Normalization and QC functions are also included.


.. conda:package:: bioconductor-geomxtools

   |downloads_bioconductor-geomxtools| |docker_bioconductor-geomxtools|

   :versions:
      
      

      ``3.10.0-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.2.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-nanostringnctools: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-envstats: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-lmertest: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-seuratobject: 
   :depends r-stringr: 
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

      mamba install bioconductor-geomxtools

   and update with::

      mamba update bioconductor-geomxtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geomxtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geomxtools:<tag>

   (see `bioconductor-geomxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geomxtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geomxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geomxtools
   :alt:   (downloads)
.. |docker_bioconductor-geomxtools| image:: https://quay.io/repository/biocontainers/bioconductor-geomxtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geomxtools
.. _`bioconductor-geomxtools/tags`: https://quay.io/repository/biocontainers/bioconductor-geomxtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geomxtools";
        var versions = ["3.10.0","3.5.0","3.4.0","3.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geomxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geomxtools/README.html