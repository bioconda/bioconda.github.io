:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icheck'
.. highlight: bash

bioconductor-icheck
===================

.. conda:recipe:: bioconductor-icheck
   :replaces_section_title:
   :noindex:

   QC Pipeline and Data Analysis Tools for High\-Dimensional Illumina mRNA Expression Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/iCheck.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-icheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icheck/meta.yaml>`_

   QC pipeline and data analysis tools for high\-dimensional Illumina mRNA expression data.


.. conda:package:: bioconductor-icheck

   |downloads_bioconductor-icheck| |docker_bioconductor-icheck|

   :versions:
      
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-geneselectmmd: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-lumi: ``>=2.42.0,<2.43.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gplots: 
   :depends r-lmtest: 
   :depends r-mass: 
   :depends r-randomforest: 
   :depends r-rgl: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icheck

   and update with::

      conda update bioconductor-icheck

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icheck:<tag>

   (see `bioconductor-icheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icheck
   :alt:   (downloads)
.. |docker_bioconductor-icheck| image:: https://quay.io/repository/biocontainers/bioconductor-icheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icheck
.. _`bioconductor-icheck/tags`: https://quay.io/repository/biocontainers/bioconductor-icheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icheck/README.html