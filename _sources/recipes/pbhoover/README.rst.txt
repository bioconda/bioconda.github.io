:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbhoover'
.. highlight: bash

pbhoover
========

.. conda:recipe:: pbhoover
   :replaces_section_title:

   Variant caller for legacy and low coverage Pacific Biosciences\' long\-read sequencing data

   :homepage: https://gitlab.com/LPCDRP/pbhoover
   :license: GPLv3
   :recipe: /`pbhoover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover/meta.yaml>`_

   


.. conda:package:: pbhoover

   |downloads_pbhoover| |docker_pbhoover|

   :versions: 1.0.7-2, 1.0.7-0, 1.0.6-0
   
   :depends bcftools: 
   
   :depends numpy: 
   
   :depends pbcore: >=1.2.10
   
   :depends pbh5tools: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyvcf: 
   
   :depends tabix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbhoover

   and update with::

      conda update pbhoover

   or use the docker container::

      docker pull quay.io/biocontainers/pbhoover:<tag>

   (see `pbhoover/tags`_ for valid values for ``<tag>``)


.. |downloads_pbhoover| image:: https://img.shields.io/conda/dn/bioconda/pbhoover.svg?style=flat
   :alt:   (downloads)
.. |docker_pbhoover| image:: https://quay.io/repository/biocontainers/pbhoover/status
   :target: https://quay.io/repository/biocontainers/pbhoover
.. _`pbhoover/tags`: https://quay.io/repository/biocontainers/pbhoover?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbhoover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbhoover/README.html