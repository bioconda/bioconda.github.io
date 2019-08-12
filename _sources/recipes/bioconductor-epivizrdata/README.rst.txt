:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrdata'
.. highlight: bash

bioconductor-epivizrdata
========================

.. conda:recipe:: bioconductor-epivizrdata
   :replaces_section_title:

   Serve data from Bioconductor Objects through a WebSocket connection.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/epivizrData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epivizrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrdata/meta.yaml>`_
   :links: biotools: :biotools:`epivizrdata`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-epivizrdata

   |downloads_bioconductor-epivizrdata| |docker_bioconductor-epivizrdata|

   :versions: 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-ensembldb: >=2.8.0,<2.9.0
   :depends bioconductor-epivizrserver: >=1.12.0,<1.13.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-organismdbi: >=1.26.0,<1.27.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrdata

   and update with::

      conda update bioconductor-epivizrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epivizrdata:<tag>

   (see `bioconductor-epivizrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epivizrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrdata
   :alt:   (downloads)
.. |docker_bioconductor-epivizrdata| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrdata
.. _`bioconductor-epivizrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrdata/README.html