.. title:: Package Recipe 'bioconductor-svm2crmdata'
.. highlight: bash


bioconductor-svm2crmdata
========================

.. conda:recipe:: bioconductor-svm2crmdata
   :replaces_section_title:

   An example dataset for use with the SVM2CRM package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SVM2CRMdata.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-svm2crmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svm2crmdata/meta.yaml>`_

   


.. conda:package:: bioconductor-svm2crmdata

   |downloads_bioconductor-svm2crmdata| |docker_bioconductor-svm2crmdata|

   :versions: 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-svm2crmdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-svm2crmdata

   and update with::

      conda update bioconductor-svm2crmdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-svm2crmdata


.. |required_by_bioconductor-svm2crmdata| conda:required_by:: bioconductor-svm2crmdata
.. |downloads_bioconductor-svm2crmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svm2crmdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-svm2crmdata| image:: https://quay.io/repository/biocontainers/bioconductor-svm2crmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svm2crmdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svm2crmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svm2crmdata/README.html

