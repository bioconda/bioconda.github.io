:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncigraphdata'
.. highlight: bash

bioconductor-ncigraphdata
=========================

.. conda:recipe:: bioconductor-ncigraphdata
   :replaces_section_title:
   :noindex:

   Data for the NCIgraph software package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/NCIgraphData.html
   :license: GPL-3
   :recipe: /`bioconductor-ncigraphdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraphdata/meta.yaml>`_

   Provides pathways from the NCI Pathways Database as R graph objects


.. conda:package:: bioconductor-ncigraphdata

   |downloads_bioconductor-ncigraphdata| |docker_bioconductor-ncigraphdata|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncigraphdata

   and update with::

      conda update bioconductor-ncigraphdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncigraphdata:<tag>

   (see `bioconductor-ncigraphdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncigraphdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncigraphdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncigraphdata
   :alt:   (downloads)
.. |docker_bioconductor-ncigraphdata| image:: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata
.. _`bioconductor-ncigraphdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ncigraphdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncigraphdata/README.html