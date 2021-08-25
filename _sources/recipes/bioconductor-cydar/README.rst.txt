:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cydar'
.. highlight: bash

bioconductor-cydar
==================

.. conda:recipe:: bioconductor-cydar
   :replaces_section_title:
   :noindex:

   Using Mass Cytometry for Differential Abundance Analyses

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cydar.html
   :license: GPL-3
   :recipe: /`bioconductor-cydar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar/meta.yaml>`_

   Identifies differentially abundant populations between samples and groups in mass cytometry data. Provides methods for counting cells into hyperspheres\, controlling the spatial false discovery rate\, and visualizing changes in abundance in the high\-dimensional marker space.


.. conda:package:: bioconductor-cydar

   |downloads_bioconductor-cydar| |docker_bioconductor-cydar|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocneighbors: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: 
   :depends r-shiny: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cydar

   and update with::

      conda update bioconductor-cydar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cydar:<tag>

   (see `bioconductor-cydar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cydar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cydar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cydar
   :alt:   (downloads)
.. |docker_bioconductor-cydar| image:: https://quay.io/repository/biocontainers/bioconductor-cydar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cydar
.. _`bioconductor-cydar/tags`: https://quay.io/repository/biocontainers/bioconductor-cydar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cydar";
        var versions = ["1.16.0","1.14.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cydar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cydar/README.html