:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepstat'
.. highlight: bash

bioconductor-pepstat
====================

.. conda:recipe:: bioconductor-pepstat
   :replaces_section_title:
   :noindex:

   Statistical analysis of peptide microarrays

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/pepStat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepstat/meta.yaml>`_
   :links: biotools: :biotools:`pepstat`, doi: :doi:`10.1007/978-1-4939-3037-1_10`

   Statistical analysis of peptide microarrays


.. conda:package:: bioconductor-pepstat

   |downloads_bioconductor-pepstat| |docker_bioconductor-pepstat|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepstat

   and update with::

      conda update bioconductor-pepstat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepstat:<tag>

   (see `bioconductor-pepstat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepstat
   :alt:   (downloads)
.. |docker_bioconductor-pepstat| image:: https://quay.io/repository/biocontainers/bioconductor-pepstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepstat
.. _`bioconductor-pepstat/tags`: https://quay.io/repository/biocontainers/bioconductor-pepstat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepstat/README.html