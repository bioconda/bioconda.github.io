:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-camthc'
.. highlight: bash

bioconductor-camthc
===================

.. conda:recipe:: bioconductor-camthc
   :replaces_section_title:

   An R package for tissue heterogeneity characterization by convex analysis of mixtures \(CAM\). It provides basic functions to perform unsupervised deconvolution on mixture expression profiles by CAM and some auxiliary functions to help understand the subpopulation\-specific results. It also implements functions to perform supervised deconvolution based on prior knowledge of molecular markers\, S matrix or A matrix. Combining molecular markers from CAM and from prior knowledge can achieve semi\-supervised deconvolution of mixtures.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CAMTHC.html
   :license: GPL-2
   :recipe: /`bioconductor-camthc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camthc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camthc/meta.yaml>`_

   


.. conda:package:: bioconductor-camthc

   |downloads_bioconductor-camthc| |docker_bioconductor-camthc|

   :versions: 1.0.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-apcluster: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-corpcor: 
   :depends r-dmwr: 
   :depends r-geometry: 
   :depends r-nmf: 
   :depends r-pcapp: 
   :depends r-rjava: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-camthc

   and update with::

      conda update bioconductor-camthc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-camthc:<tag>

   (see `bioconductor-camthc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-camthc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-camthc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-camthc
   :alt:   (downloads)
.. |docker_bioconductor-camthc| image:: https://quay.io/repository/biocontainers/bioconductor-camthc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-camthc
.. _`bioconductor-camthc/tags`: https://quay.io/repository/biocontainers/bioconductor-camthc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-camthc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-camthc/README.html