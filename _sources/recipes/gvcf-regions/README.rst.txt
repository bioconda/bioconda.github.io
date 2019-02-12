:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf-regions'
.. highlight: bash

gvcf-regions
============

.. conda:recipe:: gvcf-regions
   :replaces_section_title:

   Convert a gVCF file in multiple formats into a BED file of callable regions

   :homepage: https://github.com/lijiayong/gvcf_regions
   :license: GPLv3
   :recipe: /`gvcf-regions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions/meta.yaml>`_

   


.. conda:package:: gvcf-regions

   |downloads_gvcf-regions| |docker_gvcf-regions|

   :versions: 2016.06.23-1, 2016.06.23-0, 2016.06.21-0, 2016.05.24-0, 2016.05.20-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gvcf-regions

   and update with::

      conda update gvcf-regions

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gvcf-regions:<tag>

   (see `gvcf-regions/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcf-regions| image:: https://img.shields.io/conda/dn/bioconda/gvcf-regions.svg?style=flat
   :alt:   (downloads)
.. |docker_gvcf-regions| image:: https://quay.io/repository/biocontainers/gvcf-regions/status
   :target: https://quay.io/repository/biocontainers/gvcf-regions
.. _`gvcf-regions/tags`: https://quay.io/repository/biocontainers/gvcf-regions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf-regions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf-regions/README.html