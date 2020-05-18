:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rwikipathways'
.. highlight: bash

bioconductor-rwikipathways
==========================

.. conda:recipe:: bioconductor-rwikipathways
   :replaces_section_title:

   rWikiPathways \- R client library for the WikiPathways API

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/rWikiPathways.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rwikipathways <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways/meta.yaml>`_

   Use this package to interface with the WikiPathways API.


.. conda:package:: bioconductor-rwikipathways

   |downloads_bioconductor-rwikipathways| |docker_bioconductor-rwikipathways|

   :versions: 1.8.2-0, 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-rjson: 
   :depends r-tidyr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rwikipathways

   and update with::

      conda update bioconductor-rwikipathways

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rwikipathways:<tag>

   (see `bioconductor-rwikipathways/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rwikipathways| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rwikipathways.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rwikipathways
   :alt:   (downloads)
.. |docker_bioconductor-rwikipathways| image:: https://quay.io/repository/biocontainers/bioconductor-rwikipathways/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rwikipathways
.. _`bioconductor-rwikipathways/tags`: https://quay.io/repository/biocontainers/bioconductor-rwikipathways?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html