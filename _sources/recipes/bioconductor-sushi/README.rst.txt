:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sushi'
.. highlight: bash

bioconductor-sushi
==================

.. conda:recipe:: bioconductor-sushi
   :replaces_section_title:
   :noindex:

   Tools for visualizing genomics data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Sushi.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sushi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sushi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sushi/meta.yaml>`_
   :links: biotools: :biotools:`sushi`, doi: :doi:`10.1093/bioinformatics/btu379`

   Flexible\, quantitative\, and integrative genomic visualizations for publication\-quality multi\-panel figures


.. conda:package:: bioconductor-sushi

   |downloads_bioconductor-sushi| |docker_bioconductor-sushi|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.23.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sushi

   and update with::

      conda update bioconductor-sushi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sushi:<tag>

   (see `bioconductor-sushi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sushi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sushi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sushi
   :alt:   (downloads)
.. |docker_bioconductor-sushi| image:: https://quay.io/repository/biocontainers/bioconductor-sushi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sushi
.. _`bioconductor-sushi/tags`: https://quay.io/repository/biocontainers/bioconductor-sushi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sushi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sushi/README.html