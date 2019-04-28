:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphite'
.. highlight: bash

bioconductor-graphite
=====================

.. conda:recipe:: bioconductor-graphite
   :replaces_section_title:

   Graph objects from pathway topology derived from Biocarta\, HumanCyc\, KEGG\, NCI\, Panther\, PathBank\, PharmGKB\, Reactome and SMPDB databases.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/graphite.html
   :license: AGPL-3
   :recipe: /`bioconductor-graphite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphite/meta.yaml>`_
   :links: biotools: :biotools:`graphite`

   


.. conda:package:: bioconductor-graphite

   |downloads_bioconductor-graphite| |docker_bioconductor-graphite|

   :versions: 1.28.2-0, 1.28.1-0, 1.26.3-0, 1.24.0-0, 1.22.0-0, 1.16.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-checkmate: 
   :depends r-httr: 
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graphite

   and update with::

      conda update bioconductor-graphite

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphite:<tag>

   (see `bioconductor-graphite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphite.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-graphite| image:: https://quay.io/repository/biocontainers/bioconductor-graphite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphite
.. _`bioconductor-graphite/tags`: https://quay.io/repository/biocontainers/bioconductor-graphite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphite/README.html