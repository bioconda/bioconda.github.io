:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapredictdsc'
.. highlight: bash

bioconductor-mapredictdsc
=========================

.. conda:recipe:: bioconductor-mapredictdsc
   :replaces_section_title:
   :noindex:

   Phenotype prediction using microarray data\: approach of the best overall team in the IMPROVER Diagnostic Signature Challenge

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/maPredictDSC.html
   :license: GPL-2
   :recipe: /`bioconductor-mapredictdsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc/meta.yaml>`_
   :links: biotools: :biotools:`mapredictdsc`, doi: :doi:`10.1093/bioinformatics/btt492`

   This package implements the classification pipeline of the best overall team \(Team221\) in the IMPROVER Diagnostic Signature Challenge. Additional functionality is added to compare 27 combinations of data preprocessing\, feature selection and classifier types.


.. conda:package:: bioconductor-mapredictdsc

   |downloads_bioconductor-mapredictdsc| |docker_bioconductor-mapredictdsc|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-affy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gcrma: ``>=2.60.0,<2.61.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.2.0,<3.3.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-lungcanceracvssccgeo: ``>=1.24.0,<1.25.0``
   :depends bioconductor-roc: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-caret: 
   :depends r-class: 
   :depends r-e1071: 
   :depends r-mass: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mapredictdsc

   and update with::

      conda update bioconductor-mapredictdsc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapredictdsc:<tag>

   (see `bioconductor-mapredictdsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapredictdsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapredictdsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapredictdsc
   :alt:   (downloads)
.. |docker_bioconductor-mapredictdsc| image:: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc
.. _`bioconductor-mapredictdsc/tags`: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html