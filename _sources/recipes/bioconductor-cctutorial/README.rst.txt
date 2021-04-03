:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cctutorial'
.. highlight: bash

bioconductor-cctutorial
=======================

.. conda:recipe:: bioconductor-cctutorial
   :replaces_section_title:
   :noindex:

   Data package for ChIP\-chip tutorial

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/ccTutorial.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cctutorial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cctutorial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cctutorial/meta.yaml>`_

   This is a data package that accompanies a ChIP\-chip tutorial\, which has been published in PLoS Computational Biology. The data and source code in this package allow the reader to completely reproduce the steps in the tutorial.


.. conda:package:: bioconductor-cctutorial

   |downloads_bioconductor-cctutorial| |docker_bioconductor-cctutorial|

   :versions:
      
      

      ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-ringo: ``>=1.54.0,<1.55.0``
   :depends bioconductor-topgo: ``>=2.42.0,<2.43.0``
   :depends curl: ``>=7.76.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cctutorial

   and update with::

      conda update bioconductor-cctutorial

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cctutorial:<tag>

   (see `bioconductor-cctutorial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cctutorial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cctutorial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cctutorial
   :alt:   (downloads)
.. |docker_bioconductor-cctutorial| image:: https://quay.io/repository/biocontainers/bioconductor-cctutorial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cctutorial
.. _`bioconductor-cctutorial/tags`: https://quay.io/repository/biocontainers/bioconductor-cctutorial?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cctutorial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cctutorial/README.html