:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snageedata'
.. highlight: bash

bioconductor-snageedata
=======================

.. conda:recipe:: bioconductor-snageedata
   :replaces_section_title:

   SNAGEE data

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/SNAGEEdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snageedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snageedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snageedata/meta.yaml>`_

   SNAGEE data \- gene list and correlation matrix


.. conda:package:: bioconductor-snageedata

   |downloads_bioconductor-snageedata| |docker_bioconductor-snageedata|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snageedata

   and update with::

      conda update bioconductor-snageedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snageedata:<tag>

   (see `bioconductor-snageedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snageedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snageedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snageedata
   :alt:   (downloads)
.. |docker_bioconductor-snageedata| image:: https://quay.io/repository/biocontainers/bioconductor-snageedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snageedata
.. _`bioconductor-snageedata/tags`: https://quay.io/repository/biocontainers/bioconductor-snageedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snageedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snageedata/README.html