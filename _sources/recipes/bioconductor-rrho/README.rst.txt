:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrho'
.. highlight: bash

bioconductor-rrho
=================

.. conda:recipe:: bioconductor-rrho
   :replaces_section_title:
   :noindex:

   Inference on agreement between ordered lists

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/RRHO.html
   :license: GPL-2
   :recipe: /`bioconductor-rrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho/meta.yaml>`_
   :links: biotools: :biotools:`rrho`, doi: :doi:`10.1038/nmeth.3252`

   The package is aimed at inference on the amount of agreement in two sorted lists using the Rank\-Rank Hypergeometric Overlap test.


.. conda:package:: bioconductor-rrho

   |downloads_bioconductor-rrho| |docker_bioconductor-rrho|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrho

   and update with::

      conda update bioconductor-rrho

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrho:<tag>

   (see `bioconductor-rrho/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrho| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrho.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrho
   :alt:   (downloads)
.. |docker_bioconductor-rrho| image:: https://quay.io/repository/biocontainers/bioconductor-rrho/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrho
.. _`bioconductor-rrho/tags`: https://quay.io/repository/biocontainers/bioconductor-rrho?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrho/README.html