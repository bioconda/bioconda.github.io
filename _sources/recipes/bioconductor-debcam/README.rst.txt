:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-debcam'
.. highlight: bash

bioconductor-debcam
===================

.. conda:recipe:: bioconductor-debcam
   :replaces_section_title:
   :noindex:

   Deconvolution by Convex Analysis of Mixtures

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/debCAM.html
   :license: GPL-2
   :recipe: /`bioconductor-debcam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam/meta.yaml>`_

   An R package for fully unsupervised deconvolution of complex tissues. It provides basic functions to perform unsupervised deconvolution on mixture expression profiles by Convex Analysis of Mixtures \(CAM\) and some auxiliary functions to help understand the subpopulation\-specific results. It also implements functions to perform supervised deconvolution based on prior knowledge of molecular markers\, S matrix or A matrix. Combining molecular markers from CAM and from prior knowledge can achieve semi\-supervised deconvolution of mixtures.


.. conda:package:: bioconductor-debcam

   |downloads_bioconductor-debcam| |docker_bioconductor-debcam|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.46.0,<2.47.0``
   :depends bioconductor-biocparallel: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.16.0,<1.17.0``
   :depends openjdk: 
   :depends r-apcluster: 
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-corpcor: 
   :depends r-dmwr: 
   :depends r-geometry: 
   :depends r-nmf: 
   :depends r-nnls: 
   :depends r-pcapp: 
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-debcam

   and update with::

      conda update bioconductor-debcam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-debcam:<tag>

   (see `bioconductor-debcam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-debcam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-debcam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-debcam
   :alt:   (downloads)
.. |docker_bioconductor-debcam| image:: https://quay.io/repository/biocontainers/bioconductor-debcam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-debcam
.. _`bioconductor-debcam/tags`: https://quay.io/repository/biocontainers/bioconductor-debcam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-debcam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-debcam/README.html