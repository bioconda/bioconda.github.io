.. title:: Package Recipe 'bioconductor-mapredictdsc'
.. highlight: bash


bioconductor-mapredictdsc
=========================

.. conda:recipe:: bioconductor-mapredictdsc
   :replaces_section_title:

   This package implements the classification pipeline of the best overall team \(Team221\) in the IMPROVER Diagnostic Signature Challenge. Additional functionality is added to compare 27 combinations of data preprocessing\, feature selection and classifier types.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/maPredictDSC.html
   :license: GPL-2
   :recipe: /`bioconductor-mapredictdsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc/meta.yaml>`_
   :links: biotools: :biotools:`mapredictdsc`, doi: :doi:`10.1093/bioinformatics/btt492`

   


.. conda:package:: bioconductor-mapredictdsc

   |downloads_bioconductor-mapredictdsc| |docker_bioconductor-mapredictdsc|

   :versions: 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-gcrma` >=2.54.0,<2.55.0 :conda:package:`bioconductor-hgu133plus2.db` >=3.2.0,<3.3.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-lungcanceracvssccgeo` >=1.18.0,<1.19.0 :conda:package:`bioconductor-roc` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-class`  :conda:package:`r-e1071`  :conda:package:`r-mass`  :conda:package:`r-rocr`  

   :required~by: |required_by_bioconductor-mapredictdsc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mapredictdsc

   and update with::

      conda update bioconductor-mapredictdsc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mapredictdsc


.. |required_by_bioconductor-mapredictdsc| conda:required_by:: bioconductor-mapredictdsc
.. |downloads_bioconductor-mapredictdsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapredictdsc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mapredictdsc| image:: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html

