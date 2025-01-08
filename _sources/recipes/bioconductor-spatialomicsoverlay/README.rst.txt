:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialomicsoverlay'
.. highlight: bash

bioconductor-spatialomicsoverlay
================================

.. conda:recipe:: bioconductor-spatialomicsoverlay
   :replaces_section_title:
   :noindex:

   Spatial Overlay for Omic Data from Nanostring GeoMx Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpatialOmicsOverlay.html
   :license: MIT
   :recipe: /`bioconductor-spatialomicsoverlay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialomicsoverlay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialomicsoverlay/meta.yaml>`_

   Tools for NanoString Technologies GeoMx Technology. Package to easily graph on top of an OME\-TIFF image. Plotting annotations can range from tissue segment to gene expression.


.. conda:package:: bioconductor-spatialomicsoverlay

   |downloads_bioconductor-spatialomicsoverlay| |docker_bioconductor-spatialomicsoverlay|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-geomxtools: ``>=3.10.0,<3.11.0``
   :depends bioconductor-rbioformats: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggtext: 
   :depends r-magick: 
   :depends r-pbapply: 
   :depends r-plotrix: 
   :depends r-readxl: 
   :depends r-scattermore: 
   :depends r-stringr: 
   :depends r-xml: 
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

      mamba install bioconductor-spatialomicsoverlay

   and update with::

      mamba update bioconductor-spatialomicsoverlay

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialomicsoverlay

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialomicsoverlay:<tag>

   (see `bioconductor-spatialomicsoverlay/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialomicsoverlay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialomicsoverlay.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialomicsoverlay
   :alt:   (downloads)
.. |docker_bioconductor-spatialomicsoverlay| image:: https://quay.io/repository/biocontainers/bioconductor-spatialomicsoverlay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialomicsoverlay
.. _`bioconductor-spatialomicsoverlay/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialomicsoverlay?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialomicsoverlay";
        var versions = ["1.6.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialomicsoverlay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialomicsoverlay/README.html