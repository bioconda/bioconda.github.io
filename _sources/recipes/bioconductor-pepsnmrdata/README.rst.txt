:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepsnmrdata'
.. highlight: bash

bioconductor-pepsnmrdata
========================

.. conda:recipe:: bioconductor-pepsnmrdata
   :replaces_section_title:

   Datasets for the PepsNMR package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/PepsNMRData.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-pepsnmrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata/meta.yaml>`_

   This package contains all the datasets used in the PepsNMR package.


.. conda:package:: bioconductor-pepsnmrdata

   |downloads_bioconductor-pepsnmrdata| |docker_bioconductor-pepsnmrdata|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.2.0-0, 1.0.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepsnmrdata

   and update with::

      conda update bioconductor-pepsnmrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepsnmrdata:<tag>

   (see `bioconductor-pepsnmrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepsnmrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsnmrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepsnmrdata
   :alt:   (downloads)
.. |docker_bioconductor-pepsnmrdata| image:: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata
.. _`bioconductor-pepsnmrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html