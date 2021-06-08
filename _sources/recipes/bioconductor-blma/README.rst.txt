:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blma'
.. highlight: bash

bioconductor-blma
=================

.. conda:recipe:: bioconductor-blma
   :replaces_section_title:
   :noindex:

   BLMA\: A package for bi\-level meta\-analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BLMA.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-blma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blma/meta.yaml>`_

   Suit of tools for bi\-level meta\-analysis. The package can be used in a wide range of applications\, including general hypothesis testings\, differential expression analysis\, functional analysis\, and pathway analysis.


.. conda:package:: bioconductor-blma

   |downloads_bioconductor-blma| |docker_bioconductor-blma|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-padog: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rontotools: ``>=2.20.0,<2.21.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gsa: 
   :depends r-metafor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-blma

   and update with::

      conda update bioconductor-blma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blma:<tag>

   (see `bioconductor-blma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blma
   :alt:   (downloads)
.. |docker_bioconductor-blma| image:: https://quay.io/repository/biocontainers/bioconductor-blma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blma
.. _`bioconductor-blma/tags`: https://quay.io/repository/biocontainers/bioconductor-blma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blma/README.html