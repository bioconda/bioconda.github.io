:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcagopromoter'
.. highlight: bash

bioconductor-pcagopromoter
==========================

.. conda:recipe:: bioconductor-pcagopromoter
   :replaces_section_title:

   This package contains functions to ease the analyses of DNA micro arrays. It utilizes principal component analysis as the initial multivariate analysis\, followed by functional interpretation of the principal component dimensions with overrepresentation analysis for GO terms and regulatory interpretations using overrepresentation analysis of predicted transcription factor binding sites with the primo algorithm.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pcaGoPromoter.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pcagopromoter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcagopromoter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcagopromoter/meta.yaml>`_
   :links: biotools: :biotools:`pcagopromoter`

   


.. conda:package:: bioconductor-pcagopromoter

   |downloads_bioconductor-pcagopromoter| |docker_bioconductor-pcagopromoter|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ellipse: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcagopromoter

   and update with::

      conda update bioconductor-pcagopromoter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pcagopromoter:<tag>

   (see `bioconductor-pcagopromoter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcagopromoter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcagopromoter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pcagopromoter| image:: https://quay.io/repository/biocontainers/bioconductor-pcagopromoter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcagopromoter
.. _`bioconductor-pcagopromoter/tags`: https://quay.io/repository/biocontainers/bioconductor-pcagopromoter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcagopromoter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcagopromoter/README.html