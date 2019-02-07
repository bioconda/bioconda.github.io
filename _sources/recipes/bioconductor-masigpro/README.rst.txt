.. title:: Package Recipe 'bioconductor-masigpro'
.. highlight: bash


bioconductor-masigpro
=====================

.. conda:recipe:: bioconductor-masigpro
   :replaces_section_title:

   maSigPro is a regression based approach to find genes for which there are significant gene expression profile differences between experimental groups in time course microarray and RNA\-Seq experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/maSigPro.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-masigpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-masigpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-masigpro/meta.yaml>`_
   :links: biotools: :biotools:`masigpro`, doi: :doi:`10.1093/bioinformatics/btu333`

   


.. conda:package:: bioconductor-masigpro

   |downloads_bioconductor-masigpro| |docker_bioconductor-masigpro|

   :versions: 1.54.0, 1.52.0, 1.50.0, 1.49.4, 1.49.3, 1.49.0, 1.48.0, 1.46.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-mclust`  :conda:package:`r-venn`  

   :required~by: |required_by_bioconductor-masigpro|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-masigpro

   and update with::

      conda update bioconductor-masigpro

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-masigpro


.. |required_by_bioconductor-masigpro| conda:required_by:: bioconductor-masigpro
.. |downloads_bioconductor-masigpro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-masigpro.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-masigpro| image:: https://quay.io/repository/biocontainers/bioconductor-masigpro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-masigpro







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-masigpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-masigpro/README.html

