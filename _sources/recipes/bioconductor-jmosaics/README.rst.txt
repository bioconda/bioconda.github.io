.. title:: Package Recipe 'bioconductor-jmosaics'
.. highlight: bash


bioconductor-jmosaics
=====================

.. conda:recipe:: bioconductor-jmosaics
   :replaces_section_title:

   jmosaics detects enriched regions of ChIP\-seq data sets jointly.

   :homepage: http://bioconductor.org/packages/release/bioc/html/jmosaics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-jmosaics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jmosaics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jmosaics/meta.yaml>`_

   


.. conda:package:: bioconductor-jmosaics

   |downloads_bioconductor-jmosaics| |docker_bioconductor-jmosaics|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-mosaics`  :conda:package:`r` >=2.15.2 

   :required~by: |required_by_bioconductor-jmosaics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jmosaics

   and update with::

      conda update bioconductor-jmosaics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-jmosaics


.. |required_by_bioconductor-jmosaics| conda:required_by:: bioconductor-jmosaics
.. |downloads_bioconductor-jmosaics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jmosaics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-jmosaics| image:: https://quay.io/repository/biocontainers/bioconductor-jmosaics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jmosaics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jmosaics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jmosaics/README.html

