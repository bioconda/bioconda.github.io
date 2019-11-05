:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mtseekerdata'
.. highlight: bash

bioconductor-mtseekerdata
=========================

.. conda:recipe:: bioconductor-mtseekerdata
   :replaces_section_title:

   Provides examples for the MTseeker package vignette.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/MTseekerData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mtseekerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtseekerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtseekerdata/meta.yaml>`_

   


.. conda:package:: bioconductor-mtseekerdata

   |downloads_bioconductor-mtseekerdata| |docker_bioconductor-mtseekerdata|

   :versions: 1.3.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-mtseeker: >=1.3.0,<1.4.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mtseekerdata

   and update with::

      conda update bioconductor-mtseekerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mtseekerdata:<tag>

   (see `bioconductor-mtseekerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mtseekerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mtseekerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mtseekerdata
   :alt:   (downloads)
.. |docker_bioconductor-mtseekerdata| image:: https://quay.io/repository/biocontainers/bioconductor-mtseekerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mtseekerdata
.. _`bioconductor-mtseekerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mtseekerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mtseekerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mtseekerdata/README.html