:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geuvstore2'
.. highlight: bash

bioconductor-geuvstore2
=======================

.. conda:recipe:: bioconductor-geuvstore2
   :replaces_section_title:

   demonstrate storage discipline for eQTL enumerations and analyses based on a selection of GEUVADIS results

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/geuvStore2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geuvstore2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvstore2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvstore2/meta.yaml>`_

   


.. conda:package:: bioconductor-geuvstore2

   |downloads_bioconductor-geuvstore2| |docker_bioconductor-geuvstore2|

   :versions: 1.14.0-1, 1.12.0-0
   
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-gqtlbase: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-batchjobs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geuvstore2

   and update with::

      conda update bioconductor-geuvstore2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geuvstore2:<tag>

   (see `bioconductor-geuvstore2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geuvstore2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geuvstore2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geuvstore2
   :alt:   (downloads)
.. |docker_bioconductor-geuvstore2| image:: https://quay.io/repository/biocontainers/bioconductor-geuvstore2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geuvstore2
.. _`bioconductor-geuvstore2/tags`: https://quay.io/repository/biocontainers/bioconductor-geuvstore2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geuvstore2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geuvstore2/README.html