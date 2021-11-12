:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enmix'
.. highlight: bash

bioconductor-enmix
==================

.. conda:recipe:: bioconductor-enmix
   :replaces_section_title:
   :noindex:

   Quality control and analysis tools for Illumina DNA methylation BeadChip

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ENmix.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix/meta.yaml>`_

   Tool kits for quanlity control\, analysis and visulization of Illumina DNA methylation arrays.


.. conda:package:: bioconductor-enmix

   |downloads_bioconductor-enmix| |docker_bioconductor-enmix|

   :versions:
      
      

      ``1.28.2-0``,  ``1.26.8-0``,  ``1.26.0-0``,  ``1.25.1-0``,  ``1.22.0-0``,  ``1.20.3-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.0.0,<3.1.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-genefilter: ``>=1.74.0,<1.75.0``
   :depends bioconductor-geneplotter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-illuminaio: ``>=0.34.0,<0.35.0``
   :depends bioconductor-impute: ``>=1.66.0,<1.67.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-minfi: ``>=1.38.0,<1.39.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-dynamictreecut: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-irr: 
   :depends r-matrixstats: 
   :depends r-quadprog: 
   :depends r-rpmm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enmix

   and update with::

      conda update bioconductor-enmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enmix:<tag>

   (see `bioconductor-enmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enmix
   :alt:   (downloads)
.. |docker_bioconductor-enmix| image:: https://quay.io/repository/biocontainers/bioconductor-enmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmix
.. _`bioconductor-enmix/tags`: https://quay.io/repository/biocontainers/bioconductor-enmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enmix";
        var versions = ["1.28.2","1.26.8","1.26.0","1.25.1","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmix/README.html