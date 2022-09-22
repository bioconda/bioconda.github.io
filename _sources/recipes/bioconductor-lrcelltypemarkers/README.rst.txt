:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrcelltypemarkers'
.. highlight: bash

bioconductor-lrcelltypemarkers
==============================

.. conda:recipe:: bioconductor-lrcelltypemarkers
   :replaces_section_title:
   :noindex:

   Marker gene information for LRcell R Bioconductor package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/LRcellTypeMarkers.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lrcelltypemarkers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcelltypemarkers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcelltypemarkers/meta.yaml>`_

   This is an external ExperimentData package for LRcell. This data package contains the gene enrichment scores calculated from scRNA\-seq dataset which indicates the gene enrichment of each cell type in certain brain region. LRcell package is used to identify specific sub\-cell types that drives the changes observed in a bulk RNA\-seq differential gene expression experiment. For more details\, please visit\: https\:\/\/github.com\/marvinquiet\/LRcell.


.. conda:package:: bioconductor-lrcelltypemarkers

   |downloads_bioconductor-lrcelltypemarkers| |docker_bioconductor-lrcelltypemarkers|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrcelltypemarkers

   and update with::

      conda update bioconductor-lrcelltypemarkers

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrcelltypemarkers:<tag>

   (see `bioconductor-lrcelltypemarkers/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrcelltypemarkers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrcelltypemarkers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrcelltypemarkers
   :alt:   (downloads)
.. |docker_bioconductor-lrcelltypemarkers| image:: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers
.. _`bioconductor-lrcelltypemarkers/tags`: https://quay.io/repository/biocontainers/bioconductor-lrcelltypemarkers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lrcelltypemarkers";
        var versions = ["1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrcelltypemarkers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrcelltypemarkers/README.html