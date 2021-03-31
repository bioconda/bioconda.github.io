:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quartpac'
.. highlight: bash

bioconductor-quartpac
=====================

.. conda:recipe:: bioconductor-quartpac
   :replaces_section_title:
   :noindex:

   Identification of mutational clusters in protein quaternary structures.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/QuartPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-quartpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac/meta.yaml>`_
   :links: biotools: :biotools:`quartpac`, doi: :doi:`10.1186/s12859-016-0963-3`

   Identifies clustering of somatic mutations in proteins over the entire quaternary structure.


.. conda:package:: bioconductor-quartpac

   |downloads_bioconductor-quartpac| |docker_bioconductor-quartpac|

   :versions:
      
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-graphpac: ``>=1.32.0,<1.33.0``
   :depends bioconductor-ipac: ``>=1.34.0,<1.35.0``
   :depends bioconductor-spacepac: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quartpac

   and update with::

      conda update bioconductor-quartpac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quartpac:<tag>

   (see `bioconductor-quartpac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quartpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quartpac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quartpac
   :alt:   (downloads)
.. |docker_bioconductor-quartpac| image:: https://quay.io/repository/biocontainers/bioconductor-quartpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quartpac
.. _`bioconductor-quartpac/tags`: https://quay.io/repository/biocontainers/bioconductor-quartpac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quartpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quartpac/README.html