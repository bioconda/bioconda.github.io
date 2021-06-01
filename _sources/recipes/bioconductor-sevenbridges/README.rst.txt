:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sevenbridges'
.. highlight: bash

bioconductor-sevenbridges
=========================

.. conda:recipe:: bioconductor-sevenbridges
   :replaces_section_title:
   :noindex:

   Seven Bridges Platform API Client and Common Workflow Language Tool Builder in R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sevenbridges.html
   :license: Apache License 2.0 | file LICENSE
   :recipe: /`bioconductor-sevenbridges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenbridges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenbridges/meta.yaml>`_

   R client and utilities for Seven Bridges platform API\, from Cancer Genomics Cloud to other Seven Bridges supported platforms.


.. conda:package:: bioconductor-sevenbridges

   |downloads_bioconductor-sevenbridges| |docker_bioconductor-sevenbridges|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.5-0``,  ``1.12.3-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-docopt: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-objectproperties: 
   :depends r-stringr: 
   :depends r-uuid: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sevenbridges

   and update with::

      conda update bioconductor-sevenbridges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sevenbridges:<tag>

   (see `bioconductor-sevenbridges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sevenbridges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sevenbridges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sevenbridges
   :alt:   (downloads)
.. |docker_bioconductor-sevenbridges| image:: https://quay.io/repository/biocontainers/bioconductor-sevenbridges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sevenbridges
.. _`bioconductor-sevenbridges/tags`: https://quay.io/repository/biocontainers/bioconductor-sevenbridges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sevenbridges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sevenbridges/README.html