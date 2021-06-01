:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsemmed'
.. highlight: bash

bioconductor-rsemmed
====================

.. conda:recipe:: bioconductor-rsemmed
   :replaces_section_title:
   :noindex:

   An interface to the Semantic MEDLINE database

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rsemmed.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsemmed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed/meta.yaml>`_

   A programmatic interface to the Semantic MEDLINE database. It provides functions for searching the database for concepts and finding paths between concepts. Path searching can also be tailored to user specifications\, such as placing restrictions on concept types and the type of link between concepts. It also provides functions for summarizing and visualizing those paths.


.. conda:package:: bioconductor-rsemmed

   |downloads_bioconductor-rsemmed| |docker_bioconductor-rsemmed|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsemmed

   and update with::

      conda update bioconductor-rsemmed

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsemmed:<tag>

   (see `bioconductor-rsemmed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsemmed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsemmed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsemmed
   :alt:   (downloads)
.. |docker_bioconductor-rsemmed| image:: https://quay.io/repository/biocontainers/bioconductor-rsemmed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsemmed
.. _`bioconductor-rsemmed/tags`: https://quay.io/repository/biocontainers/bioconductor-rsemmed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html