:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxio'
.. highlight: bash

bioconductor-tenxio
===================

.. conda:recipe:: bioconductor-tenxio
   :replaces_section_title:
   :noindex:

   Import methods for 10X Genomics files

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TENxIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxio/meta.yaml>`_

   Provides a structured S4 approach to importing data files from the 10X pipelines. It mainly supports Single Cell Multiome ATAC \+ Gene Expression data among other data types. The main Bioconductor data representations used are SingleCellExperiment and RaggedExperiment.


.. conda:package:: bioconductor-tenxio

   |downloads_bioconductor-tenxio| |docker_bioconductor-tenxio|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocbaseutils: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocio: ``>=1.8.0,<1.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-matrixgenerics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tenxio

   and update with::

      conda update bioconductor-tenxio

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxio:<tag>

   (see `bioconductor-tenxio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxio
   :alt:   (downloads)
.. |docker_bioconductor-tenxio| image:: https://quay.io/repository/biocontainers/bioconductor-tenxio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxio
.. _`bioconductor-tenxio/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxio";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxio/README.html