:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metamsdata'
.. highlight: bash

bioconductor-metamsdata
=======================

.. conda:recipe:: bioconductor-metamsdata
   :replaces_section_title:

   Example CDF data for the metaMS package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/metaMSdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metamsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metamsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metamsdata/meta.yaml>`_

   Example CDF data for the metaMS package


.. conda:package:: bioconductor-metamsdata

   |downloads_bioconductor-metamsdata| |docker_bioconductor-metamsdata|

   :versions: 1.22.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metamsdata

   and update with::

      conda update bioconductor-metamsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metamsdata:<tag>

   (see `bioconductor-metamsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metamsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metamsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metamsdata
   :alt:   (downloads)
.. |docker_bioconductor-metamsdata| image:: https://quay.io/repository/biocontainers/bioconductor-metamsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metamsdata
.. _`bioconductor-metamsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-metamsdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metamsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metamsdata/README.html