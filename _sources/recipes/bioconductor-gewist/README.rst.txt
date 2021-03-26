:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gewist'
.. highlight: bash

bioconductor-gewist
===================

.. conda:recipe:: bioconductor-gewist
   :replaces_section_title:
   :noindex:

   Gene Environment Wide Interaction Search Threshold

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GEWIST.html
   :license: GPL-2
   :recipe: /`bioconductor-gewist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist/meta.yaml>`_
   :links: biotools: :biotools:`gewist`, doi: :doi:`10.1002/gepi.20624`

   This \'GEWIST\' package provides statistical tools to efficiently optimize SNP prioritization for gene\-gene and gene\-environment interactions.


.. conda:package:: bioconductor-gewist

   |downloads_bioconductor-gewist| |docker_bioconductor-gewist|

   :versions:
      
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-car: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gewist

   and update with::

      conda update bioconductor-gewist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gewist:<tag>

   (see `bioconductor-gewist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gewist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gewist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gewist
   :alt:   (downloads)
.. |docker_bioconductor-gewist| image:: https://quay.io/repository/biocontainers/bioconductor-gewist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gewist
.. _`bioconductor-gewist/tags`: https://quay.io/repository/biocontainers/bioconductor-gewist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gewist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gewist/README.html