:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxplore'
.. highlight: bash

bioconductor-tenxplore
======================

.. conda:recipe:: bioconductor-tenxplore
   :replaces_section_title:

   ontological exploration of scRNA\-seq of 1.3 million mouse neurons from 10x genomics

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/tenXplore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxplore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore/meta.yaml>`_

   Perform ontological exploration of scRNA\-seq of 1.3 million mouse neurons from 10x genomics.


.. conda:package:: bioconductor-tenxplore

   |downloads_bioconductor-tenxplore| |docker_bioconductor-tenxplore|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-ontoproc: >=1.10.0,<1.11.0
   :depends bioconductor-org.mm.eg.db: >=3.11.0,<3.12.0
   :depends bioconductor-restfulse: >=1.10.0,<1.11.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-matrixstats: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tenxplore

   and update with::

      conda update bioconductor-tenxplore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxplore:<tag>

   (see `bioconductor-tenxplore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxplore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxplore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxplore
   :alt:   (downloads)
.. |docker_bioconductor-tenxplore| image:: https://quay.io/repository/biocontainers/bioconductor-tenxplore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxplore
.. _`bioconductor-tenxplore/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxplore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html