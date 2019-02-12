:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-olin'
.. highlight: bash

bioconductor-olin
=================

.. conda:recipe:: bioconductor-olin
   :replaces_section_title:

   Functions for normalisation of two\-color microarrays by optimised local regression and for detection of artefacts in microarray data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OLIN.html
   :license: GPL-2
   :recipe: /`bioconductor-olin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-olin/meta.yaml>`_
   :links: biotools: :biotools:`olin`

   


.. conda:package:: bioconductor-olin

   |downloads_bioconductor-olin| |docker_bioconductor-olin|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-marray: >=1.60.0,<1.61.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-locfit: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-olin

   and update with::

      conda update bioconductor-olin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-olin:<tag>

   (see `bioconductor-olin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-olin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-olin.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-olin| image:: https://quay.io/repository/biocontainers/bioconductor-olin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-olin
.. _`bioconductor-olin/tags`: https://quay.io/repository/biocontainers/bioconductor-olin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-olin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-olin/README.html