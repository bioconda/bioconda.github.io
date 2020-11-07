:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omiccircos'
.. highlight: bash

bioconductor-omiccircos
=======================

.. conda:recipe:: bioconductor-omiccircos
   :replaces_section_title:
   :noindex:

   High\-quality circular visualization of omics data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/OmicCircos.html
   :license: GPL-2
   :recipe: /`bioconductor-omiccircos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omiccircos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omiccircos/meta.yaml>`_
   :links: biotools: :biotools:`omiccircos`, doi: :doi:`10.4137/cin.s13495`

   OmicCircos is an R application and package for generating high\-quality circular plots for omics data.


.. conda:package:: bioconductor-omiccircos

   |downloads_bioconductor-omiccircos| |docker_bioconductor-omiccircos|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omiccircos

   and update with::

      conda update bioconductor-omiccircos

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omiccircos:<tag>

   (see `bioconductor-omiccircos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omiccircos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omiccircos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omiccircos
   :alt:   (downloads)
.. |docker_bioconductor-omiccircos| image:: https://quay.io/repository/biocontainers/bioconductor-omiccircos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omiccircos
.. _`bioconductor-omiccircos/tags`: https://quay.io/repository/biocontainers/bioconductor-omiccircos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omiccircos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omiccircos/README.html