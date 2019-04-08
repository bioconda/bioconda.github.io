:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svm2crm'
.. highlight: bash

bioconductor-svm2crm
====================

.. conda:recipe:: bioconductor-svm2crm
   :replaces_section_title:

   Detection of cis\-regulatory elements using svm implemented in LiblineaR.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SVM2CRM.html
   :license: GPL-3
   :recipe: /`bioconductor-svm2crm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crm/meta.yaml>`_

   


.. conda:package:: bioconductor-svm2crm

   |downloads_bioconductor-svm2crm| |docker_bioconductor-svm2crm|

   :versions: 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-svm2crmdata: >=1.14.0,<1.15.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-liblinear: 
   :depends r-mclust: 
   :depends r-pls: 
   :depends r-rocr: 
   :depends r-squash: 
   :depends r-verification: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-svm2crm

   and update with::

      conda update bioconductor-svm2crm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svm2crm:<tag>

   (see `bioconductor-svm2crm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svm2crm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svm2crm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-svm2crm| image:: https://quay.io/repository/biocontainers/bioconductor-svm2crm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svm2crm
.. _`bioconductor-svm2crm/tags`: https://quay.io/repository/biocontainers/bioconductor-svm2crm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svm2crm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svm2crm/README.html