:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesamedata'
.. highlight: bash

bioconductor-sesamedata
=======================

.. conda:recipe:: bioconductor-sesamedata
   :replaces_section_title:

   Supporting Data for SeSAMe Package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/sesameData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sesamedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata/meta.yaml>`_

   Provides supporting annotation and test data for SeSAMe package.


.. conda:package:: bioconductor-sesamedata

   |downloads_bioconductor-sesamedata| |docker_bioconductor-sesamedata|

   :versions: 1.4.0-0, 1.2.0-1, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-curl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sesamedata

   and update with::

      conda update bioconductor-sesamedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sesamedata:<tag>

   (see `bioconductor-sesamedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sesamedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesamedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sesamedata
   :alt:   (downloads)
.. |docker_bioconductor-sesamedata| image:: https://quay.io/repository/biocontainers/bioconductor-sesamedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesamedata
.. _`bioconductor-sesamedata/tags`: https://quay.io/repository/biocontainers/bioconductor-sesamedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html