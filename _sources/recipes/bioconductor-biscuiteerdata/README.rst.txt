:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biscuiteerdata'
.. highlight: bash

bioconductor-biscuiteerdata
===========================

.. conda:recipe:: bioconductor-biscuiteerdata
   :replaces_section_title:

   Data Package for Biscuiteer

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/biscuiteerData.html
   :license: GPL-3
   :recipe: /`bioconductor-biscuiteerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteerdata/meta.yaml>`_

   Contains default datasets used by the Bioconductor package biscuiteer.


.. conda:package:: bioconductor-biscuiteerdata

   |downloads_bioconductor-biscuiteerdata| |docker_bioconductor-biscuiteerdata|

   :versions: 1.0.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-curl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biscuiteerdata

   and update with::

      conda update bioconductor-biscuiteerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biscuiteerdata:<tag>

   (see `bioconductor-biscuiteerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biscuiteerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biscuiteerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biscuiteerdata
   :alt:   (downloads)
.. |docker_bioconductor-biscuiteerdata| image:: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata
.. _`bioconductor-biscuiteerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biscuiteerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biscuiteerdata/README.html