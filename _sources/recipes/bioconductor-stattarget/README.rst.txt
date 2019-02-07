.. title:: Package Recipe 'bioconductor-stattarget'
.. highlight: bash


bioconductor-stattarget
=======================

.. conda:recipe:: bioconductor-stattarget
   :replaces_section_title:

   A streamlined tool provides a graphical user interface for quality control based signal drift correction \(QC\-RFSC\)\, integration of data from multi\-batch MS\-based experiments\, and the comprehensive statistical analysis in metabolomics and proteomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/statTarget.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-stattarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stattarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stattarget/meta.yaml>`_

   


.. conda:package:: bioconductor-stattarget

   |downloads_bioconductor-stattarget| |docker_bioconductor-stattarget|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-roc` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-pdist`  :conda:package:`r-pls`  :conda:package:`r-plyr`  :conda:package:`r-randomforest`  :conda:package:`r-rrcov`  

   :required~by: |required_by_bioconductor-stattarget|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stattarget

   and update with::

      conda update bioconductor-stattarget

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-stattarget


.. |required_by_bioconductor-stattarget| conda:required_by:: bioconductor-stattarget
.. |downloads_bioconductor-stattarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stattarget.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-stattarget| image:: https://quay.io/repository/biocontainers/bioconductor-stattarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stattarget







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stattarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stattarget/README.html

