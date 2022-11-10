:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnainteractmapk'
.. highlight: bash

bioconductor-rnainteractmapk
============================

.. conda:recipe:: bioconductor-rnainteractmapk
   :replaces_section_title:
   :noindex:

   Mapping of Signalling Networks through Synthetic Genetic Interaction Analysis by RNAi

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/RNAinteractMAPK.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteractmapk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk/meta.yaml>`_

   This package includes all data used in the paper \-Mapping of Signalling Networks through Synthetic Genetic Interaction Analysis by RNAi\- by Horn\, Sandmann\, Fischer et al..\, Nat. Methods\, 2011. The package vignette shows the R code to reproduce all figures in the paper.


.. conda:package:: bioconductor-rnainteractmapk

   |downloads_bioconductor-rnainteractmapk| |docker_bioconductor-rnainteractmapk|

   :versions:
      
      

      ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221110``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rnainteract: ``>=1.46.0,<1.47.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-fields: 
   :depends r-gdata: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-sparselda: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnainteractmapk

   and update with::

      conda update bioconductor-rnainteractmapk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnainteractmapk:<tag>

   (see `bioconductor-rnainteractmapk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnainteractmapk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteractmapk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnainteractmapk
   :alt:   (downloads)
.. |docker_bioconductor-rnainteractmapk| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk
.. _`bioconductor-rnainteractmapk/tags`: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnainteractmapk";
        var versions = ["1.36.0","1.32.0","1.32.0","1.30.0","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html