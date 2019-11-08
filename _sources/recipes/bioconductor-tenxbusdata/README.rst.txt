:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxbusdata'
.. highlight: bash

bioconductor-tenxbusdata
========================

.. conda:recipe:: bioconductor-tenxbusdata
   :replaces_section_title:

   Single cell dataset from 10x in BUS format

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/TENxBUSData.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-tenxbusdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbusdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbusdata/meta.yaml>`_

   Download Barcode\, UMI\, and Set \(BUS\) format of 10x datasets from within R. This package accompanies the package BUSpaRse\, which can load BUS format into R as a sparse matrix\, and which has utility functions related to using the C\+\+ command line package bustools.


.. conda:package:: bioconductor-tenxbusdata

   |downloads_bioconductor-tenxbusdata| |docker_bioconductor-tenxbusdata|

   :versions: 1.0.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tenxbusdata

   and update with::

      conda update bioconductor-tenxbusdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxbusdata:<tag>

   (see `bioconductor-tenxbusdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxbusdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxbusdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxbusdata
   :alt:   (downloads)
.. |docker_bioconductor-tenxbusdata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata
.. _`bioconductor-tenxbusdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxbusdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxbusdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxbusdata/README.html