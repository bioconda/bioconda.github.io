.. title:: Package Recipe 'bioconductor-massir'
.. highlight: bash


bioconductor-massir
===================

.. conda:recipe:: bioconductor-massir
   :replaces_section_title:

   Predicts the sex of samples in gene expression microarray datasets

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/massiR.html
   :license: GPL-3
   :recipe: /`bioconductor-massir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-massir/meta.yaml>`_
   :links: biotools: :biotools:`massir`

   


.. conda:package:: bioconductor-massir

   |downloads_bioconductor-massir| |docker_bioconductor-massir|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-diptest`  :conda:package:`r-gplots`  

   :required~by: |required_by_bioconductor-massir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-massir

   and update with::

      conda update bioconductor-massir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-massir


.. |required_by_bioconductor-massir| conda:required_by:: bioconductor-massir
.. |downloads_bioconductor-massir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-massir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-massir| image:: https://quay.io/repository/biocontainers/bioconductor-massir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-massir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-massir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-massir/README.html

