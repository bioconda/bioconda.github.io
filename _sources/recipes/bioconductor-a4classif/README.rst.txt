.. title:: Package Recipe 'bioconductor-a4classif'
.. highlight: bash


bioconductor-a4classif
======================

.. conda:recipe:: bioconductor-a4classif
   :replaces_section_title:

   Automated Affymetrix Array Analysis Classification Package

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/a4Classif.html
   :license: GPL-3
   :recipe: /`bioconductor-a4classif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4classif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4classif/meta.yaml>`_

   


.. conda:package:: bioconductor-a4classif

   |downloads_bioconductor-a4classif| |docker_bioconductor-a4classif|

   :versions: 1.30.0

   :depends: :conda:package:`bioconductor-a4core` >=1.30.0,<1.31.0 :conda:package:`bioconductor-a4preproc` >=1.30.0,<1.31.0 :conda:package:`bioconductor-mlinterfaces` >=1.62.0,<1.63.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-glmnet`  :conda:package:`r-pamr`  :conda:package:`r-rocr`  :conda:package:`r-varselrf`  

   :required~by: |required_by_bioconductor-a4classif|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-a4classif

   and update with::

      conda update bioconductor-a4classif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-a4classif


.. |required_by_bioconductor-a4classif| conda:required_by:: bioconductor-a4classif
.. |downloads_bioconductor-a4classif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4classif.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-a4classif| image:: https://quay.io/repository/biocontainers/bioconductor-a4classif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4classif







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4classif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4classif/README.html

