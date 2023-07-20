:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mariner'
.. highlight: bash

bioconductor-mariner
====================

.. conda:recipe:: bioconductor-mariner
   :replaces_section_title:
   :noindex:

   Mariner\: Explore the Hi\-Cs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mariner.html
   :license: GPL-3
   :recipe: /`bioconductor-mariner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mariner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mariner/meta.yaml>`_

   Tools for manipulating paired ranges and working with Hi\-C data in R. Functionality includes manipulating\/merging paired regions\, generating paired ranges\, extracting\/aggregating interactions from \`.hic\` files\, and visualizing the results. Designed for compatibility with plotgardener for visualization.


.. conda:package:: bioconductor-mariner

   |downloads_bioconductor-mariner| |docker_bioconductor-mariner|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-plotgardener: ``>=1.6.0,<1.7.0``
   :depends bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-abind: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-colourvalues: 
   :depends r-data.table: 
   :depends r-dbscan: 
   :depends r-glue: 
   :depends r-magrittr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-strawr: ``>=0.0.91``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mariner

   and update with::

      conda update bioconductor-mariner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mariner:<tag>

   (see `bioconductor-mariner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mariner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mariner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mariner
   :alt:   (downloads)
.. |docker_bioconductor-mariner| image:: https://quay.io/repository/biocontainers/bioconductor-mariner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mariner
.. _`bioconductor-mariner/tags`: https://quay.io/repository/biocontainers/bioconductor-mariner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mariner";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mariner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mariner/README.html