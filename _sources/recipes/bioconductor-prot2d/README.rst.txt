:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prot2d'
.. highlight: bash

bioconductor-prot2d
===================

.. conda:recipe:: bioconductor-prot2d
   :replaces_section_title:

   The purpose of this package is to analyze \(i.e. Normalize and select significant spots\) data issued from 2D GEl experiments

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/prot2D.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-prot2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prot2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prot2d/meta.yaml>`_
   :links: biotools: :biotools:`prot2d`

   


.. conda:package:: bioconductor-prot2d

   |downloads_bioconductor-prot2d| |docker_bioconductor-prot2d|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-impute: >=1.56.0,<1.57.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-mulcom: >=1.32.0,<1.33.0
   
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-fdrtool: 
   
   :depends r-mass: 
   
   :depends r-samr: 
   
   :depends r-st: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prot2d

   and update with::

      conda update bioconductor-prot2d

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prot2d:<tag>

   (see `bioconductor-prot2d/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prot2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prot2d.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prot2d| image:: https://quay.io/repository/biocontainers/bioconductor-prot2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prot2d
.. _`bioconductor-prot2d/tags`: https://quay.io/repository/biocontainers/bioconductor-prot2d?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prot2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prot2d/README.html