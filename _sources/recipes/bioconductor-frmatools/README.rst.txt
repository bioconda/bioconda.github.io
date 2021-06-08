:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frmatools'
.. highlight: bash

bioconductor-frmatools
======================

.. conda:recipe:: bioconductor-frmatools
   :replaces_section_title:
   :noindex:

   Frozen RMA Tools

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/frmaTools.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-frmatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frmatools/meta.yaml>`_
   :links: biotools: :biotools:`frmatools`

   Tools for advanced use of the frma package.


.. conda:package:: bioconductor-frmatools

   |downloads_bioconductor-frmatools| |docker_bioconductor-frmatools|

   :versions:
      
      

      ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frmatools

   and update with::

      conda update bioconductor-frmatools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frmatools:<tag>

   (see `bioconductor-frmatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frmatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frmatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frmatools
   :alt:   (downloads)
.. |docker_bioconductor-frmatools| image:: https://quay.io/repository/biocontainers/bioconductor-frmatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frmatools
.. _`bioconductor-frmatools/tags`: https://quay.io/repository/biocontainers/bioconductor-frmatools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frmatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frmatools/README.html