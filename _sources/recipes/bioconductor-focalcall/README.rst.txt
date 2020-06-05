:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-focalcall'
.. highlight: bash

bioconductor-focalcall
======================

.. conda:recipe:: bioconductor-focalcall
   :replaces_section_title:
   :noindex:

   Detection of focal aberrations in DNA copy number data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/focalCall.html
   :license: GPL-2
   :recipe: /`bioconductor-focalcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-focalcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-focalcall/meta.yaml>`_
   :links: biotools: :biotools:`focalcall`, doi: :doi:`10.4137/cin.s19519`

   Detection of genomic focal aberrations in high\-resolution DNA copy number data


.. conda:package:: bioconductor-focalcall

   |downloads_bioconductor-focalcall| |docker_bioconductor-focalcall|

   :versions:
      
      

      ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-cghcall: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-focalcall

   and update with::

      conda update bioconductor-focalcall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-focalcall:<tag>

   (see `bioconductor-focalcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-focalcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-focalcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-focalcall
   :alt:   (downloads)
.. |docker_bioconductor-focalcall| image:: https://quay.io/repository/biocontainers/bioconductor-focalcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-focalcall
.. _`bioconductor-focalcall/tags`: https://quay.io/repository/biocontainers/bioconductor-focalcall?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-focalcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-focalcall/README.html