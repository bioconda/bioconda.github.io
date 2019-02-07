.. title:: Package Recipe 'bioconductor-chicago'
.. highlight: bash


bioconductor-chicago
====================

.. conda:recipe:: bioconductor-chicago
   :replaces_section_title:

   A pipeline for analysing Capture Hi\-C data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Chicago.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chicago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicago/meta.yaml>`_
   :links: biotools: :biotools:`chicago`

   


.. conda:package:: bioconductor-chicago

   |downloads_bioconductor-chicago| |docker_bioconductor-chicago|

   :versions: 1.10.1, 1.8.0, 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-delaporte`  :conda:package:`r-hmisc`  :conda:package:`r-mass`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-chicago|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chicago

   and update with::

      conda update bioconductor-chicago

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chicago


.. |required_by_bioconductor-chicago| conda:required_by:: bioconductor-chicago
.. |downloads_bioconductor-chicago| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chicago.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chicago| image:: https://quay.io/repository/biocontainers/bioconductor-chicago/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chicago







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chicago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chicago/README.html

