:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigatyper'
.. highlight: bash

shigatyper
==========

.. conda:recipe:: shigatyper
   :replaces_section_title:

   Typing tool for Shigella spp. from WGS Illumina sequencing

   :homepage: https://github.com/CFSAN-Biostatistics/shigatyper
   :license: Public Domain / Public Domain
   :recipe: /`shigatyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper/meta.yaml>`_

   


.. conda:package:: shigatyper

   |downloads_shigatyper| |docker_shigatyper|

   :versions: 1.0.5-3
   
   :depends bcftools: >=1.9
   :depends minimap2: >=2.16
   :depends pandas: >=0.24.2
   :depends python: >=3.7
   :depends samtools: >=1.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shigatyper

   and update with::

      conda update shigatyper

   or use the docker container::

      docker pull quay.io/biocontainers/shigatyper:<tag>

   (see `shigatyper/tags`_ for valid values for ``<tag>``)


.. |downloads_shigatyper| image:: https://img.shields.io/conda/dn/bioconda/shigatyper.svg?style=flat
   :alt:   (downloads)
.. |docker_shigatyper| image:: https://quay.io/repository/biocontainers/shigatyper/status
   :target: https://quay.io/repository/biocontainers/shigatyper
.. _`shigatyper/tags`: https://quay.io/repository/biocontainers/shigatyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigatyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigatyper/README.html