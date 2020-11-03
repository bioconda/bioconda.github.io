:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regutools'
.. highlight: bash

bioconductor-regutools
======================

.. conda:recipe:: bioconductor-regutools
   :replaces_section_title:
   :noindex:

   regutools\: an R package for data extraction from RegulonDB

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/regutools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regutools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regutools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regutools/meta.yaml>`_

   RegulonDB has collected\, harmonized and centralized data from hundreds of experiments for nearly two decades and is considered a point of reference for transcriptional regulation in Escherichia coli K12. Here\, we present the regutools R package to facilitate programmatic access to RegulonDB data in computational biology. regutools provides researchers with the possibility of writing reproducible workflows with automated queries to RegulonDB. The regutools package serves as a bridge between RegulonDB data and the Bioconductor ecosystem by reusing the data structures and statistical methods powered by other Bioconductor packages. We demonstrate the integration of regutools with Bioconductor by analyzing transcription factor DNA binding sites and transcriptional regulatory networks from RegulonDB. We anticipate that regutools will serve as a useful building block in our progress to further our understanding of gene regulatory networks.


.. conda:package:: bioconductor-regutools

   |downloads_bioconductor-regutools| |docker_bioconductor-regutools|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-annotationhub: ``>=2.22.0,<2.23.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rcy3: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regutools

   and update with::

      conda update bioconductor-regutools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regutools:<tag>

   (see `bioconductor-regutools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regutools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regutools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regutools
   :alt:   (downloads)
.. |docker_bioconductor-regutools| image:: https://quay.io/repository/biocontainers/bioconductor-regutools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regutools
.. _`bioconductor-regutools/tags`: https://quay.io/repository/biocontainers/bioconductor-regutools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regutools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regutools/README.html