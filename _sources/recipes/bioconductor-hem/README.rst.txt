:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hem'
.. highlight: bash

bioconductor-hem
================

.. conda:recipe:: bioconductor-hem
   :replaces_section_title:
   :noindex:

   Heterogeneous error model for identification of differentially expressed genes under multiple conditions

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/HEM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hem/meta.yaml>`_
   :links: biotools: :biotools:`hem`, doi: :doi:`10.1093/bioinformatics/bth192`

   This package fits heterogeneous error models for analysis of microarray data


.. conda:package:: bioconductor-hem

   |downloads_bioconductor-hem| |docker_bioconductor-hem|

   :versions:
      
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hem

   and update with::

      conda update bioconductor-hem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hem:<tag>

   (see `bioconductor-hem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hem
   :alt:   (downloads)
.. |docker_bioconductor-hem| image:: https://quay.io/repository/biocontainers/bioconductor-hem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hem
.. _`bioconductor-hem/tags`: https://quay.io/repository/biocontainers/bioconductor-hem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hem/README.html