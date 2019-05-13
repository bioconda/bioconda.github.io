:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sispa'
.. highlight: bash

bioconductor-sispa
==================

.. conda:recipe:: bioconductor-sispa
   :replaces_section_title:

   Sample Integrated Set Profile Analysis \(SISPA\) is a method designed to define sample groups with similar gene set enrichment profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-sispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa/meta.yaml>`_
   :links: biotools: :biotools:`sispa`, doi: :doi:`10.1093/nar/gkv1503`

   


.. conda:package:: bioconductor-sispa

   |downloads_bioconductor-sispa| |docker_bioconductor-sispa|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-gsva: >=1.30.0,<1.31.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-changepoint: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sispa

   and update with::

      conda update bioconductor-sispa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sispa:<tag>

   (see `bioconductor-sispa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sispa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sispa
   :alt:   (downloads)
.. |docker_bioconductor-sispa| image:: https://quay.io/repository/biocontainers/bioconductor-sispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sispa
.. _`bioconductor-sispa/tags`: https://quay.io/repository/biocontainers/bioconductor-sispa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sispa/README.html